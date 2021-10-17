# NoPixel_Heist_Games

<a href="https://robertwradford.github.io/NoPixel_Heist_Games/" target="_blank" rel="noopener noreferrer">Click here to go to the page.</a>

## Tutorial

Before you press start on any puzzle you can change the puzzle completion timer if you like either to challenge yourself to extreme mode or to give yourself extra time to practice. 

### Lockpick

When you press start you will see 'Get Ready!' and then after 1 second you will see a circle with a number in the center appear. The circle will have a progressing bar and a green wedge somewhere on the perimeter. To succesfully pick the lock you need to hit the indicated number when the progression bar is inside of the green wedge. If you miss the timing or you press the wrong key you will fail the lockpick.

My remake of this minigame has a big flaw that the wedges can only start at 90 degree intervals around the circle due to the way progression arcs are typically built using 4 invisible turning squares. I don't personally know another way to do this and couldn't find a solution online so if you have a suggestion for that let me know please!

### Hacking

The first step in the hacking process is seeing a mixed combination of 1-4 (1-5 for the vault hack) in four (five for vault) seperate blocks and you will need to memorize which block they are in within 2 seconds. After that the blocks will change to have a random background color, a random shape with its own random background color, text of a random shape as well as text of a random color with their own background color, and a random number with it's own background color as well in addition to a question prompt with two questions with a digit referring to the previous block with that digit, and asking for one of:
  <ul>
    <li>Backgorund Color (the color of the block itself)</li>
    <li>Shape (the shape in the block)</li>
    <li>Shape Color (the color of the shape in the block)</li>
    <li>Shape Text (the word that is a shape in the block)</li>
    <li>Number Color (the color of the number in the block)</li>
    <li>Color Text (the word that is a color in the block)</li>
    <li>Text Background Color (The color of the shape and color text in the block)</li>
  </ul>

By default you will have 5 (7 for vault) seconds to answer and press enter, running out of time to type or not hitting enter will result in a failure, and you will need to succesfully do that 7 (5 for vault) times to succesfully complete the hack.

I made the custom hacking variant in response to the gold laptop hack being admittedly rather lackluster for most of the audience expectations, you can put bewteen 3 and 12 blocks on screen with between 1 and 11 prompts, and set how many rounds of that you would like to have to complete between 1 and 20. The start button will not work if you put a higher number in for prompts than blocks because the way it is coded has a pre-ordained singular prompt for each block on creation. You can also set exactly how many seconds you want to memorize the digit sequence as well as to input your answer, each going up to 240 seconds (4 minutes) maximum.

I made it so that 6 blocks would comfortably fit on each row, however it's rather difficult to get things to populate with an even number of items in each row only when it overfills so there's some awkwardness to numbers like 7-9. I may come back to fix that or may leave it I'm not sure yet.

I also might make a version of the hacks that randomly decides how many rounds you need to complete at the start, and then randomly decides how many blocks and how many prompts you get each round with a preset time given per block and prompt to mix things up more.

### Thermite

Once the thermite starts you will see a 6x6 (5x5 for jewelry thermite) grid of squares, with 14 (10 for jewelery thermite) random squares highlighted. After 5 seconds the highlighted squares will blend back in with the other squares and by default you will have 8 seconds to click all of the previously highlighted tiles. If you click a correct square it will highlight again, and if you click an incorrect square it will highlight red. If you click 3 incorrect squares or run out of time the thermite attempt is a failure.

I am not currently sure if the jewelry store thermite gives less time to click or allows for less inaccurate clicks before failing, if anyone knows please let me know!

### PC USB Hack

This is a very simple game, a 12-digit code will come on screen for 5 seconds by default, and then you will have 6 seconds to reinput that sequence as you remember it. I added options to change memorization time and answering time as desired between 1-60 seconds in .5 second steps.

## FauxPixel games

I decided that I would be adding more minigames that are slight spin-offs of NoPixel games or ideas for games that could be made in the NoPixel feel. So to prevent either a massive menu or confusing people that a new mini game may be out for something I would make a separate menu with the games not from NoPixel. FauxPixel randomly popped in my head as a funny play on words to denote its imitation work and not from the actual server.

The prior paragraph was origin of the name but following I had a fun project idea and decided to make a web app and perhaps a mobile app for it called FauxPixel. It is already live at FauxPixel.com and you can get a good idea of what it will be like, however it is very early into development (1 and a half afternoons after my day job spent) and I will be out of town away from my desktop until the 11th so I won't be making further progress until then. Soon after that I will make a proper home page with a summary of the app and patch notes, a tutorial page, add a way to just play the minigames onto that site, and make more variance in the event log lines for each job to help prevent it from being too repetitive. I will also be adding the lockpicking minigame and putting it at the start of robberies and oxy runs as well as custom minigames for robbing houses, Oxy runs, and escaping in a police chase to make all outcomes non-random. Of course I will also be adding in security truck jobs, bobcat, and the lower vault as well but I haven't figured out what I want to do for the truck/bobcat minigames, and I haven't seen much of the yacht heist yet but when that's more flushed out it will make it in too.

The things I would like to add in but am less certain if I will is:
<ol> 
  <li>making it possible to see other active players and send messages</li> 
  <li>make heists multi-player based and requiring you find a crew to go with</li>
  <li>add street racing with a simple multiplayer game for it</li>
  <li>add custom cars for purchase that you can use in street racing or police escapes for altered performance</li>
  <li>add custom items that changes hacking/thermite settings to give more time or something like that for those who are struggling but want to play through</li>
</ol>

### Wiring

For the wiring mini-game you will be shown 5 usb port slots labeled 1-5 in proper left to right order and each of them will be labeled with a unique background-color and shape symbol pairing. You will have 6 seconds to remember what color/shape pair goes to what number, and then you will see 5 cables with a shape at the end of the cable and a color along the cable itself and you need to type out which order the cables are in within the time interval set (8 by default). For example:

  ports:
    <ol>
      <li>white square</li>
      <li>red rectangle</li>
      <li>green square</li>
      <li>white triangle</li>
      <li>black circle</li>
    </ol>

  cables:
    <ul>
      <li>white triangle</li>
      <li>green square</li>
      <li>red rectangle</li>
      <li>white square</li>
      <li>black circle</li>
    </ul>

  Answer:
    43215

In order to succeed you will need to cable 4 servers this way!

This is not a NoPixel minigame, it is an idea I had inspired by the hacking minigame combined with a real server system cabling procedure I've dealt with in the past. It inititially was made with 6 ports and cables and more time to memorize and answer, but in practice I found that it made variance too high on difficulty. I think going lower on the number of ports would be far too easy so 5 is probably the sweet spot unless the number of colors in the pool were reduced, and perhaps 6 could be brought back for an extra challenging version.

I think a really cool implementation of this minigame in NoPixel could be in the middle of either the Bobcat security or the FIB heists in order to open a door or access information on a hurry. Given the nature of cabling a server not using anything, it wouldn't require any additional tools and you would get unlimited attempts to succesfully cable the servers, but each failure raises an alert level and brings more armed guards out.

### Alternate Thermite

This game plays fairly similarly to the standard 6x6 vault thermite. Instead of 14 squares to remember in a field of 36 squares you're simply shown 8 squares numbered 1-8 for the same 5 seconds and they will be the only squares shown after, at which point you will have the same 8 seconds to click the squares in the proper sequence.

I saw an old video of lab monkeys being trained to play a game where 6 numbers would appear on a black tv screen and then grey blocks would shortly replace the numbers, and if the monkey hit the blocks in the right order they gave them a banana. As I was watching it I was thinkink how similar it felt to the thermite minigame so I put together the basic form of it here. I'm thinking it may be more interesting to further blend the two and make all 36 squares highlight like the normal thermite game with 3 blank tile clicks allowed before failure, but still an incorrectly sequenced tile instantly fails. At the same time I think at that point the only distinguishing factor between the two games is sequence mattering amongst the tiles and less tiles to compensate for difficulty, which may be a bit boring. I also think balancing the difficulty of that version may prove too difficult.

### House Robbery

I wanted to simulate the experience of a house robbery within FauxPixel, so I created this minigame. On pc you can move around the home with wasd keys and on mobile you will have a d-pad on screen to click or you may also click tiles adjacent to the character to move on either platform. Your character is tbe purple block, walls are blue, burgandy is furniture or obstacles, green are searchable areas, yellow the entrance to the home, and bright red is large objects. When you grab a large object your purple block will change to have a red circle inside of it signaling you're carrying the object and you need to walk to the entrance to drop it off before doing anything else. The longer you spend the higher chance that police arrive, if the chance hits %150 while you're inside youll be breached and captured.

## Project idea / Dev talk

I've been keeping entertained on the side by watching content from the GTA V roleplay server NoPixel while working, and I thought some of the minigames might be perfect to reproduce in HTML/CSS/JS to practice timed elements. I realized that even after making a pretty large number of sites, I hadn't ever created anything that used timed actions so it was a perfect opportunity. I was expecting to only spend one afternoon on this but I ended up spending two to get everything done and then another evening for additional styling, bugfixes, and features. Some of the code layout is really sloppy and the aesthetics are still very minimal effort but I think they get the idea across.

The site is built to auto-scale with resolution and so it is playable on mobile devices as well, optimally in portrait view. Thermite is perfect on mobile but the hacking may be extra challenging with smaller boxes/text to look at and unfortunately landscape view won't work because of the onscreen keyboard blocking vision.

I've noticed a pretty decent amount of traffic to the repo and a lot of people have also cloned it. If you have any questions about the code, suggestions for other things to do or improvments, or just want to talk about it you can feel free to reach out to me with a message either through GitHub, LinkedIn, or my email. All of those points of contact should be available from my Git profile page. Hope you enjoy!
