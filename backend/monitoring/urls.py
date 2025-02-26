from django.urls import path
from .views import household_create, user_create

urlpatterns = [
    path('household/', household_create, name='household-create'),
    path('user', user_create, name='user-create'),
]
