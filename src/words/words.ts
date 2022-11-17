export interface Iword {
    id: number,
    word: string,
    speechPart: EspeechPart,
    translationUkr: string,
    translationRus: string,
    difficulty: EdifficultyLevel,
    themes: string[]
}

export enum EspeechPart {
    Noun = "Noun",
    Adjective = "Adjective",
    Verb = "Verb"
}

export enum EdifficultyLevel {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard"
}

export const words: Iword[] = [
    {
        id: 0,
        speechPart: EspeechPart.Noun,
        word: "cat",
        translationUkr: "кіт",
        translationRus: "кот",
        difficulty: EdifficultyLevel.Easy,
        themes: ["animals", "pets"]
    },
    {
        id: 1, 
        speechPart: EspeechPart.Noun,
        word: "nut",
        translationUkr: "горіх",
        translationRus: "орех",
        difficulty: EdifficultyLevel.Easy,
        themes: ["food"]
    },
    {
        id: 2,
        speechPart: EspeechPart.Verb,
        word: "to create",
        translationUkr: "створювати",
        translationRus: "создавать",
        difficulty: EdifficultyLevel.Easy,
        themes: ["activities"]
    },
    {
        id: 3,
        speechPart: EspeechPart.Adjective,
        word: "confident",
        translationRus: "уверенный",
        translationUkr: "впевнений",
        difficulty: EdifficultyLevel.Medium,
        themes: ["character traits"]
    },
    {
        id: 4,
        speechPart: EspeechPart.Adjective,
        word: "picky",
        translationRus: "придирчивый",
        translationUkr: "вибагливий",
        difficulty: EdifficultyLevel.Hard,
        themes: ["character traits"]
    }
];

export const allPossibleNouns: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Noun);

export const allPossibleAdjectives: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Adjective);

export const allPossibleVerbs: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Verb);
