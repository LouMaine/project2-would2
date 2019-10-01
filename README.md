WOULD YOU RATHER PROJECT:

This project is for Udacity's React & Redux course. It's a would you rather do this or that question game That USERS have asked. The project has list of questions that are answered and unanswered.
The game displays leaderboard and polling page for each users questions. And Users can ask new new question.

The _DATA.js file is the database used for creating the project. 
Each login user (avatar) has an avatar it corresponds the file name needs the path to each user™s avatar.


How to Create files for this React/Redux front end Application:

1. Use Create React App to bootstrap the project.

2. This is for installing and launching the project
3. Change to the directory of the project
4. Run npm install or yarn to install all dependencies
5. Run npm start or yarn start to start the web development application server

You can learn more information on REACT from these locations searches:
1. To learn React, check out the > React documentation.
2. You can learn more in the > Create React App documentation.


Components Name  Description

 Nav:  navigation to to pages in the program 
 NewQuestion Page:  Page to add poll question
 HomePage: Page to render the list of answered and unanswered questions for the logged in user LeaderboardPage: Page to display the leaderboard of users
 Login Page: Page to allow selection of user to log in as Avatar
 ErrorPage: Page error message alert if steps are not followed
 QuestionDetails Page: Page where Component that displays a summary of a poll question options details
 Avatar Page: Page returns user login Avatar information

Utils
Navlinks/
routes - this contains the list of routes used by React-Router in navigating thru the application
State objects
State objects follow the layout of the database name

Users - holds the list of users
Questions - holds the list of questions objects in the database
AuthedUser - holds the ID of the current logged in User

Data
There are two types of objects stored in our database:

Users:
Questions:

Attribute	Type	Description
identifier	String	The users unique identifier
name		String	The users first name and last name
avatarURL	String	The path to the image file
questions	Array	A list of ids of the polling questions this user created
answers		Object	The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either 'optionOne' or 'optionTwo' since each question has two options.

Questions
Questions include:

Attribute	Type	Description
id		String	The questionâ€™s unique identifier
author	String	The authorâ€™s unique identifier
timestamp	String	The time when the question was created
optionOne	Object	The first voting option
optionTwo	Object	The second voting option
Voting Options
Voting options are attached to questions. They include:

Attribute	Type	Description
votes		Array	A list that contains the id of each user who voted for that option
text		String	The text of the option

Your code will talk to the database via these 4 methods:
_getUsers()
_getQuestions()
_saveQuestion(question)
_saveQuestionAnswer(object)

1. _getUsers() Method

Description: Get all of the existing users from the database.
Return Value: Object where the key is the userâ€™s id and the value is the user object.

2._getQuestions() Method

Description: Get all of the existing questions from the database.
Return Value: Object where the key is the questionâ€™s id and the value is the question object.

3._saveQuestion(question) Method
Description: Save the polling question in the database.
Parameters: Object that includes the following properties: author, optionOneText, and optionTwoText. More details about these properties:


Attribute	Type	Description
authorâ€™s		String	The id of the user who posted the question
optionOneText	String	The text of the first option
optionTwoText	String	The text of the second option
Return Value: 	An object that has the following properties: id, author, optionOne, optionTwo, timestamp.

Attribute	Type	Description
id			String	The id of the question that was posted
author		String	The id of the user who posted the question
optionOne	Object	The object has a text property and a votes property, which stores an array of the ids of 			 he users who voted for that option
optionTwo	Object	The object has a text property and a votes property, which stores an array of the ids of 			 he users who voted for that option
timestamp	String	The time when the question was created

4._saveQuestionAnswer(object) Method
Description: Save the answer to a particular polling question in the database. Parameters: Object that contains the following properties: authedUser, qid, and answer. More details about these properties:


Attribute	Type	Description
authedUser	String	The id of the user who answered the question
qid			String	The id of the question that was answered
answer		String	The option the user selected. The value should be either "optionOne" or "optionTwo"

