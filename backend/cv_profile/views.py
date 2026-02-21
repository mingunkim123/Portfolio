from rest_framework.decorators import api_view
from rest_framework.response import Response

from .data import CV_DATA


@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})


@api_view(["GET"])
def cv_payload(request):
    return Response(CV_DATA)
