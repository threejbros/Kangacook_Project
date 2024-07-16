# serializers class that will take the classes in models.py and translate it into a JSON response

from rest_framework import serializers
from .models import Plate

class PlateSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Plate 
        fields = ('id', 'name', 'desc', 'ingredients', 'time', 'instructions', 'img', 'type')

class CreatePlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plate
        fields = ('name', 'desc', 'ingredients', 'time', 'instructions', 'img', 'type')

# class CreateDessertSerializer(serializers.ModelSerializer):