# Experiment 6 – Explore Docker Commands for Content Management

Start Docker Desktop / Docker Engine first. Commands below follow the lab-record sequence.

```bash
docker --version
docker images
docker run -d --name mycontainer memcached
docker ps
docker ps -a
docker exec -it mycontainer /bin/sh
```

Inside the container, type `exit` to return to the host terminal.

```bash
docker cp mycontainer:/etc/passwd ./
echo "Hello Docker" > file.txt
docker cp file.txt mycontainer:/tmp/file.txt
docker exec -it mycontainer cat /tmp/file.txt
docker inspect mycontainer
docker logs mycontainer
docker stop mycontainer
docker rm mycontainer
```

`docker rm` removes a stopped container, not its image. If `mycontainer` already exists, remove it before re-running the `docker run` command.
