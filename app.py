#Flask API endpoints to fetch and update the data dynamically in MongoDB
from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb+srv://yamanhassan610:Z7DsLLADVwUdVf3e@simecmo.mlhq9.mongodb.net/')
db = client['simECMO-Data']
collection = db['Acute-Heart-Failure-2.8K']  # Collection name

# Fetch scenario data
@app.route('/api/scenario/<string:scenario_id>', methods=['GET'])
def get_scenario(scenario_id):
    scenario = collection.find_one({'scenario_id': scenario_id})
    if scenario:
        scenario.pop('_id')
        return jsonify(scenario), 200
    return jsonify({'error': 'Scenario not found'}), 404

# Update scenario data
@app.route('/api/scenario/<string:scenario_id>', methods=['PUT'])
def update_scenario(scenario_id):
    data = request.json
    collection.update_one({'scenario_id': scenario_id}, {"$set": data})
    return jsonify({'message': 'Update successful'}), 200

if __name__ == '__main__':
    app.run(debug=True)