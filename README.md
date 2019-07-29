# The Price is Right

This is a deployed site on the Heroku platform. There is nothing to download and install, and there are no system dependancies
The site is not browser dependent and will work on any browser that reads HTML5.

## How to Play
**_Start New Game_**
* Each Player will sign in using their Google account. Once the account is verified via Google OAuth, the user will be redirected to the home page.

* To start a new game, click on the Start Game link at the bottom of the page. 

**_Contestant's Row_**
* This will automatically start by populating the products and fake contestants to compete against during the course of the
game. When you are ready to continue to the game play, click on the corresponding link after announcing the bidding order. 

* The Player will be presented with a random electronic product. The objective is to guess the correct retail price for the
product without going over the price. The fake opponents will have guesses randomly entered for them. The Player will enter
the price directly on the webpage.

* If the Player wins the first round bid, the Player will continue to the mini game portion.

**_Punch-a-Bunch_**
* In this mini-game, the Player will be presented four different everyday products with an incorrect price listed below. 

* The Player is asked to guess if the displayed price is higher or lower than the actual retail price of the product. For each
correct guess, the Player will add "punch." 

* After all four products have been displayed, the Player will be redirected to a populated 50 circle punchboard. Behind each
circle is a random price from $100 to $25,000. 

* Depending how many "punches" were earned prior, the Player will then click an equal amount of times. The dollar amount
reveled will be added to the total score for the Player.

* After all punches have been used, the Player will continue to the final round of the game.

**_Showcase Showdown_**
* The final round is a spinning verticle wheel. Each square on the wheel is a different value ranging from 5 to 100 in
increments of 5. 

* The Player will be allowed one spin by clicking the spin button next to the wheel. 

* The value of the spin will be multiplied by $100, and this final amount will be added to the Player's total winnings.

* To end the game, click the Go Home button to be redirected to the homepage and save this games score.

## General Game Design

The database structure is Postgres and uses Ruby on Rails to save game data. The dynamic webpages are designed using React. 

## The Legal Stuff

Learn.co Educational Content License
Copyright (c) 2015 Flatiron School, Inc

The Flatiron School, Inc. owns this Educational Content. However, the Flatiron School supports the development and availability of educational materials in the public domain. Therefore, the Flatiron School grants Users of the Flatiron Educational Content set forth in this repository certain rights to reuse, build upon and share such Educational Content subject to the terms of the Educational Content License set forth here (http://learn.co/content-license). You must read carefully the terms and conditions contained in the Educational Content License as such terms govern access to and use of the Educational Content.

Flatiron School is willing to allow you access to and use of the Educational Content only on the condition that you accept all of the terms and conditions contained in the Educational Content License set forth here (http://learn.co/content-license). By accessing and/or using the Educational Content, you are agreeing to all of the terms and conditions contained in the Educational Content License. If you do not agree to any or all of the terms of the Educational Content License, you are prohibited from accessing, reviewing or using in any way the Educational Content.
