## How to run

note: You need to create a repo named devopsmaterials on docker hub in advance

1. build the image: `docker build -t part3_3.2 .`
2. run the image: `docker run --privileged -v /var/run/docker.sock:/var/run/docker.sock part3_3.2 <your-docker-hub-username> <your-docker-hub-password>`
