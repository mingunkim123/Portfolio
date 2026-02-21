from django.urls import path

from .views import cv_payload, health

urlpatterns = [
    path("health/", health, name="health"),
    path("cv/", cv_payload, name="cv"),
]
