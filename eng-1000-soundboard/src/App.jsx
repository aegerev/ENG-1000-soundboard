import React from 'react';
import logo from './assets/eng1000.png';

import './App.css';
import Button from './Button'
import Sound from "./Sound";

let sounds = [
    new Sound("BULL", "1", "bull.mp3"),
    new Sound("BEAR", "2", "bear.mp3"),
    new Sound("KA-CHING!", "3", "kaching.mp3"),
    new Sound("RING THE BELL", "4", "bell.mp3"),
    new Sound("TROLLEY", "5", "trolley.mp3"),
    new Sound("MISTER ROGERS", "6", "misterogers.mp3"),
    new Sound("HOME", "7", "home.mp3"),
    new Sound("DOG", "8", "dog.mp3"),
    new Sound("TRAIN WRECK", "9", "train_wreck.mp3"),
    new Sound("WHAT DO YOU DO (WITH THE MAD THAT YOU FEEL)","0","what-you-do.mp3"),
    new Sound("GET LOST!","-","get-outta-here.mp3"),
    

    new Sound("BUZZER", "q", "buzzer.mp3"),
    new Sound("FEELING OF ACCOMPLISHMENT", "w", "accomplishment.mp3"),
    new Sound("IT'S GONNA BE OK", "e", "look_forward.mp3"),
    new Sound("THE LITTLE MERMAID NEW ADVENTURES", "r", "the_little_mermaid_new_adventures.mp3"),
    new Sound("WHEN YOU WONDER, YOU'RE LEARNING", "t", "wonder_learn.mp3"),
    new Sound("WHAT?!", "y", "no_way!.mp3"),
    new Sound("LOOK AND LISTEN", "u", "look_and_listen.mp3"),
    new Sound("APPLAUSE", "i", "applause.mp3"),
    new Sound("SPEEDY DELIVERY!", "o", "speedy_delivery.mp3"),
    new Sound("FLY EAGLES FLY", "p", "fly_eagles_fly.mp3"),

    new Sound("ENG-1000", "a", "ENG1000_eyecatcher.mp3"),
    new Sound("HARD TIME PROCESSING", "s", "dialup.mp3"),
    new Sound("AWAKENING", "d", "drums_of_liberation.mp3"),
    new Sound("KIKoRIKI", "f", "kikOriki.mp3"),
    new Sound("DONKEY", "g", "burro.mp3"),
    new Sound("TA DA", "h", "ta_da.mp3"),
    new Sound("ELECTRIC SHOCK", "j", "electric_shock.mp3"),
    new Sound("MAD MONEY MANIFESTO", "k", "mad_money_manifesto.mp3"),
    new Sound("CENSORED", "l", "bleep.mp3"),
    new Sound("EASY", ";", "that_was_easy.mp3"),
    new Sound("TTFN", ";", "buhbuy-bobo.mp3"),
    new Sound("CAN'T HEAR YOU!", "'", "sorry-cant-hear.mp3"),

    new Sound("BOO", "z", "boo.mp3"),
    new Sound("ALL ABOARD", "x", "all_aboard.mp3"),
    new Sound("HOLIDAYS", "c", "holidays.mp3"),
    new Sound("THEY KNOW NOTHING", "v", "know_nothing.mp3"),
    new Sound("DOWN THE DRAIN", "b", "toilet.mp3"),
    new Sound("CODE RED", "n", "breaking_news.mp3"),
    new Sound("BOOT UP", "m", "startup.mp3"),
    new Sound("____ IS SHUTTING DOWN", ",", "shutdown.mp3"),
    new Sound("CAPITAL CALL", ".", "executive_decision.mp3"),
    new Sound("KEEP OUT!", "/", "warning.mp3"),
]

const buttons = [];
for (let i = 0; i < sounds.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    buttons.push(<Button key={i} sound={sounds[i]} />);
}
function App() {
    return (
        <div className="App">
        <img src={logo} alt="ENG-1000 Logo" />
            <div className="App-Button-container">
                {buttons}
            </div>
        </div>
    );
}

export default App;
