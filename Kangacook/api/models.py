from django.db import models
import uuid

# Create your models here.
class Plate(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    name = models.CharField(max_length=50, default="", unique=True)
    desc = models.CharField(max_length=100)
    ingredients = models.TextField()
    time = models.IntegerField()
    instructions = models.TextField()
    img = models.CharField(max_length=50, null=True)
    type = models.CharField(max_length=10)