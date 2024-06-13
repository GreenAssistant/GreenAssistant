from api.llm.llm_index import Custom_LLM
from llama_index.core.memory import ChatMemoryBuffer
import time


class TestCustomLLM:

    def test_used_in_last(self):
        custom_llm_1 = Custom_LLM()

        time.sleep(2)
        assert custom_llm_1.used_in_last(3)

        time.sleep(3)
        assert not custom_llm_1.used_in_last(3)

        time.sleep(2)
        assert not custom_llm_1.used_in_last(3)
