# Zigbee2MQTT

https://github.com/BenJ1337/docker_ha_home-assistant-bootstrap

## Initial Setup
### New Network

- https://www.zigbee2mqtt.io/guide/configuration/zigbee-network.html#network-config
- https://github.com/Koenkk/zigbee2mqtt/blob/master/data/configuration.example.yaml

mount conf/configuration.new.yaml

```
advanced:
  pan_id: GENERATE
  ext_pan_id: GENERATE
  network_key: GENERATE
```

### Existing Network

mount
- conf/configuration.yaml
