# Generated by Django 5.0.7 on 2024-07-16 23:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_entree_type'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Entree',
            new_name='Plate',
        ),
    ]
