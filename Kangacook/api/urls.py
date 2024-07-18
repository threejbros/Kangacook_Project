from django.urls import path

from .views import PlatesView, CreatePlateView, GetAllEntreesView

urlpatterns = [
    path('plates', PlatesView.as_view()),
    path('create-plate', CreatePlateView.as_view()),
    path('get-entrees', GetAllEntreesView.as_view())
    # path('', views.home, name="home")
    # path('breakfast', views.breakfast, name="breakfast"),
    # path('lunch', views.lunch, name="lunch"),
    # path('dinner', views.dinner, name="dinner"),
    # path('dessert', views.dessert, name="dessert")

]