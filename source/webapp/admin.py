from django.contrib import admin
from webapp.models import Product, ProductPhoto, Category, Order

class ProductAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'date_of_entry']
    ordering = ['-date_of_entry']
    search_fields = ['name', 'id']

class ProductPhotoAdmin(admin.ModelAdmin):
    list_display = ['pk', 'photo', 'product']
    ordering = ['pk']
    search_fields = ['photo', 'id']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name']
    ordering = ['pk']
    search_fields = ['name', 'id']

class OrderAdmin(admin.ModelAdmin):
    list_display = ['pk', 'user', 'product']
    ordering = ['pk']
    search_fields = ['id']

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductPhoto, ProductPhotoAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Order, OrderAdmin)