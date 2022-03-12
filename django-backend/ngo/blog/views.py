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
 
@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
@permission_classes([IsAuthenticated])
def room_list(request, format=None):
    if request.method == 'GET':
        snippets = Room.objects.all()
        serializer = RoomSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
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
        serializer = MessageSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
