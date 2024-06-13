from api import views
from api.llm.llm_index import Custom_LLM
from unittest.mock import MagicMock, patch


class TestGreenAssistantViewSet:
    def test_authenticate_client_existing_user(self):
        client_id = "existing_user"
        mock_llm = MagicMock(spec=Custom_LLM)
        greenAssistantViewSet = views.GreenAssistantViewSet()
        greenAssistantViewSet.Sessions[client_id] = mock_llm

        returned_llm = greenAssistantViewSet.authenticate_client(client_id)

        assert returned_llm == mock_llm
        assert client_id in greenAssistantViewSet.Sessions

    def test_authenticate_client_new_user(self):
        client_id = "new_user"
        mock_llm = MagicMock(spec=Custom_LLM)
        with patch.object(views, "Custom_LLM", return_value=mock_llm):
            greenAssistantViewSet = views.GreenAssistantViewSet()
            returned_llm = greenAssistantViewSet.authenticate_client(client_id)

            assert returned_llm == mock_llm
            assert client_id in greenAssistantViewSet.Sessions
            assert greenAssistantViewSet.Sessions[client_id] == returned_llm

    def test_cleanup_sessions(self):
        active_client_id = "active_user"
        inactive_client_id = "inactive_user"

        active_mock_llm = MagicMock(spec=Custom_LLM)
        inactive_mock_llm = MagicMock(spec=Custom_LLM)

        active_mock_llm.used_in_last.return_value = True
        inactive_mock_llm.used_in_last.return_value = False

        greenAssistantViewSet = views.GreenAssistantViewSet()
        greenAssistantViewSet.Sessions[active_client_id] = active_mock_llm
        greenAssistantViewSet.Sessions[inactive_client_id] = inactive_mock_llm

        greenAssistantViewSet.cleanup_sessions()

        assert active_client_id in greenAssistantViewSet.Sessions
        assert inactive_client_id not in greenAssistantViewSet.Sessions

