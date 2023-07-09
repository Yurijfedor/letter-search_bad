import { useState } from "react";
import {
  Container,
  TextArea,
  Button,
  Result,
} from "./uniqueCharacterFinder.styled";

export const UniqueCharacterFinder = () => {
  const [text, setText] = useState("");
  const [uniqueCharacter, setUniqueCharacter] = useState("");

  const handleTextChange = (event) => {
    const text = event.target.value;
    setText(text);
  };

  const findUniqueCharacter = () => {
    const words = text.split(" ");

    let uniqueCharacters = [];

    words.forEach((word) => {
      const charCounts = {};
      for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
      }

      const uniqueChar = Array.from(word).find(
        (char) => charCounts[char] === 1
      );
      if (uniqueChar) {
        uniqueCharacters.push(uniqueChar);
      }
    });

    const uniqueChar = Array.from(new Set(uniqueCharacters)).find(
      (char) =>
        uniqueCharacters.indexOf(char) === uniqueCharacters.lastIndexOf(char)
    );

    setUniqueCharacter(uniqueChar);
  };

  return (
    <Container>
      <TextArea onChange={handleTextChange} rows="4" cols="50" />

      <Button onClick={findUniqueCharacter}>Find Unique Character</Button>

      {uniqueCharacter && <Result>Unique Character: {uniqueCharacter}</Result>}
    </Container>
  );
};
