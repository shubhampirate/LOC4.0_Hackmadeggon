from django.contrib.auth import authenticate,login

from rest_framework.authtoken.models import Token
from rest_framework import status,permissions,viewsets

from rest_framework.decorators import permission_classes,api_view
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import action,api_view

from django.http import JsonResponse

from datetime import date

class RegisterAPI(GenericAPIView):
	
	serializer_class = RegisterSerializer
	
	def post(self,request,*args,**kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception = True)
		user = serializer.save()
		if not user.is_active:
			user.is_active = True
			user.save()
		token = Token.objects.create(user=user)
		
		return Response({'token' : token.key,'username' : user.username},status = status.HTTP_200_OK)


class LoginAPI(GenericAPIView):
    serializer_class = LoginSerializer
    def post(self,request,*args,**kwargs ):
        username = request.data.get('email',None)
        password = request.data.get('password',None)
        # user = authenticate(email = username, password = password)
        user = CustomUser.objects.get(email=username, password=password)
        print(user)
        if user :
            login(request,user)
            token = Token.objects.get(user=user)
            print(token)
            return Response({'token' : token.key,'email' : user.email},status = status.HTTP_200_OK)

        return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)


@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
@permission_classes([IsAuthenticated])
def room_list(request, format=None):
    if request.method == 'GET':
        snippets = Room.objects.all()
        serializer = RoomSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        user = request.user
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(host =user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
@permission_classes([IsAuthenticated]) 
def room_msgs(request,id,format=None):
    try:
        snippets = Message.objects.get(pk=id)
    except Message.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MessageSerializer(snippets)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


 
@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
@permission_classes([IsAuthenticated])
def booking_list(request, format=None):
    if request.method == 'GET':
        snippets = Booking.objects.all()
        serializer = BookingSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        user = request.user
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
@permission_classes([IsAuthenticated])
def user_list(request, format=None):
    if request.method == 'GET':
        snippets = CustomUser.objects.all()
        serializer = UserSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


