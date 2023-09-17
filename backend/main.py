from flask import Flask, request, jsonify
from config import db

app = Flask(__name__)

organizations = db['organizations']

# Endpoint to register an event
@app.route('/api/events', methods=['POST'])
def create_event():
    data = request.get_json()
    return jsonify({"message": "Event created successfully"}), 201

# Endpoint to register an organization
@app.route('/api/organizations', methods=['POST'])
def create_organization():
    data = request.get_json()
    organizations.append(data)
    return jsonify({"message": "Organization created successfully"}), 201


if __name__ == '__main__':
    app.run(debug=True)
