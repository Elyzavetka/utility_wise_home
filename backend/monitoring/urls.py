from django.urls import path
from .views import household_create

urlpatterns = [
    path('household/', household_create, name='household-create'),
]
