# Generated by Django 3.1.4 on 2020-12-29 05:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20201229_1045'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Date Added'),
        ),
    ]
