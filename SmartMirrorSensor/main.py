import unittest
import adafruit_dht
import json
import time
import board
import requests
import logging
from flask import Flask, request, jsonify

try:
    import RPi.GPIO as GPIO
    import board

except ImportError:
    import mock
    board = mock.Mock()
    GPIO = mock.Mock()
    adafruit_dht = mock.Mock()


class SensorData:
    def __init__(self, temperature: float, humidity: float):
        self.temperature = temperature
        self.humidity = humidity

class Sensor:
    def __init__(self):
        self.sensor_readings = []
        self.currSensorReadings = SensorData(0, 0)
        self.dht_device = adafruit_dht.DHT11(board.D4)

    def get_temperature(self):
        return self.dht_device.temperature

    def get_humidity(self):
        return self.dht_device.humidity

    def get_avg_temperature(self):
        if not self.sensor_readings:
            raise Exception("No sensor readings available to calculate average temperature")
        return sum([x.temperature for x in self.sensor_readings]) / len(self.sensor_readings)

    def get_avg_humidity(self):
        if not self.sensor_readings:
            raise Exception("No sensor readings available to calculate average humidity")
        return sum([x.humidity for x in self.sensor_readings]) / len(self.sensor_readings)

    def send_data(self):
        try:
            data = {
                "temperature": self.currSensorReadings.temperature,
                "humidity": self.currSensorReadings.humidity
            }
            data = json.dumps(data)
            requests.post("http://frontend:3000/sendHumTemp", data=data)
            return data
        except Exception as e:
            logging.error(e)


def runtime(sensor: Sensor):
    while True:
        try:
            sensor.currSensorReadings = SensorData(sensor.get_temperature(), sensor.get_humidity())
            sensor.send_data()
            time.sleep(10)
        except Exception as e:
            logging.error(e)


class TestSensor(unittest.TestCase):
    def setUp(self):
        self.sensor = Sensor()
        self.sensor.sensor_readings = [SensorData(10, 20), SensorData(20, 30)]

    def test_get_temperature(self):
        self.assertIsInstance(self.sensor.get_temperature(), float)

    def test_get_humidity(self):
        self.assertIsInstance(self.sensor.get_humidity(), float)

    def test_get_avg_temperature(self):
        self.assertEqual(self.sensor.get_avg_temperature(), 15)

    def test_get_avg_humidity(self):
        self.assertEqual(self.sensor.get_avg_humidity(), 25)

    def test_send_data(self):
        self.assertIsNone(self.sensor.send_data())


def main():
    unittest.main()
    runtime(Sensor())


if __name__ == '__main__':
    main()
