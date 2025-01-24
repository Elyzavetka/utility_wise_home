import graphene
from graphene_django.types import DjangoObjectType
from monitoring.models import Household


class HouseholdType(DjangoObjectType):
    class Meta:
        model = Household
        fields = ("household_id", "street", "city")


class HouseholdInput(graphene.InputObjectType):
    street = graphene.String(required=True)
    city = graphene.String(required=True)


class CreateHousehold(graphene.Mutation):
    class Arguments:
        input = HouseholdInput()

    household = graphene.Field(HouseholdType)

    def mutate(self, info, input):
        household = Household.objects.create(
            street=input.street,
            city=input.city
        )
        return CreateHousehold(household=household)


class Mutation(graphene.ObjectType):
    create_household = CreateHousehold.Field()


class Query(graphene.ObjectType):
    households = graphene.List(HouseholdType)

    def resolve_households(self, info):
        return Household.objects.all()


schema = graphene.Schema(query=Query, mutation=Mutation)


# import graphene
# from graphene_django.types import DjangoObjectType
# from .models import Household

# # Create a GraphQL type for the Household model


# class HouseholdType(DjangoObjectType):
#     class Meta:
#         model = Household

# # Mutation to add a household


# class CreateHousehold(graphene.Mutation):
#     class Arguments:
#         street = graphene.String(required=True)
#         city = graphene.String(required=True)
#         zip_code = graphene.String()
#         country = graphene.String(required=True)
#         square_meter = graphene.Int(required=True)
#         floor_count = graphene.Int(required=True)
#         people_count = graphene.Int()
#         dogs_count = graphene.Int()
#         cats_count = graphene.Int()

#     # Output
#     household = graphene.Field(HouseholdType)

#     def mutate(self, info, street, city, country, square_meter, floor_count, zip_code=None, people_count=None, dogs_count=None, cats_count=None):
#         household = Household.objects.create(
#             street=street,
#             city=city,
#             zip_code=zip_code,
#             country=country,
#             square_meter=square_meter,
#             floor_count=floor_count,
#             people_count=people_count,
#             dogs_count=dogs_count,
#             cats_count=cats_count,
#         )
#         return CreateHousehold(household=household)

# # Root mutation


# class Mutation(graphene.ObjectType):
#     create_household = CreateHousehold.Field()

# # Query (optional, if you want to retrieve data)


# class Query(graphene.ObjectType):
#     households = graphene.List(HouseholdType)

#     def resolve_households(self, info):
#         return Household.objects.all()


# schema = graphene.Schema(query=Query, mutation=Mutation)
