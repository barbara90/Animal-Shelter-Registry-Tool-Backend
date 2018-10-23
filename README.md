#Download and Setup MongoDB
- Install:
https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-windows/

- Setup:
https://docs.mongodb.com/v3.6/reference/configuration-options/#storage.dbPath

#To add config file you must set yourself to admin if using Windows because of Defender
https://superuser.com/questions/1031275/windows-allow-normal-non-elevated-programs-to-write-to-program-files-director

#To open cmd.exe in admin mode:
Click windows button
Search cmd
Instead of clicking it press: CTRL+Shift+Enter

#If configured successfully the MongoDB type the following command to start:
net start MongoDB
Check log file to ensure it is running
To stop the service type:
net stop MongoDB
Check log file to ensure it had been stopped correctly

#Create and Initialise NodeJS application
mkdir node-animal-shelter-register-backend
npm init

#Install dependencies
npm install express body-parser mongoose --save

#Run server.js
node server.js

#To create your database you have to run:
node createMongoDB.js