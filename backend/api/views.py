"""
API ENDPOINTS
"""
import os
from django.http import FileResponse
from rest_framework import viewsets, permissions
from .manager.validation_manager import validate
from rest_framework.response import Response
from .llm.llm_index import Custom_LLM
from .tts.tts import Custom_TTS

mock_answer = '''
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
        sapien faucibus et molestie ac.
'''


class GreenAssistantViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    custom_llM = None
    custom_tts = Custom_TTS()
    current_answer = mock_answer
    Sessions = {}

    def list(self, request):
        """
        API Endpoint for http-GET
        """
        if request.headers['X-Csrftoken'] not in self.Sessions:
            return Response({'error': 'Permission denied, client is not registered'}, status=404)

        file_path = self.custom_tts.get_output_audio_file()

        if os.path.exists(file_path):
            response = FileResponse(open(file_path, 'rb'), content_type='application/octet-stream')
            response['Content-Disposition'] = f'attachment; filename="{os.path.basename(file_path)}"'
            return response
        else:
            return Response({'error': 'File not found'}, status=404)

    def create(self, request):
        """
        API Endpoint for http-POST
        """
        prompt = request.data
        self.cleanup_sessions()
        self.custom_llM = self.authenticate_client(request.headers['X-Csrftoken'])
        self.current_answer = self.custom_llM.run(validate(prompt['question']))

        # wieder auf if not ändern
        if not prompt['isWritten']:
            # call text to speech
            self.custom_tts.convert_to_speech(self.current_answer)
        return Response(self.custom_llM.filter(self.custom_llM.get_history()))

    def authenticate_client(self, client_id: str) -> Custom_LLM:
        """
        Should be called on every Request.
        This method saves the llm-objects for the respective user.
        If an user already exists, use the current llm-object.
        For this authentication process, we generate a uuid (unique user identification )token
        on the client side. The client uses this token to register with the server.

        Args:
            client_id: The Payload from the Client, for reading the HTTP Header

        Return: None
        """
        if client_id in self.Sessions:
            print('current user')
            return self.Sessions[client_id]
        else:
            print('new user')
            self.Sessions[client_id] = Custom_LLM()
            return self.Sessions[client_id]

    def cleanup_sessions(self) -> None:
        """
         Should be called on every Request.
         This Method removes unused clients form the Session Dictionary.
         Therefor we use the Methode used_in_last() from the Custom_LLM Class

         Args: None

         Returns: None
        """
        unused_clients = [client for client, session in self.Sessions.items() if not session.used_in_last(1800)]
        for unused_client in unused_clients:
            del self.Sessions[unused_client]
