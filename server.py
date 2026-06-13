import numpy as np
import pandas as pd
import utils
from flask import Flask, request, jsonify
app=Flask(__name__)
@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': utils.get_location()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response
@app.route('/predictor', methods=['GET', 'POST'])
def predictor():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])

    response = jsonify({
        'estimated_price': utils.get_prediction(location,total_sqft,bhk,bath)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response
if __name__ == "__main__":
    utils.get_artifacts()
    app.run()