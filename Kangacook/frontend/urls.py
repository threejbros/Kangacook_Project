from django.urls import path
from .views import index

urlpatterns = [
    path('', index), 
    path('Dessert', index),
    path('Entrees', index)
]