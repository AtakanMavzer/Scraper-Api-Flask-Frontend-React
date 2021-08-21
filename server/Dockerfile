FROM python:3.8
WORKDIR /app

ENV FLASK_APP=app.py

COPY ./requirements.txt .

RUN pip install -r requirements.txt 

RUN pip3 install dnspython

COPY . .

EXPOSE 5000

CMD ["python","app.py"]
