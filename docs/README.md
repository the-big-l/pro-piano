## Pro Piano

### Background

Pro Piano is piano roll simulator app that allows you to write songs for the piano online. The original piano roll was a continuous roll of paper with holes punched into it used to operate a player piano. The player piano, like this app, reads the roll and plays the corresponding notes.

### Functionality & MVP  

With this piano roll simulator, users will be able to:

- [ ] A playable piano
- [ ] Start, stop, and reset the piano roll
- [ ] Select squares to be played by the piano
- [ ] Choose from preset demo songs

In addition, this project will include:

- [ ] An About modal describing the background and rules of the app
- [ ] A production Readme

### Wireframes

This app will consist of a two-octave keyboard on the left side which can be played by clicking on the keys. To the right will be the piano roll consisting of blocks of 16th notes which can be selected by the user. Click and drag will be implemented as continuous notes, while individual selection will by new keyboard hits. The top will have play, stop, and reset buttons along with preset songs.

![wireframes](/docs/images/pro_piano_wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- React/Redux for overall structure and app logic
- Vanilla HTML audio tag
- SASS for styling
- Webpack to bundle and serve up the various scripts.

Notes created by the user will contain data about the position, duration, and tone for each note. These will be stored in an array as the user creates them. When the play button is clicked, the notes are retrieved based on their position and the associated audio will be played.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of the piano. Create piano component and style it.

**Day 2**: Implement sounds when clicking on piano keys. Make sure sound loads fast enough, or work on allowing audio to be preloaded. Start building piano roll component. Read documentation on react-clickdrag

**Day 3**: Continue working on piano roll logic. Users should be able to create note objects by clicking or clicking and dragging on the piano roll. Start implementing logic to queue up notes for the piano to play. Determine which option is best, holding every note (starting empty) and filling them, or adding notes to an array as they are created.

**Day 4**: Continue working on playing user inputted songs. Add demo songs, production readme, and work on additional styling and bug fixes

### Bonus features

Some anticipated updates are:

- [ ] Looping
- [ ] Additional octaves
- [ ] Adding additional sounds
- [ ] Saving sounds to be recorded/saved
