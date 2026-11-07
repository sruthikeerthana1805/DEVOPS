# Experiment 7 – Develop a Simple Containerized Application using Docker

Run these commands from this folder:

```bash
docker build -t flask-app .
docker images
docker run -d --name flask-container -p 5000:5000 flask-app
docker ps
docker logs flask-container
```

Open http://localhost:5000 to see **Hello from Docker!**

Cleanup:
```bash
docker stop flask-container
docker rm flask-container
```
