# Instructions

1) As the user starts the applications, user would land into the home page. 
 1a) Application would have Home page, History page and About Us page. 
2) On home page, user be would required to enter a 'user-name'.
3) Home page would allow user to enable their webcam to take picture.
4) Once the user takes the picture, either :
  4a) User is satisfied with the taken picture.
  4b) Or user gets an option to re-take the picture.
5) Upon submission, pciture is submitted to the backend server
6) Server calls the FACE++ API and gets emotion data evaluated based on level of:  
  "sadness"
  "neutral"
  "disgust"
  "anger"
  "surprise"
  "fear"
  "happiness
7) Based on the emotion data, one out of seven dominant attributes would be choose. 
8) Based on dominant attribute, server would call one of the tables inside fortune DB.
9) From the table, randomly a fortune text and lottery number would be selected.
10) The selected fortune and lucky lottter number would be rendered to front end. 
11) Server would save the rendered data information ( user_name , fortune, lottery number, time data was created) on User DB
12) User can click on history button on navigation bar(Home page). This will render all the data (fortune, lottery number, time data was created) from user DB to front end. 
13) User can click back button to go back to the home page. 


