#Prerequisites
- MongoDB (at least 4.0): https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
- node (at least 8.9.4) and npm (at least 5.6.0)

#Configuration of MongoDB:
https://docs.mongodb.com/manual/reference/configuration-options/

If configured successfully the MongoDB type the following command to start:
```net start MongoDB```
Check log file to ensure it is running
To stop the service type:
```net stop MongoDB```
Check log file to ensure it had been stopped correctly

#Project setup
- clone the repsitory
```cd Animal-Shelter-Registry-Tool-Backend```
```npm install```

- create the initial database:
```cd config```
```node createMongoDB.js```

- start the mongoose middleware:
```npm start```
