# Experiment 9 – Automate Containerized Applications using Kubernetes

Use the Flask application from Experiment 7. Ensure Kubernetes is enabled in Docker Desktop.

Build the image in the same Docker environment used by Docker Desktop Kubernetes:
```bash
docker build -t docker-app:1.0 ../07_Docker_Containerized_App
docker images
kubectl get nodes
```

Deploy and verify:
```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl get pods
kubectl apply -f service.yaml
kubectl get services
kubectl get service docker-app-service
```

Find the NodePort in the last command and open `http://localhost:NODEPORT` if your Docker Desktop Kubernetes setup exposes NodePort on localhost.

Cleanup:
```bash
kubectl delete -f service.yaml
kubectl delete -f deployment.yaml
```
