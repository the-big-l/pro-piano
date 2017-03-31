# Pro Piano

[Pro Piano](https://the-big-l.github.io/pro-piano/) is a single page, interactive, player-piano studio app built on a React and Redux. Inspired by the popular self-playing piano of the 1920's, Pro Piano allows users to create their own piano-roll and listen to their creations.

## Features

- Play the piano by clicking on the keys
- Select notes to be played by the piano
- Start, stop, and reset your tune
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
- HTML5
- CSS3
- Redux
- SASS
- AWS S3


### React/Redux
  React and Redux were used on the frontend to create modular components with easy to use apis and a single source of truth for the apps current state.

  Piano keys and the audio are created by iterating over the key-data object which contains the pitch and audio sources. The components are reused for each key but with different props being passed down.


### SASS
Thoughtful class names allowed reusable styling. Styling was organized by nesting CSS rules which is supported by the use of SASS.

  ```css
  ul.piano-roll {
    box-sizing: border-box;
    border-top: 1px solid rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    padding-top: 1.5em;
    margin-top: 16px;
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;

    .lane-wrapper {
      position: relative;

      .beat-wrapper {
        position: absolute;
        top: 0;
        left: 0;

        .beat {
          display: inline-block;
          width: 1em;
          height: 1em;
          border-radius: 3px;
          ...
```

## Future

* [ ] Demo Songs
* [ ] Piano animations while playing
* [ ] Optimize logic to allow longer piano rolls
