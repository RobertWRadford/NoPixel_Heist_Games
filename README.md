# NoPixel_Heist_Games

<a href="https://robertwradford.github.io/NoPixel_Heist_Games/" target="_blank" rel="noopener noreferrer">Click here to go to the page.</a>

While I've been working I've also been keeping entertained on the side by watching content from the GTA V roleplay server NoPixel, and I thought some of the minigames might be perfect to reproduce in HTML/CSS/JS to practice timed elements. I realized even after making a pretty large number of sites, I hadn't ever created anything that did use timed actions so it was a perfect opportunity. I was expecting to only spend one afternoon on this but I ended up spending two to get everything done and then another evening for additional styling, bugfixes, and features. Some of the code layout is really sloppy and the aesthetics are still very minimal effort but I think they get the idea across.

The site is built to scale things down to be playable on mobile devices as well, optimally in portrait view. Thermite is perfect on mobile but the hacking may be extra challenging with smaller boxes/text to look at and unfortunately landscape view won't work because of the onscreen keyboard blocking vision.

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

By default you will have 5 (7 for vault) seconds to answer and press enter, running out of time to type or not hitting enter will result in a failure, and you will need to succesfully do that 7 (10 for vault) times to succesfully complete the hack.

### Thermite

Once the thermite starts you will see a 6x6 grid of squares, with 14 random squares highlighted. After 5 seconds the highlighted squares will blend back in with the other squares and by default you will have 8 seconds to click all of the previously highlighted tiles. If you click a correct square it will highlight again, and if you click an incorrect square it will highlight red. If you click 3 incorrect squares or run out of time the thermite attempt is a failure.
