# Generated by Django 5.0.7 on 2024-07-16 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_entree_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='entree',
            name='type',
            field=models.CharField(default='entree', max_length=10),
            preserve_default=False,
        ),
    ]