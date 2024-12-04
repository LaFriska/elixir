from flask import Flask, request, jsonify

app = Flask("__name__")


@app.route('/members')
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


@app.route('/simple', methods=['POST'])
def api_data():
    data = request.json
    number = data.get('count')
    print(f"Received data: {data}")
    return jsonify({"isOdd": number % 2 == 1})


if __name__ == '__main__':
    app.run(debug=True)
