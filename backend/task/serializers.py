from rest_framework import serializers

from task.models import Task

class TaskSerializer(serializers.ModelSerializer):

  class Meta:
    model = Task
    fields = ['assigned_to', 'title', 'details', 'created', 'updated', 'status', 'id']
    read_only_fields = ['created', 'updated', 'id']