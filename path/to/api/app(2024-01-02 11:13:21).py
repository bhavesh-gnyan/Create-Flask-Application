
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert_temp():
    data = request.get_json()
    fahrenheit = data['fahrenheit']
    celsius = (fahrenheit - 32) * 5.0/9.0
    return jsonify({'celsius': celsius})

if __name__ == '__main__':
    app.run(debug=True)
