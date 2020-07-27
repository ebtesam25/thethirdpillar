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
    col = db.sadaqah
    results = []
    maxid = 0
    if request_json and 'id' in request_json:
        id = request_json['id']
        col.update_one({"id":str(id)}, {"$set":{"description":"alhamdulillah this request has been fulfilled"}})
        col.update_one({"id":str(id)}, {"$set":{"status":"fulfilled"}})
        
        # if 'img_url' in request_json:
        #     col.update_one({"id":str(id)}, {"$set":{"img_url":str(request_json['img_url'])}})

        retjson = {}

        retjson['id'] = id
        retjson['status'] = "fulfilled"

        return json.dumps(retjson)


    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
