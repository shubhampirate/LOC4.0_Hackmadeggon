from rest_framework import serializers
from .models import *


class LoginSerializer(serializers.ModelSerializer):
    # password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    class Meta:
        model = CustomUser
        fields = ['name']


class RoomSerializer(serializers.ModelSerializer):
    # password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    class Meta:
        model = Room
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    # password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    class Meta:
        model = Message
        fields = '__all__'