import unittest
from unittest.mock import patch
from api.tts.tts import Custom_TTS


class TestCustomTTS(unittest.TestCase):

    @patch("os.path.exists")
    @patch("os.remove")
    def test_delete_existing_file(self, mock_remove, mock_exists):
        mock_exists.return_value = True
        Custom_TTS.delete_file("/path/to/existing/file")
        mock_remove.assert_called_once_with("/path/to/existing/file")

    @patch("os.path.exists")
    @patch("os.remove")
    def test_delete_non_existing_file(self, mock_remove, mock_exists):
        mock_exists.return_value = False
        Custom_TTS.delete_file("/path/to/non-existing/file")
        mock_remove.assert_not_called()
