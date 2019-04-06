from django.urls import include, path
from rest_framework import routers
from api_v1 import views
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'product_photos', views.ProductPhotoViewSet)
router.register(r'orders', views.OrderViewSet)



app_name = 'api_v1'

urlpatterns = [
    path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('login/', views.LoginView.as_view(), name='api_token_auth'),
    path('register/', views.UserCreateView.as_view(), name='register'),
]