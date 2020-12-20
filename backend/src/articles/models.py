from django.db import models


# Create your models here.

class Article(models.Model):
    title = models.CharField(blank=False, max_length=50, null=False)
    content = models.TextField(max_length=100)

    def __str__(self):
        return "{:s}".format(self.title)
