"""
Serializer
"""

from rest_framework import serializers
from .models import *


class GreenAssistantSerializer(serializers.ModelSerializer):
    class Meta:
        model = GreenAssistantDB
        fields = ('question', 'answer')
