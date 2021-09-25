#! /bin/sh

git clone https://github.com/HaibiPeng/docker-hy.github.io
cd docker-hy.github.io
docker build -t "$1"/devopsmaterials:latest .
docker login --username "$1" --password="$2"
docker push "$1"/devopsmaterials:latest
