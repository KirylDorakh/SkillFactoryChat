"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
# from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    # path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
    # path('api/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),

    path('accounts/', include('accounts.urls')),
    path('accounts/', include('allauth.urls')),
    path('', include('chats.urls')),

    # Use the `get_schema_view()` helper to add a `SchemaView` to project URLs.
    #   * `title` and `description` parameters are passed to `SchemaGenerator`.
    #   * Provide view name for use with `reverse()`.
    path('openapi', get_schema_view(
      title="Your Project",
      description="API for all things …",
      authentication_classes=[],
    ), name='openapi-schema'),

   #  path('swagger-ui/', TemplateView.as_view(
   #     template_name='swagger-ui.html',
   #     extra_context={'schema_url':'openapi-schema'}
   # ), name='swagger-ui'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
