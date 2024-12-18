# 🏠 House Price Prediction API

> An intelligent Flask-based REST API that leverages machine learning to predict house prices based on location, size, and amenities.

[![Python](https://img.shields.io/badge/Python-3.7%2B-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-2.0%2B-green.svg)](https://flask.palletsprojects.com/)
[![Scikit-learn](https://img.shields.io/badge/Scikit--learn-Latest-orange.svg)](https://scikit-learn.org/)

## ✨ Key Features

- 🔮 **Smart Predictions**: Advanced ML model for accurate house price estimations
- 📍 **Location Intelligence**: Support for multiple locations with region-specific pricing
- 🔄 **Real-time Processing**: Fast and efficient price calculations
- 🔒 **CORS Enabled**: Secure cross-origin communication support
- 📊 **Data Validation**: Input sanitization and validation

## 🛠️ Technology Stack

<table>
  <tr>
    <td align="center"><b>Backend</b></td>
    <td align="center"><b>Data Science</b></td>
    <td align="center"><b>DevOps</b></td>
  </tr>
  <tr>
    <td>
      • Flask<br>
      • Flask-CORS<br>
      • Python 3.7+
    </td>
    <td>
      • Scikit-learn<br>
      • NumPy<br>
      • Pandas
    </td>
    <td>
      • Docker<br>
      • Git<br>
      • Requirements.txt
    </td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Python 3.7 or higher
- pip package manager
- Git

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mustafoyev-202/HOUSE_PRICE_PREDICTION
   cd house-price-prediction-api
   ```

2. **Set Up Virtual Environment**
   ```bash
   # Create virtual environment
   python -m venv venv

   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Prepare Model Assets**
   ```bash
   # Ensure these files exist in the artifacts directory:
   artifacts/
   ├── banglore_home_prices_model.pickle
   └── columns.json
   ```

## 📚 API Documentation

### 1. Get Available Locations

Retrieves all supported locations for price prediction.

```http
GET /get_location_names
```

#### Response Example
```json
{
  "locations": [
    "1st Phase JP Nagar",
    "2nd Phase JP Nagar",
    "Ejipura",
    "..."
  ]
}
```

### 2. Predict House Price

Calculates estimated house price based on provided parameters.

```http
POST /predict_home_price
```

#### Request Parameters

| Parameter    | Type   | Description                           |
|-------------|--------|---------------------------------------|
| total_sqft  | float  | Total area in square feet             |
| location    | string | Area/locality name                    |
| bhk         | int    | Number of bedrooms                    |
| bath        | int    | Number of bathrooms                   |

#### Response Example
```json
{
  "estimated_price": 1200000.0
}
```

## 📂 Project Structure

```
house-price-prediction-api/
├── artifacts/
│   ├── banglore_home_prices_model.pickle
│   └── columns.json
├── server/
│   ├── __init__.py
│   ├── routes.py
│   └── config.py
├── utils/
│   ├── __init__.py
│   ├── model.py
│   └── validation.py
├── tests/
│   └── test_api.py
├── server.py
├── requirements.txt
├── Dockerfile
└── README.md
```

## 🚀 Deployment

1. **Local Development**
   ```bash
   python server.py
   ```
   Server will be available at `http://localhost:5000`

2. **Docker Deployment**
   ```bash
   # Build Docker image
   docker build -t house-price-api .

   # Run container
   docker run -p 5000:5000 house-price-api
   ```

## ⚙️ Configuration

Create a `.env` file in the root directory:

```env
FLASK_ENV=development
DEBUG=True
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Mustafoyev** - *Initial work* - [GitHub](https://github.com/mustafoyev-202)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped this project grow
- Special thanks to the Flask and Scikit-learn communities

---
<div align="center">
Made with 🤝 for the open source community
</div>