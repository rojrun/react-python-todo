from rest_framework import routers
from task.views import TaskView

router = routers.SimpleRouter()
router.register(r'task', TaskView, basename="task")
urlpatterns = router.urls 
