import time
import unittest
import requests

try:
    import RPi.GPIO as GPIO
    import board

except ImportError:
    import mock

    board = mock.Mock()
    GPIO = mock.Mock()
    adafruit_dht = mock.Mock()


class Mode(object):
    def __init__(self):
        self.mode = 0

    def getMode(self):
        return self.mode

    def setMode(self, mode):
        self.mode = mode


class TestMode(unittest.TestCase):
    def test_getMode(self):
        mode_param = Mode()
        self.assertEqual(mode_param.getMode(), 0)

    def test_setMode(self):
        mode_param = Mode()
        mode_param.setMode(1)
        self.assertEqual(mode_param.getMode(), 1)


class ButtonHandler(object):
    def __init__(self, mode_param: Mode):
        self.mode = mode_param
        GPIO.setup(14, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
        GPIO.add_event_detect(14, GPIO.RISING, callback=self.start, bouncetime=200)

        GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
        GPIO.add_event_detect(18, GPIO.RISING, callback=self.select, bouncetime=200)

        GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
        GPIO.add_event_detect(23, GPIO.RISING, callback=self.next_mode, bouncetime=200)  # Removed parentheses

        GPIO.setup(24, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
        GPIO.add_event_detect(24, GPIO.RISING, callback=self.prev_mode, bouncetime=200)  # Removed parentheses
        self.last_button_press = 0

    def start(self):
        self.last_button_press = time.time()
        print("Start Button pressed")

    def select(self):
        self.last_button_press = time.time()
        print("Select Button pressed")

    def sendMode(self):
        self.last_button_press = time.time()
        print("Cycle forward button pressed")

        url = "http://localhost:3000/api/sendMode"
        data = {"mode": self.mode.getMode()}
        response = requests.post(url, data=data)

        if response.status_code == 200:
            print("POST request sent successfully.")
        else:
            print(f"Failed to send POST request. Status code: {response.status_code}")

    def prev_mode(self):
        self.last_button_press = time.time()
        print("Cycle backward button pressed")
        if self.mode.getMode() == 0:
            self.mode.setMode(8)
        else:
            self.mode.setMode(self.mode.getMode() - 1)

    def next_mode(self):
        self.last_button_press = time.time()
        print("Cycle forward button pressed")
        if self.mode.getMode() == 7:
            self.mode.setMode(0)
        else:
            self.mode.setMode(self.mode.getMode() + 1)


if __name__ == "__main__":
    mode = Mode()
    button_handler = ButtonHandler(mode)
    while True:
        time.sleep(0.1)
        if time.time() - button_handler.last_button_press > 5:
            button_handler.sendMode()
            button_handler.last_button_press = time.time()
