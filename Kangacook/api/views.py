from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PlateSerializer, CreatePlateSerializer
from .models import Plate
from rest_framework.views import APIView
from rest_framework.response import Response

# from django.http import HttpResponse


# Write API Views here that will allow us to view a list of all of the different Entrees. 
class PlatesView(generics.ListAPIView):
    queryset = Plate.objects.all()
    serializer_class = PlateSerializer

class GetAllEntreesView(APIView):
    def get(self, request, format=None):
        allEntrees = Plate.objects.filter(type="entree")
        if allEntrees.exists():
            data = PlateSerializer(allEntrees, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'No Entrees'}, status=status.HTTP_404_NOT_FOUND)
        
class GetAllDessertsView(APIView):
    def get(self, request, format=None):
        allDesserts= Plate.objects.filter(type="dessert")
        if allDesserts.exists():
            data = PlateSerializer(allDesserts, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'No Desserts'}, status=status.HTTP_404_NOT_FOUND)

# Create entree view with APIView as the base class
class CreatePlateView(APIView): 
    serializer_class = CreatePlateSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # create Entree instance based on the validated data from the serializer
            entree = Plate(
                name = serializer.validated_data['name'],
                desc = serializer.validated_data['desc'],
                ingredients = serializer.validated_data['ingredients'],
                time = serializer.validated_data['time'],
                instructions = serializer.validated_data['instructions'],
                img = serializer.validated_data['img'],
                type = serializer.validated_data['type']
            )

            # Then save the instance to the database
            entree.save()

            return Response(PlateSerializer(entree).data, status=status.HTTP_201_CREATED)
        else:
            # print('Serializer errors:', serializer.errors);  # Log the serializer errors
            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)











# def home(request):
#     return HttpResponse("<h1>Hello</h1>")

# def breakfast(request):
#     return HttpResponse("Breakfast")

# def lunch(request):
#     return HttpResponse("Lunch")

# def dinner(request):
#     return HttpResponse("Dinner")

# def dessert(request):
#     return HttpResponse("Dessert")
