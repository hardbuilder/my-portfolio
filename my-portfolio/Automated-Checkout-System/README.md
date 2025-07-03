# Automated Checkout System (AutoBill)

An intelligent automated checkout system that uses computer vision and weight sensors to identify and bill products automatically. This system combines machine learning for product recognition with load cell sensors for weight measurement to create a seamless shopping experience.

## 🌟 Features
- Automated product identification and billing
- Real-time weight measurement using load cells
- User-friendly web interface for managing products
- Integration with machine learning for enhanced accuracy

## 🛠️ Hardware Requirements
- Raspberry Pi
- Load cell and HX711 amplifier
- Pi Camera
- Power supply for Raspberry Pi

## 📋 Software Requirements
### Python Dependencies
```bash
pip install opencv-python
pip install RPi.GPIO
pip install requests
pip install edge-impulse-linux
```

### Node.js Dependencies
```bash
cd CheckoutUI/server
npm install
```

## 🚀 Installation & Setup
1. Clone the Repository
```bash
git clone https://github.com/hardbuilder/Automated-Checkout-System.git
cd Automated-Checkout-System
```

2. Hardware Calibration
Run the calibration script to set up your load cell:
```bash
python3 calibration.py
```
Follow the on-screen instructions to calibrate with a known weight.

3. Machine Learning Model
Ensure you have your trained Edge Impulse model file (`modelfile.eim`) in the project directory.

4. Start the Backend Server
```bash
cd CheckoutUI/server
npm start
```
The server will run on port 3000 (or PORT environment variable).

5. Launch the Main Application
```bash
python3 billing.py modelfile.eim
```
Optionally specify camera port:
```bash
python3 billing.py modelfile.eim 0
```

## 🏗️ System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Camera Feed   │────│  ML Recognition │────│   Product ID    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Load Cell      │────│  Weight Sensor  │────│   Weight Data   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
                               ┌─────────────────┐     │
                               │  Billing Logic │◄────┘
                               └─────────────────┘
                                        │
                               ┌─────────────────┐
                               │   Web API      │
                               └─────────────────┘
```

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License
This project is licensed under the ISC License.

## 👨‍💻 Author
**Shebin Jose Jacob**

## 🔗 Links
- [Edge Impulse](https://edgeimpulse.com/) - For ML model training
- [Raspberry Pi GPIO](https://www.raspberrypi.org/documentation/usage/gpio/) - GPIO documentation

## 📸 Screenshots
![UI Screenshot 1](CheckoutUI/1.jpg)
![UI Screenshot 2](CheckoutUI/2.jpg)
![UI Screenshot 3](CheckoutUI/3.jpg)

---

⚡ **Ready to revolutionize retail checkout!** ⚡