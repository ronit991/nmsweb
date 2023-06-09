from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),
    path('about/', views.about),
    path('startaproject/', views.newProjectNotification),
    path('test/', views.test),
]