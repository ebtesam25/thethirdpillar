import os
import pymongo
import json

def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()
    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["sadaqah"]
    col = db.zakat
    results = []
    maxid = 0
    goldnisab = 4478.0
    silvernisab = 277.0

    g = float(request_json['gold'])
    s = float(request_json['silver'])
    c = float(request_json['cash'])
    r = float(request_json['receivable'])
    sh = float (request_json['shares'])
    p = float(request_json['payable'])
    l = float(request_json['loan'])

    if g>s:
        nisab = goldnisab
    else:
        nisab = silvernisab
    
    assets = g + s + c + r +sh
    liablilites = p + l

    zakat = 0.0
    if (assets-liablilites) > nisab:
        assets = assets - nisab
        zakat = 0.025 * assets
      

   
    retjson = {}

    retjson['zakat'] = str(zakat)
    # retjson['mongoresult'] = str(maxid)

    return json.dumps(retjson)


    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
