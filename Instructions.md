# Instructions

1) As the user starts the applications, user would land into the start page. 
  The layout of the page is going to look as below:
  ![alt text](https://github.com/team-nullapi/team-null-front-end/blob/beta/public/images/wireframe/UserInputPage.png)

2) On start page, user be would required to enter a 'user-name'.

3) Then user would land into home page where user would required to enable their webcam to take picture. The layout of the page is going to look as below: 
![alt text](https://github.com/team-nullapi/team-null-front-end/blob/beta/public/images/wireframe/StartPage.png)

4) Upon submission, pciture is submitted to the backend server
5) Server calls the FACE++ API and gets emotion data evaluated based on level of:  
  "sadness"
  "neutral"
  "disgust"
  "anger"
  "surprise"
  "fear"
  "happiness
6) Based on the emotion data, one out of seven dominant attributes would be choose. 
7) Based on dominant attribute, server would call one of the tables inside fortune DB.
8) From the table, randomly a fortune text and lotto number would be selected.
9) The selected fortune and lucky lottter number would be rendered to front end. 
10) Server would save the rendered data information ( user_name , fortune, lotto number, time data was created) on User DB
The layout of the page is going to look as below:
![alt text](https://github.com/team-nullapi/team-null-front-end/blob/beta/public/images/wireframe/CookieShow.png)
  10a) Once the user clicks the cookie, the layut of the page is going to look as below:
![alt text](https://github.com/team-nullapi/team-null-front-end/blob/beta/public/images/wireframe/FortuneShow.png)
  10b) Once the user clicks the fortune it will fill the banner and show the lotto numbers. The layout of the page is going to look as below:
  ![alt text](https://github.com/team-nullapi/team-null-front-end/blob/beta/public/images/wireframe/LottoShow.png)
11) User can click on history button on navigation bar(Home page). This will render all the data (fortune, lotto number, time data was created) from user DB to front end. 
The layout of the page is going to look as below:
![alt text](https://github.com/team-nullapi/team-null-front-end/blob/beta/public/images/wireframe/UserDataPage.png)
12) User can click back button to go back to the home page. 



