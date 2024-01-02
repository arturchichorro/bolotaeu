My month of december was mostly spent programming an UI to play chess on, using React. I'm really happy with it! It can currently be played via this link:
https://chess-react-bolota.netlify.app/

And the source code is all in this GitHub repository: 
https://github.com/arturchichorro/chess-react

Here's the complete list of features, and some other things I want to implement in the future:
### Features:
- All the movement rules of chess are implemented, including en passant, castling both directions and pawns moving two squares on their first move
- Checkmates, stalemates, threefold repetitions, fifty move rule
- A button to take back the last move made
- A button to flip the board and play from the perspective of the black pieces
- Right click any square on the board to highlight it, just like how you can do so in other chess platforms
- A complete list of the moves played on the side of the board, using accurate commonly used chess notation 

### Things I still want to add:
- Responsive design, so that I can one day add it straight to this website and have it being displayed on any device
- Sounds on move
- Possibility to send a link to play with someone online
- Buttons to resign or ask for a draw
- Button to toggle the ranks and files, and a button to toggle notation on the side of the board
- Clicking on a piece and then on the destination square should also move the piece, currently it only supports drag and drop
- Adding arrows between board squares just like in other chess platforms (will probably achieve this using svgs or something)
- Easily resize the board
- Fix bugs related to pressing the takeback button while the promotion window is open

### Overall thoughts
It was really fun to work on this project. It taught me a lot about React, Redux, and surprisingly, css. One of the highlights of this project was coding the button that flips the board. It was surprisingly simple when reduced to simple smaller problems, and it was mostly done using css!

There were some other interesting challenges too: after I had most of the code done, I had a global state that kept track of all the moves played until then, within an array. The problem was that I wasn't keeping track of the castling permissions at every ply, and instead only stored an object with this information. This created several problems: one simple example was that if I moved my king and lost castling rights, and then pressed the takeback button, I then wouldn't be able to castle in the previous position either (which would be wrong). An even more complicated issue that this brough up though, was that for implementing the threefold repetition draw, I need to take castling permissions into consideration. Two different positions that look exactly the same on the board, might actually be different if one side could castle in one of them, but couldn't in the other. At this point I had to make a big structural change to my code, and started storing castling permissions in association with every ply made. This was a great opportunity to learn more git, and it was an interesting challenge to refactor through so much code. 
Here's how my positions (initial state) were stored in global state before the modification:
```js
position: [createPosition()],
```
and after:
```js
game: [{
	position: createPosition(),
	castleDirection: {
		w: 'both',
		b: 'both',
	},
	fifty: 0
}]
```
(Note that I then also added the fifty move rule counter to the mix, so that it wouldn't bug out the takeback button).

I'm very happy with how the project turned out, and I'll definetely come back to it in a few months. I want to have this interface in this website at some point!


