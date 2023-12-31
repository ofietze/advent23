import fs from "fs";
import { convertToNumberArrays } from "./convertToNumbers";

const fileContent = fs.readFileSync("4/puzzleInput.txt", "utf8");
const lines = fileContent.split("\n");

const numberArrays = convertToNumberArrays(lines);
const cardCount: number[] = []
// Init array to all 1s
for (let index = 0; index < numberArrays.length; index++) {
    cardCount.push(1)
}

const addCardCopies = (fromIndex: number, deltaIndex: number, addCards: number) => {
    for (let index = fromIndex; index < cardCount.length && deltaIndex > 0; index++) {
        cardCount[index] += addCards;
        deltaIndex--
    }
}

for (let i = 0;  i < numberArrays.length; i++) {
  let hits = 0;
  for (const num of numberArrays[i].pickedNumbers) {
    if (numberArrays[i].winningNumbers.includes(num)) hits++;
  }
  addCardCopies(i+1, hits, cardCount[i])
}

console.log(cardCount);
console.log(cardCount.reduce((a,b) => a+b));
