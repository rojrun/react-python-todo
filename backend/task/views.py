from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from task.models import Task
from task.serializers import TaskSerializer
from django.shortcuts import render
from django.http import HttpResponse

class TaskView(viewsets.ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
  permission_classes = [AllowAny] 

def index(request):
  return HttpResponse("<h1>request found</h1>")

from pymongo import MongoClient

client = MongoClient("mongodb+srv://rojrun:appl1cation5@atlascluster.7rjhab5.mongodb.net/")

db = client["todolist"]
collection = db["task"]

task_details = collection.find({})

for r in task_details:
  print(f'{r['assigned_to']} - {r['task']}')
