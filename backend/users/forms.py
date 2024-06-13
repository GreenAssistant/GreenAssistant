from django import forms
from users.models import LLMData

class UploadFileForm(forms.ModelForm):
  class Meta:
    model = LLMData
    fields = ("name", "file")