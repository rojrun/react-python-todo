from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://rojrun:appl1cation5@atlascluster.7rjhab5.mongodb.net/")

db = cluster["todolist"]
collection = db["task"]

# collection.insert_one({"_id":5, "title":"Talk to mom", "created":"", "updated":"", "assigned_to":"Cartman", "is_complete":"false"})
