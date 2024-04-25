Rust has been getting a lot of attention lately, and so I figured it made sense for me to try to learn the language. 
I decided on a project, and for the whole month of February, I tried to implement it in Rust: the goal was to build a chess engine.
For this project, I lived with my cousing Alex in Munich for a month, and he helped me develop a lot of my code. He's the best programmer I know, and I'm very thankful for his help, and his hospitality.
It was a very interesting experience, and my first challenge was to implement chess as a game, before actually having my code play it. And this begged an important question: how should I represent the board and the pieces in my code? What data structure should I use?

## * Data Structure.

I decided on using a simple 8x8 array, that stored whatever was on each square of the board. This way, I was storing all the information I needed to have a functioning implementation of chess. I then proceeded to code the actual game, and it did work. 

## * Perft Tests.

To figure out if my code was working properly, I tested it with some [perft](https://www.chessprogramming.org/Perft) tests. Basically these are tests that take a depth as input, and then count all the possible board states you can get to from a given starting position. For example, if we're on the starting position of a chess game, and count all the possibilities within five moves, you'd get 4865609 different possible board states. If the value given by my code matches the values that are [tabulated](https://www.chessprogramming.org/Perft_Results) online, then my implementation of the game must be correct. It took me a while to get my code to spit out all the right values for all the test positions, but we did get there at some point. 
At this point, I got into a different issue: my code was slow. It was taking 20 minutes to get the results of the perft test for the starting position at depth five:

> depth 5, result 4865609, expected 4865609, took 1193.8818741s, speed 4075.45

Because of this, I thought: well, my move generation is so slow right now, that for sure if I try to move on into coding the actual chess engine, it'll either take too long per move, or just play really bad.

## * Time to Optimise! 

It was then, time to optimise my code. There were a bunch of things that were making it slow: first of all, my data structure wasn't the best. When I first started, I still hadn't heard of [Bitboards](https://www.chessprogramming.org/Bitboards), which are a very clever way of storing the board of a chess game, by representing every square with a bit. I believe this is actually the most efficient way to represent the game programmatically, but I decided to not use them. At this point, I was too committed to a representation using arrays, and I thought it would be a funny challenge to do it this way.
Instead, I decided to change my data structure and also add two vectors: one that stores the white pieces, and another one that stores the black pieces. This way, I didn't have to search through the 64 squares of the board every time I needed to check a certain piece's legal moves. 
Here's my final data structure (I certainly over engineered this, but I couldn't make it simpler without losing efficiency):

``` rust
pub struct Board {
    pub turn: Player,
    pub board: [[Option<Piece>; 8]; 8],
    pub white_pieces: Vec<Piece>,
    pub black_pieces: Vec<Piece>,
    pub white_king_loc: Coord,
    pub black_king_loc: Coord,

    white_can_oo: bool,
    white_can_ooo: bool,
    black_can_oo: bool,
    black_can_ooo: bool,
    half_move_clock: u64,
    en_passant_square: Option<Coord>,
}
```
The remaining optimisations were made as suggested by my cousin (and with a lot of help, I'm not half the programmer he is). The issue my code had was that most of the logic I implemented was separated into a lot of functions that all returned vectors. These generated a lot of allocations into the heap, which are highly inneficient, when comparing that to working with the stack. Instead of having my functions return vectors, me and my cousin changed it so that we're returning iterators instead. This was by far the change to my code that made the biggest difference in performance. Here's an example of one of the functions in my code (I had never written code like this before, it's super cool):
``` rust
fn get_knight_moves<'a>(&'a self, origin: Coord) -> impl Iterator<Item = Ply> + 'a {
        let player = self.player_at_square(origin).unwrap();
        Coord::LIST_KNIGHT
            .iter()
            .map(move |&delta| origin + delta)
            .filter(move |&pos| pos.is_valid() && self.player_at_square(pos) != Some(player))
            .map(move |pos| Ply {
                origin,
                destination: pos,
                promotion: None,
            })
    }
```

With both these changes, my code started running 859x faster:

> depth 5, result 4865609, expected 4865609, took 1.2207851s, speed 3985639.24

## * Conclusion.

AAAnnd this is where I actually stopped. It took me a month of working (and learning Rust at the same time) to get to this point. I had never optimised code for performance before, so the whole process was an incredible learning experience. I'm very happy with the result, and I'll make sure I jump back into this project at some point to get my code playing chess for real, instead of just generating legal moves really fast. It's a start, but certainly not the end of the road.

- I just wanted to include that for this whole process, I was very inspired by Sebastian Lague's "[Coding Adventure: Chess](https://www.youtube.com/watch?v=U4ogK0MIzqk)" video, and a lot of my progress was guided by it. I got the idea to start this project from this video too! (although it does help that I'm such a big chess enthusiast)
