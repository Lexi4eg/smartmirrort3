FROM python:3.9-slim-buster
LABEL authors="felixprattes"

WORKDIR /app

ADD . /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80

CMD ["python", "main.py"]
ENTRYPOINT ["top", "-b"]