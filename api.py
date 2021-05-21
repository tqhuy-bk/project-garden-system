from flask import Flask, render_template, jsonify, request, json
import mysql.connector
# from werkzeug import generate_password_hash, check_password_hash
from Adafruit_IO import Client, Feed, Data, RequestError
import datetime

app = Flask(__name__)
mydb = mysql.connector.connect(
		host="localhost",
		user="root",
		password="",
		database="myapp")

@app.route('/user/register',methods=['POST'])
def register():
	if request.method == "POST":
		userDetails = request.form
		name = userDetails['name']
		email = userDetails['email']
		username = userDetails['username']
		password = userDetails['password']
		phone = userDetails['phone']
		address = userDetails['address']

		mycursor = mydb.cursor()
		mycursor.execute("INSERT INTO tbl_user(user_Name,user_Email,user_Username,user_Password,user_Phone,user_Address) VALUES (%s,%s,%s,%s,%s,%s)",(name,email,username,password,phone,address))

		mycursor.close()
		return""
	
@app.route('/user/get_info',methods=['GET'])
def get_user_info():

	mycursor = mydb.cursor()
	sql = "SELECT * FROM tbl_user"
	mycursor.execute(sql)
	records = mycursor.fetchall()
	
	mycursor.close()

	data = []
	for  r in records:
		data.append({
			"id": r[0],
			"name": r[1],
			"email": r[2],
			"username":r[3],
			"phone": r[5] ,
			"address": r[6]
			})
	return jsonify({"users": data})
	
	

@app.route('/user/get_info/<int:user_ID>',methods=['GET'])
def get_user_info_byID(user_ID):

	mycursor = mydb.cursor()
	sql = "SELECT user_Name,user_Email,user_Username, user_Phone, user_Address FROM tbl_user WHERE user_ID = %s"
	mycursor.execute(sql,(user_ID,))
	r = mycursor.fetchone()
	mycursor.close()
	data = {
		"name": r[0],
		"email": r[1],
		"username":r[2],
		"phone": r[3] ,
		"address": r[4]
	}
	return jsonify({"user:": data})

#lấy ds độ sáng theo ID khu vườn
@app.route('/light/get_light/<int:garden_ID>',methods=['GET'])
def get_lights(garden_ID):
	mycursor = mydb.cursor()
	sql= "SELECT light_ID,light_Time,light_Value,light_Status FROM tbl_light WHERE light_GardenID=%s"
	mycursor.execute(sql,(garden_ID,))
	rows = mycursor.fetchall()
	mycursor.close()
	data = []
	for  r in rows:
		data.append({
			"id": r[0],
			"time": r[1],
			"value": r[2],
			"status":r[3]
			})
	return jsonify({"lights": data})

#lấy ds độ ẩm đất theo ID khu vườn
@app.route('/soil/get_soil/<int:garden_ID>',methods=['GET'])
def get_soil(garden_ID):
	mycursor = mydb.cursor()
	sql= "SELECT amdat_ID,amdat_Time,amdat_Value,amdat_Status FROM tbl_amdat WHERE amdat_GardenID=%s"
	mycursor.execute(sql,(garden_ID,))
	rows = mycursor.fetchall()
	mycursor.close()
	data = []
	for  r in rows:
		data.append({
			"id": r[0],
			"time": r[1],
			"value": r[2],
			"status":r[3]
			})
	return jsonify({"users": data})

#lấy data độ ẩm đất từ AdfruitIO thêm vào database
@app.route('/AdfruitIO/receive_soil',methods=['GET'])
def receive_soil():
	ADAFRUIT_IO_KEY = 'aio_zrix60WwMNUyY73kk5JcTV8ipD3f'
	ADAFRUIT_IO_USERNAME = 'huytran'

	aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)

	feed_name = "soil"
	try:
		temp = aio.feeds(feed_name)
	except RequestError:
		feed = Feed(name=feed_name)
		temp = aio.create_feed(feed)
	data = aio.receive(temp.key)
	_data = {
		"time" : data.created_at,
		"value" : data.value,
		"id": data.id
	}
	mycursor = mydb.cursor()
	sql = "INSERT INTO tbl_amdat(amdat_Time,amdat_Value,amdat_Status) VALUES (%s,%s,%s)"
	mycursor.execute(sql,(data.created_at,data.value,1))
	return jsonify({"soil": _data})

#pulish data tbl_amdat theo id từ database lên adfruitIO
@app.route('/AdfruitIO/pulish_soil/<int:soil_id>')
def pulish_soil(soil_id):
	ADAFRUIT_IO_KEY = 'aio_zrix60WwMNUyY73kk5JcTV8ipD3f'
	ADAFRUIT_IO_USERNAME = 'huytran'

	aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)

	feed_name = "soil"

	mycursor = mydb.cursor()
	sql= "SELECT amdat_ID,amdat_Time,amdat_Value,amdat_Status FROM tbl_amdat WHERE amdat_ID=%s"
	mycursor.execute(sql,(soil_id,))
	row = mycursor.fetchone()
	mycursor.close()
	value = row[2]
	try:
		temp = aio.feeds(feed_name)
	except RequestError:
		feed = Feed(name=feed_name)
		temp = aio.create_feed(feed)
		
	aio.send_data(temp.key, value)
	return ""

#lấy data độ light từ AdfruitIO thêm vào database
@app.route('/AdfruitIO/receive_light',methods=['GET'])
def receive_light():
	ADAFRUIT_IO_KEY = 'aio_zrix60WwMNUyY73kk5JcTV8ipD3f'
	ADAFRUIT_IO_USERNAME = 'huytran'

	aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)

	feed_name = "light"
	try:
		temp = aio.feeds(feed_name)
	except RequestError:
		feed = Feed(name=feed_name)
		temp = aio.create_feed(feed)
	data = aio.receive(temp.key)
	_data = {
		"time" : data.created_at,
		"value" : data.value,
		"id": data.id
	}

	return jsonify({"light": _data})

#pulish data tbl_light theo id từ database lên adfruitIO
@app.route('/AdfruitIO/pulish_light/<int:light_id>',methods=['GET'])
def pulish_light(light_id):
	ADAFRUIT_IO_KEY = 'aio_zrix60WwMNUyY73kk5JcTV8ipD3f'
	ADAFRUIT_IO_USERNAME = 'huytran'

	aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)

	feed_name = "light"

	mycursor = mydb.cursor()
	sql= "SELECT * FROM tbl_light WHERE light_ID=%s"
	mycursor.execute(sql,(light_id,))
	row = mycursor.fetchone()
	mycursor.close()
	value = row[2]
	try:
		temp = aio.feeds(feed_name)
	except RequestError:
		feed = Feed(name=feed_name)
		temp = aio.create_feed(feed)
		
	aio.send_data(temp.key, value)
	return ""
#lấy data độ relay từ AdfruitIO thêm vào database
@app.route('/AdfruitIO/receive_relay',methods=['GET'])
def receive_relay():
	ADAFRUIT_IO_KEY = 'aio_zrix60WwMNUyY73kk5JcTV8ipD3f'
	ADAFRUIT_IO_USERNAME = 'huytran'

	aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)

	feed_name = "relay"
	try:
		temp = aio.feeds(feed_name)
	except RequestError:
		feed = Feed(name=feed_name)
		temp = aio.create_feed(feed)
	data = aio.receive(temp.key)
	_data = {
		"time" : data.created_at,
		"value" : data.value,
		"id": data.id
	}

	return jsonify({"relay": _data})

#pulish data tbl_relay theo id từ database lên adfruitIO
@app.route('/AdfruitIO/pulish_relay/<int:relay_id>',methods=['GET'])
def pulish_relay(relay_id):
	ADAFRUIT_IO_KEY = 'aio_zrix60WwMNUyY73kk5JcTV8ipD3f'
	ADAFRUIT_IO_USERNAME = 'huytran'

	aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)

	feed_name = "relay"

	mycursor = mydb.cursor()
	sql= "SELECT * FROM tbl_relay WHERE relay_ID=%s"
	mycursor.execute(sql,(relay_id,))
	row = mycursor.fetchone()
	mycursor.close()
	value = row[2]
	try:
		temp = aio.feeds(feed_name)
	except RequestError:
		feed = Feed(name=feed_name)
		temp = aio.create_feed(feed)
		
	aio.send_data(temp.key, value)
	return ""
# @app.route('/signUp',methods=['POST','GET'])
# def signUp():
#     try:
#         _name = request.form['inputName']
#         _email = request.form['inputEmail']
#         _password = request.form['inputPassword']

#         # validate the received values
#         if _name and _email and _password:
            
#             # All Good, let's call MySQL
            
#             mycursor = mydb.cursor()
#             _hashed_password = generate_password_hash(_password)
#             mycursor.callproc('sp_createUser',(_name,_email,_hashed_password))
#             data = mycursor.fetchall()

#             if len(data) == 0:
#                 mydb.commit()
#                 return json.dumps({'message':'User created successfully !'})
#             else:
#                 return json.dumps({'error':str(data[0])})
#         else:
#             return json.dumps({'html':'<span>Enter the required fields</span>'})

#     except Exception as e:
#         return json.dumps({'error':str(e)})
#     finally:
#         mycursor.close() 
        

if __name__ == "__main__":
	app.run(debug=True)