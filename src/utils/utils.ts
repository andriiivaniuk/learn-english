import { EspeechPart } from "../words/Interfaces.ts";

import { words } from "../words/words.ts";

export const  scrambleArr = (arr: any[]): any[] => {
    const finalSet = new Set();

    while (finalSet.size !== arr.length) {
        let rand: number = Math.floor(Math.random() * arr.length);
        finalSet.add(arr[rand]);
    }

    return Array.from(finalSet);
};

export const getAnswers = (rightWord: string, rightSpeechPart: EspeechPart): string[] => {
    const wrongAnswers: string[] = [];

    while(wrongAnswers.length !== 2) {
        let rand: number = Math.floor(Math.random() * words.length);
        if (words[rand].word !== rightWord && !wrongAnswers.includes(words[rand].word)
            && words[rand].speechPart ===  rightSpeechPart) {
            wrongAnswers.push(words[rand].word);
        }
    }

    return wrongAnswers;

}