"""
TEXT TO SPEECH
"""

import os
import torch
from TTS.api import TTS


class Custom_TTS:
    __output_audio_file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "output_audio/tts_output.wav")
    __clone_audio_file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "cloning_audio/audio.wav")
    __device = "cuda" if torch.cuda.is_available() else "cpu"
    __tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(__device)

    def get_output_audio_file(self) -> str:
        """
        Getter for the field __file_path

        Args: None

        Returns:
            __file.path: The current value of __file_path
        """
        return self.__output_audio_file_path

    def convert_to_speech(self, current_answer: str) -> None:
        """
        Converts a given string into an audio file that is
        stored in the current project structure.

        Args:
            current_answer: the string, that should be converted

        Returns:
            None
        """
        self.delete_file(self.__output_audio_file_path)

        print('Converting into speech ...')
        self.__tts.tts_to_file(text=current_answer,
                               speaker_wav=self.__clone_audio_file_path,
                               language="de",
                               file_path=self.__output_audio_file_path,
                               split_sentences=True, speed=0.6)

    @staticmethod
    def delete_file(absolut_path: str) -> None:
        """
        Delete the audio file from the TTS, after the user fetched it.
        If the file does not exist, then we only display an error message,
        but do not terminate the programme.

        Note:
            This method should be called shortly before a new audio file is created.
            This ensures that only one file exists at a time.
            If the case arises that a file is to be deleted that does not exist,
            then the try block is called

        Args:
            absolut_path: the absolut path to the file wiche should be deleted

        Returns: None
        """
        try:
            if os.path.exists(absolut_path):
                os.remove(absolut_path)
                print(f"File {absolut_path} was successfully removed.")
            else:
                print(f"File {absolut_path} was successfully removed.")

        except Exception as e:
            print(f"Error when deleting the file {absolut_path}: {e}")
