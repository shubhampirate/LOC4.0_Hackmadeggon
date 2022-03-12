from rest_framework import serializers
from .models import *


class LoginSerializer(serializers.ModelSerializer):
    # password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    class Meta:
        model = CustomUser
        # fields = ['name']
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
	password=serializers.CharField(max_length=32,min_length=8,write_only = True)
	
	class Meta:
		model = CustomUser
		fields = ['username','password']
	
	def create(self,validated_data):
            validated_data['is_active'] = True
            return CustomUser.objects.create_user(**validated_data)


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


