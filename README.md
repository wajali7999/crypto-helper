# Crypto Helper App

### `Backend`

The backend has been deployed on heroku.\
Click [here](https://crypto-app-wajahat.herokuapp.com/prices/) to view it in the browser for json response.

### `Frontend`

The frontend has been deployed on Netlify as well as Vercel.\
Click [here for Netlify link](https://vibrant-lovelace-86cd20.netlify.app/) or [here for Vercel link](https://crypto-helper-ew4mlgaki-wajali7999.vercel.app/) to view it in the browser for experiencing the working app.

The page automatically gets updated prices after every 6 seconds.

### `Setup`

As the backend is built using Django, you should have pip installed and then run “pip install -r requirements.txt” . This will install the required libraries. Then run “python manage.py runserver” to start the backend server. You can test the output with this link. http://localhost:8000/prices/ (If the server is running on port 8000 or else change the link accordingly).\
Frontend is built using React. For setting up the frontend change the cwd to crypto-frontend, you should have npm installed and then run “npm install” to install the required modules. Then run “npm start”.\
For deployment purpose the link on which the frontend requests is of the deployed backend on heroku that you may change to test locally. In crypto-frontend/src/Prices.js change the link in line 32 to the locally running server. i.e axios.get(`place link here of backend server to be used`)

### `Answers to questionnaire`
#### `1:` 
Yes there are some shortcuts taken, Firstly, the link on which the frontend requests backend, was added as a hard coded link. Instead it could have been stored inside a variable in some other file so that code won’t be needing any change, just the file with all the settings will be changed.
Secondly, the api key used to access coinbase was added inside code. It would have been better to add it as env variable or inside a local file and read it from there to keep it a secret. 
#### `2:` 
To showcase my skills I have used inline styling as well as used separate file with styles in it. However, better approach is to keep all the styles separate in a single file so that its easy to change anything if needed. 
#### `3:` 
To scale the solution a different approach could be used. Sockets can be used to communicate the change in prices of bitcoin or ethereum. Instead of requesting at fixed intervals of six seconds that will put a lot of load on server, sockets could help. 
#### `4:` 
There are be a lot of enhancements that could be done. Firstly, all the constant strings that are used could be moved to a separate file and displayed through variables. So that in the future if the language in which the website is displayed is changed only one single file needs to be translated and not the whole code.
Secondly, the UI and UX could be made a lot better with user friendly colors and indicators. \
Thirdly the recommendations could be made much more better and insightful. Showing the history of prices on each exchange and the percentage increase or decrease in prices from the last update as well as historical records could help to make the recommendation engine perform better.

 
