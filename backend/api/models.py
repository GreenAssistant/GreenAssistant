"""
DATAMODEL

"""
from django.db import models


class GreenAssistantDB(models.Model):
    question = models.CharField(unique=True, max_length=1000)
    answer = models.CharField(max_length=1000)

    def __str__(self):
        return self.question
