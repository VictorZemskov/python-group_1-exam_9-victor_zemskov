from django.db import models
from django.urls import reverse
import random
import string
from django.conf import settings
from django.contrib.auth.models import User
from django.utils.timezone import now
import uuid

class RegistrationToken(models.Model):
    token = models.UUIDField(default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    # проверка, что токен истёк: находим разницу между двумя датами,
    # переводим её в часы и сравниваем с допустимым возрастом токена в часах,
    # указанным в настройках.
    def is_expired(self):
        delta = now() - self.created_at
        delta_hours = delta.total_seconds() / 3600
        return delta_hours > settings.TOKEN_EXPIRATION_HOURS

    def __str__(self):
        return "%s" % self.token

class SoftDeleteManager(models.Manager):
    def active(self):
        return self.filter(is_deleted=False)

    def deleted(self):
        return self.filter(is_deleted=True)

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    date_of_entry = models.DateField()
    category = models.ManyToManyField('Category', blank=True, related_name='categories')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def get_absolute_url(self):
        return reverse('api_v1:product-detail', kwargs={'pk': self.pk})

    def __str__(self):
        return self.name

class ProductPhoto(models.Model):
    product = models.ForeignKey('Product', related_name='product_photos', on_delete=models.PROTECT)
    photo = models.ImageField(upload_to='photos')
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def get_absolute_url(self):
        return reverse('api_v1:product_photo-detail', kwargs={'pk': self.pk})

    def __str__(self):
        return 'Photo %s' % (self.photo)

class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def get_absolute_url(self):
        return reverse('api_v1:category-detail', kwargs={'pk': self.pk})

    def __str__(self):
        return self.name

class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', related_name='orders', on_delete=models.PROTECT)
    tel_num = models.CharField(max_length=255)
    address = models.CharField(max_length=255, null=True, blank=True)
    comment = models.TextField(max_length=2000, null=True, blank=True)
    creation_date = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def get_absolute_url(self):
        return reverse('api_v1:order-detail', kwargs={'pk': self.pk})

    def __str__(self):
        return 'Order %s User %s' % (self.pk, self.user)
