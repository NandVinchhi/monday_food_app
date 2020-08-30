from flask import Flask, request
import json
app = Flask(__name__)

from flask_cors import CORS

CORS(app)
import requests

def get_restaurants(lat, lon, cuisine, price):
    k = requests.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + cuisine + " restaurant&key=AIzaSyB7L122E6_uJGXT6uheNw95q2cmrp7UClQ&location=" + str(lat) + "," + str(lon)).json()
    if price == 1:
        final = []
        for i in k["results"]:
            if i["price_level"] < 3:
                final.append(i)
        return final

    else:
        return k["results"]

@app.route('/maps', methods=["GET", "POST"])
def maps_endpoint():
    data = request.json

    return json.dumps(get_restaurants(float(data["lat"]), float(data["lon"]), data["cuisine"], int(data["price"])))
#print(get_restaurants(40.71449390000001, -74.0074286, "italian", 1))

if __name__ == "__main__":
    app.run()