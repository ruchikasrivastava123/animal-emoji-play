import React, { useState } from "react";
import "./styles.css";
const animalsDictionary = {
  "🐄": "Cow",
  "🐪": "Camel",
  "🐘": "Elephant",
  "🦁": "Lion",
  "🐕": "Dog",
  "🐈": "Cat"
};
var emojis = Object.keys(animalsDictionary);
export default function App() {
  const [meaning, setmeaning] = useState("");
  function animalInputHandler(event) {
    var userinput = event.target.value;
    var meaning = animalsDictionary[userinput];
    if (meaning === undefined) {
      meaning = "We dont have in out database";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = animalsDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Animal play!!</h1>
      <input
        onChange={animalInputHandler}
        placeholder="Put an animal emoji to know its name.."
      />
      <h2>{meaning}</h2>
      <h3>Animal Emojis We know</h3>
      {emojis.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
