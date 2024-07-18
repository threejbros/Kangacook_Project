from django.urls import path

from .views import PlatesView, CreatePlateView, GetAllEntreesView, GetAllDessertsView

urlpatterns = [
    path('plates', PlatesView.as_view()),
    path('create-plate', CreatePlateView.as_view()),
    path('get-entrees', GetAllEntreesView.as_view()),
    path('get-desserts', GetAllDessertsView.as_view())
]