from django.db import models


class Household(models.Model):
    household_id = models.AutoField(primary_key=True)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)

    def __str__(self):
        return f"Household {self.household_id} - {self.street}, {self.city}"


# class User(models.Model):
#     user_id = models.AutoField(primary_key=True)
#     username = models.CharField(max_length=255)
#     email = models.EmailField(max_length=255)
#     household = models.ForeignKey(
#         Household, on_delete=models.CASCADE, related_name='users')

#     def __str__(self):
#         return self.username
