#!/bin/bash

docker build -t "staticwebserver:latest" ./web-server
docker run -p 3000:3000 -d staticwebserver:latest
