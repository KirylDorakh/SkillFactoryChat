# Generated by Django 4.2 on 2023-06-16 05:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='message_text',
            field=models.CharField(max_length=512),
        ),
    ]