#!/usr/bin/env bash

docker container create --name backup_z2m -v z2m_ha:/data busybox;
docker cp backup_z2m:/data/database.db ../backup/$(date +%Y%m%d_%H%M%S)_database.db;
docker rm backup_z2m;
