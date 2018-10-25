#Download and Setup MongoDB
- Install:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

- Setup:
https://docs.mongodb.com/manual/reference/configuration-options/

#If configured successfully the MongoDB type the following command to start:
net start MongoDB
Check log file to ensure it is running
To stop the service type:
net stop MongoDB
Check log file to ensure it had been stopped correctly

#Run server.js
- npm start

#To create your database you have to run:
- cd config
- node createMongoDB.js