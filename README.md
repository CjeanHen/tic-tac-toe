# Tic-Tac-Toe Project 1
This is a basic Tic-Tac-Toe game in which the user can create an account and play against themselves. The rules are the same as always: a user must put three X's or O's in a row in order to win. The website will remind the user if the next mark will be an X or an O, and in the end will declare the winner or a tie. The user can also view the total number of games that have been played by clicking on the Total Games button in the navbar. They can also change their password or restart the game at any point using the respective navbar buttons. When they are done, the user can sign out. All of this is accomplished by communicating with a 3rd party API.

## Planning Story
I started the project by building the forms and buttons to communicate with the API. There was no styling whatsoever, and all buttons were visible at all times. Once everything was connecting to the API, I began to separate the buttons based on authentication using CSS styling. The board is just a collection of <div>s with empty <p> tags to allow for X's and O's to be added in. Once the board was created I broke the game down into a series of problems. First I wanted to be able to click on a box and add a mark. Since we were using a lot of click events for the API communication I followed that model and found a way to change the inner HTML of the <div> to show the letter X. From there I knew I was going to need a way to make an O so I created a counter and an if statement to check for even/odd numbers on the counter to assign the X and O. I also created an array of 9 items to represent the divs that were occupied and the vlaues they contained. This all worked well in terms of getting the game to work on the application, but I didn't like the amount of hardcoding I was doing, and I wasn't really interacting with the responses from the API. The reason was that I was trying to declare variables from the API response globally which would not allow the page to load. When I finally moved my variables into the scope of the functions I was able to eliminate the hardcoding and interact more with the API information.

When I began styling the website I was initially relying heavily on CSS Flexbox as I was not comfortable with any other styling technologies. I really struggled with basic layout and was starting to make a mess of my HTML by adding so many new elements without properly using them. Finally I took some time to explore Bootstrap and its documentation. With Bootstrap I was able to make a much nicer login form and navbar that are also responsive to the size of the browser.

### User Stories
* As a user I want to be able to create a new account using my email address and a password.
* As a user I want to be able to login with a valid username and password.
* As a user I want to be able to change my password after successfully logging into the app.
* As a user I want to be able to start a new game when a previous game ends or any time I want to abandon the current game.
* As a user I want to be able to see the number of games I have completed.
* As a user I want to be notified of which mark will be put on the board on my next turn.
* As a user I want to know who won the game or if there was a tie.
* As a user I want spaces to be marked when they are clicked.
* As a user I do not want an existing mark to be changed in subsequent turns.
* As a user I do not want to be able to continue clicking on the board once the game is over.

### Technologies Used
* HTML/CSS
* JavaScript
* jQuery
* Bootstrap

### Unsolved Problems
* I would like to make the gameboard completely reset when someone signs out or signs in so that it never shows the old game.
* I would like to make the navbar dropdown options stack on top of each other on mobile screens.
* I would like to eventually make a modal to declare the winner or a tie.

### Wireframes
![Initial wireframes] (https://imgur.com/vfcwmpG)
