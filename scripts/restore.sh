#!/usr/bin/env bash

docker container create --name z2m_backup -v z2m_ha:/data busybox;
docker cp ../backup/database.db z2m_backup:/data;
docker rm z2m_backup
