"""
LARGE LANGUAGE MODLE
"""

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, StorageContext, Settings, load_index_from_storage
from llama_index.core.chat_engine.types import ChatMode, BaseChatEngine
from llama_index.core.embeddings import resolve_embed_model
from llama_index.llms.ollama import Ollama
from llama_index.core.memory import ChatMemoryBuffer
import os.path
import datetime
import shutil

# ollama
# https://github.com/ollama/ollama
# model storage: \\wsl.localhost\Ubuntu\usr\share\ollama\.ollama
Settings.llm = Ollama(model="llama3", request_timeout=90.0)

# Get the path to the directory of the currently running script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the data directory relative to the virtual environment directory
DATA_DIR = os.path.join(current_dir, 'data')

# VectorData Storage
VECTOR_DIR = os.path.join(current_dir, 'vector')

# bge embedding model
Settings.embed_model = resolve_embed_model("local:BAAI/bge-m3")


class Custom_LLM:
    __prompt_extensions = ['Antworte in maximal 100 Wörtern!',
                           ]

    def __init__(self):
        self.__chat_history = ChatMemoryBuffer(token_limit=6000)
        self.__chat_engine = self.__init_chat_engine()
        self.__prompts = []
        self.__last_use = datetime.datetime.now()

    def __str__(self):
        return str(self.__prompts)

    def __init_chat_engine(self) -> BaseChatEngine:
        """
        Initialize a BaseChatEngine

        Args: None

        Returns:
            chat_engine: The chat engine for every user
        """

        if not os.path.exists(VECTOR_DIR):
            self.generate_vector_data()

        storage_context = StorageContext.from_defaults(persist_dir=VECTOR_DIR)
        index = load_index_from_storage(storage_context)

        # init chat engine and context
        chat_engine = index.as_chat_engine(
            chat_mode=ChatMode.CONTEXT,
            memory=self.__chat_history,
            system_prompt=(
                "You are the GreenAssistant Chatbot and only provide answers on the topic of sustainability."
                "They are helpful and always answer completely in German. If you dont know something, admit it."
                "In addition, you only include information from the existing files."
            )
        )
        return chat_engine

    @staticmethod
    def generate_vector_data() -> None:
        """
        Generates the vector data for the index files.
        Everytime you change somthing in the folder data,
        you have to run this methode

        Args: None

        Returns: None
        """
        if os.path.isdir(VECTOR_DIR):
            try:
                shutil.rmtree(VECTOR_DIR)
                print("Directory and all its contents deleted")
            except Exception as e:
                print(f"Error: {e}")
        
        # create the index and persist it
        # https://docs.llamaindex.ai/en/latest/getting_started/starter_example/#storing-your-index
        # load the documents
        documents = SimpleDirectoryReader(
            input_dir=DATA_DIR,
            recursive=True,
        ).load_data()
        print(f"Loaded {len(documents)} files")
        print("Generating vector data, this may take a while ...")

        # create the index
        index = VectorStoreIndex.from_documents(documents)
        # store it for later
        index.storage_context.persist(persist_dir=VECTOR_DIR)
        print('Successful generated!')

    def run(self, current_question: str) -> str:
        """
        Execute the ChatEngine, create an Answer
        and store the ChatHistory in an ChatBuffer

        Args:
            current_question: The question to the generated answer
        Returns:
            answer: The generated answer
        """

        if current_question.lower() == "reset":
            self.__chat_engine.reset()

        print()
        print('Generating Answer, this may take a while ...')
        answer = self.__chat_engine.chat(message=current_question + self.concatenate_prompt_extensions(),
                                         chat_history=self.__chat_history.get_all())
        print('Successful generated!')
        print()
        return answer.response

    def get_history(self) -> []:
        """
        Reads the chat buffer and stores the answer
        to the question in an array consisting of dicts

        Args: None

        Returns:
            prompts: An array that consists prompts (Example)

        Example:
           prompts = [
                {'question': 'how are you?', 'answer':'good, thanks!'},
                {'question': 'Hello?', 'answer':'Hi, Im there!'}
            ]
        """
        prompt = {}
        for i in range(0, len(self.__chat_history.get_all())):
            for j in self.__chat_history.get(i):
                if j.dict()['role'] == 'user':
                    prompt['question'] = j.dict()['content']
                if j.dict()['role'] == 'assistant':
                    prompt['answer'] = j.dict()['content']
        self.__prompts.append(prompt)
        return self.__prompts

    def filter(self, data) -> None:
        """
        filters out the prompt extensions from the chat history.

        Args:
            data: The history to be filtered.

        Returns: None
        """
        for item in data:
            if 'question' in item:
                for extension in self.__prompt_extensions:
                    item['question'] = item['question'].replace(extension, '').strip()
        return data

    def concatenate_prompt_extensions(self):
        """
        collects all prompt extensions and attaches
        them to the current question.

        Args: None

        Returns:
            The combined string
        """
        if len(self.__prompt_extensions) > 0:
            return ' '.join(self.__prompt_extensions)
        else:
            return ''

    def used_in_last(self, sec: float) -> bool:
        """
        uses the ‘last_use’ field to check whether the
        object was used in the specified time. If yes, then return True

        Args:
            sec: the specific time

        Returns:
            true: when it was used
            false: when it was not used
        """
        differenz = datetime.datetime.now() - self.__last_use
        if differenz.total_seconds() < sec:
            self.__last_use = datetime.datetime.now()
            return True
        return False
