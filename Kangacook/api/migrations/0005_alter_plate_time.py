# Generated by Django 5.0.7 on 2024-07-18 02:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_entree_plate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plate',
            name='time',
            field=models.TextField(),
        ),
    ]
