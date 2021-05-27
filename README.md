# NoPixel_Heist_Games

<a href="https://robertwradford.github.io/NoPixel_Heist_Games/" target="_blank" rel="noopener noreferrer">Click here to go to the page.</a>

## Tutorial

Before you press start on any puzzle you can change the puzzle completion timer if you like either to challenge yourself to extreme mode or to give yourself extra time to practice. 

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

### Thermite

Once the thermite starts you will see a 6x6 (5x5 for jewelry thermite) grid of squares, with 14 (10 for jewelery thermite) random squares highlighted. After 5 seconds the highlighted squares will blend back in with the other squares and by default you will have 8 seconds to click all of the previously highlighted tiles. If you click a correct square it will highlight again, and if you click an incorrect square it will highlight red. If you click 3 incorrect squares or run out of time the thermite attempt is a failure.

I am not currently sure if the jewelry store thermite gives less time to click or allows for less inaccurate clicks before failing, if anyone knows please let me know!

### Wiring

For the wiring mini-game you will be shown 6 usb port slots labeled 1-6 in proper left to right order and each of them will be labeled with a unique background-color and shape symbol pairing. You will have 10 seconds to remember what color/shape pair goes to what number, and then you will see 6 cables with a shape at the end of the cable and a color along the cable itself and you need to type out which order the cables are in within the time interval set (20 by default). For example:

  ports:
    <ol>
      <li>white square</li>
      <li>red rectangle</li>
      <li>green square</li>
      <li>white triangle</li>
      <li>black circle</li>
      <li>blue rectangle</li>
    </ol>

  cables:
    <ul>
      <li>blue rectangle</li>
      <li>white triangle</li>
      <li>green square</li>
      <li>red rectangle</li>
      <li>white square</li>
      <li>black circle</li>
    </ul>

  Answer:
    643215

This is not a NoPixel minigame, it is the initial version of an idea I had inspired by the hacking minigame combined with a real server system cabling procedure I've dealt with in the past. I think that as is the difficulty is likely too high and I may need to add more time, or more reasonably remove one or two ports/cables from the game.

## Project idea / Dev talk

I've been keeping entertained on the side by watching content from the GTA V roleplay server NoPixel while working, and I thought some of the minigames might be perfect to reproduce in HTML/CSS/JS to practice timed elements. I realized that even after making a pretty large number of sites, I hadn't ever created anything that used timed actions so it was a perfect opportunity. I was expecting to only spend one afternoon on this but I ended up spending two to get everything done and then another evening for additional styling, bugfixes, and features. Some of the code layout is really sloppy and the aesthetics are still very minimal effort but I think they get the idea across.

The site is built to auto-scale with resolution and so it is playable on mobile devices as well, optimally in portrait view. Thermite is perfect on mobile but the hacking may be extra challenging with smaller boxes/text to look at and unfortunately landscape view won't work because of the onscreen keyboard blocking vision.

I've noticed a pretty decent amount of traffic to the repo and a lot of people have also cloned it. If you have any questions about the code, suggestions for other things to do or improvments, or just want to talk about it you can feel free to reach out to me with a message either through GitHub, LinkedIn, or my email. All of those points of contact should be available from my Git profile page. Hope you enjoy!
