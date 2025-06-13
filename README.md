# Location Prediction System for Disaster Response

A real-time disaster response system that extracts actionable location data from social media tweets to aid emergency responders during natural disasters such as floods and cyclones.

## 🌟 Overview

The Location Prediction System leverages advanced Named Entity Recognition (NER) algorithms and machine learning to identify location mentions from disaster-related tweets, converts them into precise geographical coordinates using geocoding techniques, and visualizes them on an interactive live map within a real-time dashboard.

## 🎯 Key Features

- **Real-Time Location Extraction**: Accurate identification and extraction of location mentions from disaster-related tweets
- **Interactive Dashboard**: Live map visualization with real-time updates for monitoring disaster scenarios
- **Geocoding Integration**: Conversion of location mentions to precise geographical coordinates using OpenStreetMap
- **Responder Management**: Efficient assignment and coordination of emergency responders to critical locations
- **Analytics & Reporting**: Comprehensive data insights with charts and statistics for decision-making
- **Navigation Integration**: Direct Google Maps integration for route planning to disaster locations
- **Real-Time Notifications**: Instant alerts for new incidents and responder assignments

## 🏗️ System Architecture

![image](https://github.com/user-attachments/assets/1d2d96f9-6c15-4e15-9a94-8477dfc7041d)

The system consists of the following core components:

1. **Data Collection Module**: Fetches disaster-related tweets using Twitter API
2. **NER Model Integration**: Processes tweets to extract location mentions with high accuracy
3. **Geocoding Service**: Converts location mentions to geographical coordinates using Nominatim API
4. **Dashboard Visualization**: Interactive map display with live updates

## 🛠️ Technology Stack

### Backend
- **Python Flask**: RESTful API development
- **Flair NLP**: NER model implementation using `tner/deberta-v3-large-ontonotes5`
- **PostgreSQL**: Data storage and management
- **Nominatim API**: Geocoding service (OpenStreetMap)

### Frontend
- **Vue.js**: Dynamic and responsive user interface
- **Leaflet.js**: Interactive map visualization
- **JavaScript**: Real-time updates and interactivity

### Machine Learning
- **BERT-based NER Model**: Fine-tuned for location entity recognition
- **BIOES Tagging Scheme**: Enhanced granular representation of named entities
- **AdamW Optimizer**: Efficient model training
- **OneCycleLR Scheduler**: Optimized learning rate scheduling

## 📊 Model Performance

| Model | RMSE | Precision | Recall | F1 Score |
|-------|------|-----------|--------|----------|
| Baseline Model | 13.99 | 0.8237 | 0.8745 | 0.8345 |
| **Project Model** | **12.7** | **0.8869** | **0.9221** | **0.9041** |

## 🚀 Use Cases

### 1. Emergency Response Coordination
- **Scenario**: During a flood, emergency responders receive multiple reports through social media
- **Solution**: The system automatically extracts location mentions from tweets, maps them in real-time, and enables quick responder assignment to affected areas

### 2. Resource Allocation
- **Scenario**: Limited rescue resources need to be distributed efficiently across disaster-affected regions
- **Solution**: The dashboard provides visual analytics and geographical distribution of incidents, helping optimize resource deployment

### 3. Real-Time Situation Monitoring
- **Scenario**: Disaster management teams need continuous updates on evolving situations
- **Solution**: Live map updates with incident markers, severity indicators, and trend analysis provide comprehensive situational awareness

### 4. Communication Disruption Management
- **Scenario**: Traditional communication channels are down during disasters
- **Solution**: Social media monitoring ensures critical location information is still captured and processed for emergency response

## 🔬 Data Processing Pipeline

### NER Model Training
The system uses a fine-tuned transformer model with the following preprocessing steps:

1. **Dataset Integration**: IDRISI and WNUT16 datasets
2. **Tagging Scheme Conversion**: Standardization to BIOES format
3. **Location Term Normalization**: Unified "LOC" tagging
4. **Model Fine-tuning**: 3-epoch training with optimized parameters

### Geocoding Process
1. **Location Extraction**: NER model identifies location mentions
2. **Coordinate Conversion**: Nominatim API geocoding
3. **Validation**: Error handling for ambiguous locations
4. **Visualization**: Real-time map plotting with Leaflet.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

**Shazz Abdul Samed** - [GitHub Profile](https://github.com/shazzsamed)

