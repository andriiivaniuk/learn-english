export interface Iword {
    id: number,
    word: string,
    speechPart: EspeechPart,
    translationUkr: string,
    translationRus: string,
    difficulty: EdifficultyLevel
}

export enum EspeechPart {
    Noun = 0,
    Adjective = 1,
    Verb = 2
}

export enum EdifficultyLevel {
    Easy = 0,
    Medium = 1,
    Hard = 2
}

export const words: Iword[] = [
    {
        id: 0,
        speechPart: EspeechPart.Noun,
        word: "cat",
        translationUkr: "кіт",
        translationRus: "кот",
        difficulty: EdifficultyLevel.Easy
    },
    {
        id: 1, 
        speechPart: EspeechPart.Noun,
        word: "nut",
        translationUkr: "горіх",
        translationRus: "орех",
        difficulty: EdifficultyLevel.Easy
    },
    {
        id: 2,
        speechPart: EspeechPart.Verb,
        word: "to create",
        translationUkr: "створювати",
        translationRus: "создавать",
        difficulty: EdifficultyLevel.Easy
    }
];

export const allPossibleNouns: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Noun);

export const allPossibleAdjectives: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Adjective);

export const allPossibleVerbs: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Verb);
