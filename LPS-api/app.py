from flask import Flask, request, jsonify
from flair.data import Sentence
from flair.models import SequenceTagger
from geopy.geocoders import Nominatim
import random

app = Flask(__name__)

model = SequenceTagger.load('final-model.pt')
geolocator = Nominatim(user_agent="location_extractor")

def get_coordinates(location):
    try:
        loc = geolocator.geocode(location)
        if loc:
            return {'latitude': loc.latitude, 'longitude': loc.longitude}
    except Exception as e:
        print(f"Error fetching coordinates for {location}: {e}")
    return None

# Define a route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    sentence_text = data.get('sentence')
    print(sentence_text)
    sentence = Sentence(str(sentence_text))
    model.predict(sentence)

    location_entities = [
        entity.text for entity in sentence.get_spans('ner') if entity.tag == 'LOC'
    ]

    locations_with_coordinates = []
    locations_with_coordinates.append({
        'location': " ".join(location_entities),
        'coordinates': get_coordinates(" ".join(location_entities))
    })
        
    response = {
        'locations': locations_with_coordinates,
        'severity': random.randint(8500,10000)/float(10000)
    }
    return jsonify(response)

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({'message': "Hello World"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
