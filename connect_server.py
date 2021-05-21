from Adafruit_IO import Client, Feed, Data, RequestError
import datetime

import mysql.connector


def connect_databse():
	conn = mysql.connector.connect(
		host="localhost",
		port="3306",
		user="root",
		password="",
		database="myapp")
	return conn

def select_Soil(conn):
	cursor = conn.cursor()
	selectquery = "SELECT * from tbl_amdat"
	cursor.execute(selectquery)
	records = cursor.fetchall()

	# for row in records:
	# 	print("id:",row[0])
	# 	print("time",row[1])
	# 	print("value", row[2])
	cursor.close()
	return records


def select_light(conn):
	cursor = conn.cursor()
	selectquery = "SELECT * from tbl_light"
	cursor.execute(selectquery)
	records = cursor.fetchall()
	cursor.close()

	return records



def connect_adafruitIO():
	ADAFRUIT_IO_KEY = 'aio_zrix60WwMNUyY73kk5JcTV8ipD3f'
	ADAFRUIT_IO_USERNAME = 'huytran'

	aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)
	return aio

def pulish_data(feed_name,value,aio):
	try:
		temp = aio.feeds(feed_name)
	except RequestError:
		feed = Feed(name=feed_name)
		temp = aio.create_feed(feed)

		return temp
	aio.send_data(temp.key, value)
# def pulish_data(value,aio,temp):
	



def receive_data(aio,feed_name):
	try:
		temp = aio.feeds(feed_name)
	except RequestError:
		feed = Feed(name=feed_name)
		temp = aio.create_feed(feed)
	data = aio.receive(temp.key)
	return data
	# data = aio.receive_next(temp.key)
	# data = aio.receive_previous(temp.key)

def insert_soil(data,conn):
	cursor = conn.cursor()
	insertquery = "INSERT INTO tbl_amdat(amdat_Value) VALUES ('data')"
	cursor.execute(insertquery)
	cursor.close()






if __name__ == "__main__":
	conn = connect_databse()
	records = select_Soil(conn)
	aio = connect_adafruitIO()
	feed_name = "soil"
	# value = records[0][2]
	# temp = pulish_data("soil",value,aio)
	data = receive_data(aio,feed_name)
	print(data.value)
	insert_soil(data,conn)
	conn.close()