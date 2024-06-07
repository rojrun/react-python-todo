from django.db import models

# Create your models here.
class Task(models.Model):
  assigned_to = models.CharField(max_length=255)
  title = models.CharField(max_length=255)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  is_complete = models.BooleanField(default=False) 