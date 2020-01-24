# flask-react-app-template

## Installation
```bash
git clone https://github.com/manzt/flask-react-app-template 
cd flask-react-app-template/client
npm install 
```

## Frontend
```bash
cd client
npm start # navigate to localhost:3000
```

## Backend
Make sure you have a python environment with flask.
```bash
cd server
env FLASK_APP=server.py flask run # serves endpoints on localhost:5000, proxied on localhost:3000
```
