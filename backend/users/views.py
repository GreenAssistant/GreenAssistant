from django.shortcuts import render, get_object_or_404, redirect
from api.llm import llm_index
from .forms import UploadFileForm
from .models import LLMData

def dashboard(request):
  if request.method == "POST":
    llm_index.Custom_LLM.generate_vector_data()
  return render(request, "users/dashboard.html") 

def upload_form(request):
  if request.method == "POST":
    form = UploadFileForm(request.POST, request.FILES)
    if form.is_valid():
      form.save()
    else:
      # rerender template when form invalid
      context = {"form": form}
      return render(request, "users/upload.html", context)
  context = {"form": UploadFileForm()}
  return render(request, "users/upload.html", context)

def generate_data(request):
  if request.method == "POST":
    llm_index.Custom_LLM.generate_vector_data()
  return render(request, "users/generate.html")

def list_files(request):
  files = LLMData.objects.all()
  context = {"files": files}
  return render(request, "users/list.html", context)
  
def delete_file(request, pk):
  file = get_object_or_404(LLMData, pk=pk)
  file.delete()
  return redirect("list-view")