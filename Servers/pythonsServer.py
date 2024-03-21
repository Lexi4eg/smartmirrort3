import time
import adafruit_dht
import board
import requests
import json

API_ENDPOINT = "http://192.168.1.119:3000/api/sendHumTemp"

dht_device = adafruit_dht.DHT11(board.D4)

while True:
    try:
        temperature_c = dht_device.temperature
        humidity = dht_device.humidity
        data = {"humidity": humidity,"temperature":temperature_c}

        r = requests.post(url=API_ENDPOINT, data=json.dumps(data))

        pastebin_url = r.text
        print("The pastebin URL is:%s" % pastebin_url)
        print("Temp:{:.1f} C Humidity: {}%".format(temperature_c, humidity))
        time.sleep(5)
    except RuntimeError as err:
        print(err.args[0])

    time.sleep(2.0)