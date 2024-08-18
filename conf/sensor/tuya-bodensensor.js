const {} = require('zigbee-herdsman-converters/lib/modernExtend');
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const ota = require('zigbee-herdsman-converters/lib/ota');
const utils = require('zigbee-herdsman-converters/lib/utils');
const globalStore = require('zigbee-herdsman-converters/lib/store');
const e = exposes.presets;
const ea = exposes.access;
const tuya = require('zigbee-herdsman-converters/lib/tuya');

const definition = {
    fingerprint: [
        {
            modelID: 'TS0601',
            manufacturerName: '_TZE204_myd45weu',
        },
    ],
    model: 'HZ-SL01',
    vendor: 'Tuya',
    description: 'NEO Soil temperature & humidity sensor',
    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    configure: tuya.configureMagicPacket,
        exposes: [e.temperature(), e.soil_moisture(), tuya.exposes.temperatureUnit(), e.battery(), tuya.exposes.batteryState()],
        meta: {
            tuyaDatapoints: [
                [3, 'soil_moisture', tuya.valueConverter.raw],
                [5, 'temperature', tuya.valueConverter.raw],
                [9, 'temperature_unit', tuya.valueConverter.temperatureUnit],
                [14, 'battery_state', tuya.valueConverter.batteryState],
                [15, 'battery', tuya.valueConverter.raw],
            ],
        },
};

module.exports = definition;
