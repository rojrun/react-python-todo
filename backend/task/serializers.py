from rest_framework import serializers

from task.models import Task

class TaskSerializer(serializers.ModelSerializer):

  class Meta:
    model = Task
    fields = ['assigned_to', 'task', 'created', 'updated', 'is_complete', 'id']
    read_only_fields = ['created', 'updated', 'id']