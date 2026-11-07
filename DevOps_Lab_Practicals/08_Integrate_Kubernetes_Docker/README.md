# Experiment 8 – Integrate Kubernetes and Docker

1. Install Docker Desktop and start Docker Engine.
2. In Docker Desktop, open **Settings → Kubernetes**, enable Kubernetes, and select **Apply & Restart**.
3. Verify from a terminal:

```bash
docker --version
kubectl version --client
kubectl get nodes
```

The Docker Desktop node should show `Ready`. This experiment verifies the Docker and Kubernetes environment used by Experiment 9.
