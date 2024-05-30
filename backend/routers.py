from rest_framework import routers
from task.viewsets import TaskViewSet

router = routers.SimpleRouter()
router.register(r'task', TaskViewSet, basename="task")
urlpatterns = router.urls 
