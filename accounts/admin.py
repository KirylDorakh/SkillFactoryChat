from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.utils.safestring import mark_safe
from django.conf import settings

from .forms import CustomUserCreationForm, CustomUserChangeForm

CustomUser = get_user_model()


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = [
        'email',
        'username',
        'is_superuser',
        'avatar',
    ]

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'avatar', 'preview_avatar')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    readonly_fields = ["preview_avatar"]

    def preview_avatar(self, obj):
        return mark_safe(f'<img src="http://localhost:8000{obj.avatar.url}" style="max-height: 200px;" alt="avatar">')



admin.site.register(CustomUser, CustomUserAdmin)
