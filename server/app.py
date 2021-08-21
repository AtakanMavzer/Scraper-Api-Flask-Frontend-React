from bs4 import BeautifulSoup as BSHTML
import requests
import pymongo
from flask import Flask,request,jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from bson.json_util import dumps

#Standard minimal Restful Api initialization of Flask library
application= app = Flask(__name__)
CORS(app)
api = Api(app)


client = pymongo.MongoClient("mongodb+srv://MongoMavz:Mavzer69@cluster0.ldsqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.test






class ApiHandler(Resource):


    @app.route('/paste', methods=['GET', 'POST'])
    def dos():

        # here we want to get the value of url (i.e. ?ur=<url>)
        if request.method=='POST':
            url = request.args.get('ur')
            #print("im herel moa")
        
            #Image Link Parse
            html_page = requests.get(url)
            soup = BSHTML(html_page.content, 'html.parser')
            retrieveImageURL = soup.find('div', class_="image-wrapper wt-position-relative carousel-container-responsive")
            images = retrieveImageURL.findAll('img')
            urlRetrieved = images[0]
            #print(urlRetrieved.attrs['src'])

            #Name Parse
            retrieveName = soup.find('h1',class_="wt-text-body-03 wt-line-height-tight wt-break-word wt-mb-xs-1").text.strip()

            #Price Parse
            retrievePrice = soup.find('p',class_="wt-text-title-03 wt-mr-xs-2").text.strip()

            mydb = client["myFirstDatabase"]
            mycol = mydb["Coll"]
            cursor = list(mycol.find({}))
            index= len(cursor)
            mydict = {"id":len(cursor)+1 ,"ProductName": retrieveName,"image":urlRetrieved.attrs['src'], "Price": retrievePrice }
            mycol.insert_one(mydict)
            #print(len(cursor))
            return ' '

        if request.method=='GET':
            id = request.args.get('prod')
            print(id)
            mydb = client["myFirstDatabase"]
            mycol = mydb["Coll"]
            le=list(mycol.find({}, {'_id': False}))
            ac=le[int(id)-1]
            data=dumps(ac)
            print("sddsa",le[0])
            return data

    @app.route('/products', methods=['GET'])
    def retrieve():
        mydb = client["myFirstDatabase"]
        mycol = mydb["Coll"]
        le=list(mycol.find({}, {'_id': False}))
        data=dumps(le)
        
        return data

    @app.route('/product/<int:id>')
    def productretrieve():
        mydb = client["myFirstDatabase"]
        mycol = mydb["Coll"]
        le=list(mycol.find({}, {'_id': False}))

        

@app.route('/')
def home():
    return "saddsadasdsa  "

if __name__=='__main__':
    app.run(debug=True,host = '0.0.0.0')  
    