from django.urls import path, include
from .views import ArtileListView, ArticleDetailView

urlpatterns = [
    path("", ArtileListView.as_view()),
    path("<pk>", ArticleDetailView.as_view())
]
