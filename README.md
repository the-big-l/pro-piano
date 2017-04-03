# Pro Piano

[Pro Piano](https://the-big-l.github.io/pro-piano/) is a single page, interactive, player-piano studio app built on a React and Redux. Inspired by the popular self-playing piano of the 1920's, Pro Piano allows users to create their own piano-roll and listen to their creations.

## Features

- Play the piano by clicking on the keys
- Select notes to be played by the piano by clicking and dragging
- Ability to start, stop, and reset your tune
- Elegant styling

### Piano

Users can play the piano by simply clicking on the keys. The audio was sampled from a Yamaha C5 grand piano.

![play_piano](/docs/images/play_piano.png)

### Creating Notes

Create notes by clicking on the piano roll. Drag the mouse to create longer notes.


![playlist_create](/docs/images/create_notes.gif)


### Listen

Listen to your creation by clicking the play button.


## Implementation

Prelude utilizes the following technologies:

- React.js
- Redux
- JavaScript ES6
- HTML5
- CSS3
- Redux
- SASS
- AWS S3


### React/Redux

  React and Redux were used on the frontend to create modular components with easy to use apis and a single source of truth for the apps current state.

  Piano keys and the audio are created by iterating over the key-data object which contains the pitch and audio sources. The components are reused for each key but with different props being passed down.
  
### JavaScript

JavaScript was used to prepare the user generated notes to ensure that they were synchronized with each beat. On creation, notes were stored in a pianoRoll, which was an object with keys for each pitch. Each key corresponded to an array of the individual notes each of which had a start and stop position for when to play the note.

The player itself took in a computedRoll, which was an array of 'beats'. Currently, there are 32 quarter-note beats in the roll. Each beat was an object of pitches which corresponded to a 'play', 'continue', or 'stop' command. To prepare the notes for the player, the pianoRoll object was iterated over and each of the 32 'beats' were updated with one of the three commands.

On play, the state which consisted of the current beat, was updated every 250ms with the new beat. As the commands changed for each pitch, the audio would update accordingly.

### SASS
Thoughtful class names allowed reusable styling. Styling was organized by nesting CSS rules which is supported by the use of SASS.


## Future

* [ ] Demo Songs
* [ ] Piano animations while playing
* [ ] Optimize logic to allow longer piano rolls
