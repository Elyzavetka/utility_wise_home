# Generated by Django 5.1.3 on 2025-02-12 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monitoring', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('households', models.ManyToManyField(related_name='users_direct', to='monitoring.household')),
            ],
        ),
    ]
