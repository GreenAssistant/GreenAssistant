from users import views
from django.urls import re_path, include, path

urlpatterns = [
  re_path(r'^dashboard', views.dashboard, name='dashboard'),
  re_path(r'^upload/', views.upload_form, name="upload"),
  re_path(r'^list/', views.list_files, name="list-view"),
  path('delete/<int:pk>/', views.delete_file, name="delete-file"),
  re_path(r'^generate/', views.generate_data, name="generate"),
  re_path(r'^accounts/', include("django.contrib.auth.urls"))
]