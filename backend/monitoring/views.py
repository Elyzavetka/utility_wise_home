from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .models import Household
# from .models import Household, User
import json


@csrf_exempt
@require_POST
def household_create(request):
    try:
        data = json.loads(request.body)

        household = Household.objects.create(
            street=data['street'],
            city=data['city'],
        )

        # user = User.objects.create(
        #     username=data['userName'],
        #     email=data['email'],
        #     household=household
        # )

        return JsonResponse({'message': 'Data saved successfully.'}, status=201)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
