Retro Games   
```
                     ____      _                ____                           
                    |  _ \ ___| |_ _ __ ___    / ___| __ _ _ __ ___   ___  ___ 
                    | |_) / _ \ __| '__/ _ \  | |  _ / _` | '_ ` _ \ / _ \/ __|
                    |  _ <  __/ |_| | | (_) | | |_| | (_| | | | | | |  __/\__ \
                    |_| \_\___|\__|_|  \___/   \____|\__,_|_| |_| |_|\___||___/

                                       ____       _        
                                      | __ )  ___| |_ __ _ 
                                      |  _ \ / _ \ __/ _` |
                                      | |_) |  __/ || (_| |
                                      |____/ \___|\__\__,_|
                                                                     
```

# Retro Games
I built a side-scrolling platformer in homage to a collection of video games that captivated the imaginations of young boys and girls of a special generation before the advent of life-devouring smartphones. This is a very simple game built by a two-week old developer, so please bear with any bugs. This game requires the player to dodge incoming objects lest you die. In the game, of course. 

Dodger, the mysterious, adorable, roly-poly-esque bundle of delight, is desperate to get home after a long day at the office. His boss threw him under the bus by piling work on him last-minute and his herniated disc is acting up. Drat!

**domain**: - https://jkim3360.github.io/retro-game/

## description and user story
-what is the project?
This project required students to create a game website without using libraries in order for our basic web development skills to be stretched and tested.

-why this project for you?
I believe this project is for me because it puts your mind in all kinds of situations ranging from basic collision detection to manipulating the DOM to flip a moving image in real-time by using conditionals. This project also made me want to add more features after MVP to faithfully emulate a retro game environemnt.

-how would a user (not you) approach this project if using it in the wild (i.e. how would a player play your game).
Players would approach this game as a desktop version of a simple mobile game with one objetive- to survive. It 

## technologies & packages
ESLint, Vanilla JS, CSS, HTML

## launch/build
-how do run the game for users who clone your repo
-normally something like `npm install` then `npm run start` or for this type of vanilla project.

## major problems & solutions
- Collision detection, discovering getComputedStyle to grab dimesions and figuring out the boundaries of each sprite
- Player movement

## MVP
MVP includes title page, game page and gameover page. Also MVP has movings sprites, a stopwatch, score counter, health bar and message box.

Post MVP, I was able create a 'heart' sprite function that randomly spawned hearts which regenerate health. I was also able to add background music for each page, sound effects upon collision, name and score local storage input, and various pieces of styling.

-describe stretch goals, wips, next steps (this can be a separate heading if you want)
Future goals for this project are to change music before a boss appears, have a screen flash upon collision with a boss, change character and add the ability to shoot projectiles.

# How to play

The objective of this game is to survive the flight home without getting hit by hostile objects such as absurd political rhetoric, a rogue Super Mario star, and the legendary Excalibur flying back home like Thor's hammer. Use the mouse and click and move your character. This game is all about timing your click perfectly, because there is a slight lag in your character's movement. Watch out for the occasional hearts! They replenish your health bar, located at the top left of the window. The player who lasts longest wins!

## _code snippet_

``` 
The following code helped me achieve a 'turning' effect. I wanted the player sprite to turn depending on the direction it was moving, so I achieved this through an event listener. Depending on where the player clicks, the player sprite turns to face that direction.

document.addEventListener('click', (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;
  function turnRight() {
    if (mouseX > dodgerX && dodger.className === 'dodger image') {
      dodger.classList.toggle('right');
    }
  }
  turnRight();
  function turnLeft() {
    if (dodgerX > mouseX && dodger.className === 'dodger image right') {
      dodger.classList.toggle('right');
    }
  }
  turnLeft();
}); 

This code snippet was difficult to achieve at first. I did not have a full understanding of collision detection so I learned a lot about how dimensions are expressed in web development. 

 if ((dodgerTop + dodgerHeight > trumpTop) && (dodgerLeft + dodgerWidth > trumpLeft)
    && (dodgerLeft < trumpLeft + trumpWidth) && (dodgerTop < trumpTop + trumpHeight)) {
    ...
  } 
  ```



# retro-gamer
