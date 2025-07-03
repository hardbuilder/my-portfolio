class HX711:
    def __init__(self, dout, pd_sck):
        self.dout = dout
        self.pd_sck = pd_sck
        self.offset = 0
        self.scale = 1

        # Set up GPIO pins
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.dout, GPIO.IN)
        GPIO.setup(self.pd_sck, GPIO.OUT)
        GPIO.output(self.pd_sck, False)

    def read_raw(self):
        # Wait for the chip to become ready
        while GPIO.input(self.dout) == 1:
            pass

        # Read the data from the HX711
        count = 0
        for _ in range(24):
            GPIO.output(self.pd_sck, True)
            count = count << 1
            GPIO.output(self.pd_sck, False)
            if GPIO.input(self.dout) == 1:
                count += 1

        # Set the gain for the next reading
        GPIO.output(self.pd_sck, True)
        GPIO.output(self.pd_sck, False)

        return count

    def get_weight(self):
        raw_value = self.read_raw()
        weight = (raw_value - self.offset) / self.scale
        return weight

    def set_offset(self, offset):
        self.offset = offset

    def set_scale(self, scale):
        self.scale = scale

    def tare(self, times=10):
        total = 0
        for _ in range(times):
            total += self.read_raw()
        self.set_offset(total // times)

    def calibrate(self, known_weight, times=10):
        self.tare(times)
        total = 0
        for _ in range(times):
            total += self.read_raw()
        average = total // times
        self.set_scale(average / known_weight)