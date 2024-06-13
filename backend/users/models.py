from django.db import models

class LLMData(models.Model):
  name = models.CharField(max_length=64)
  file = models.FileField(upload_to="")