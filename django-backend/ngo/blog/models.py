from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class CustomUser(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=True)
    username = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.username

    # def create_superuser(self, email, full_name, profile_picture, password=None, **extra_fields):
    #     if not email:
    #         raise ValueError("User must have an email")
    #     if not password:
    #         raise ValueError("User must have a password")
    #     if not full_name:
    #         raise ValueError("User must have a full name")

    #     user = self.model(
    #         email=self.normalize_email(email)
    #     )
    #     user.full_name = full_name
    #     user.set_password(password)
    #     user.profile_picture = profile_picture
    #     user.admin = True
    #     user.staff = True
    #     user.active = True
    #     user.save(using=self._db)
    #     return user

   

class Topic(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Room(models.Model):
    # host = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    topic = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    # participants = models.ManyToManyField(
    #     CustomUser, related_name='participants', blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.name



class Message(models.Model):
    # user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.body[0:50]

# class Booking(models.Model):