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
    },
    {
        id: 5,
        speechPart: EspeechPart.Verb,
        word: "to resolve",
        translationUkr: "розв'язувати",
        translationRus: "решать",
        difficulty: EdifficultyLevel.Medium,
        themes: ["activities"]
    },
    {
        id: 6,
        speechPart: EspeechPart.Noun,
        word: "closure",
        translationUkr: "замикання",
        translationRus: "замыкание",
        difficulty: EdifficultyLevel.Medium,
        themes: ["tech", "IT"]
    },
    {
        id: 7,
        speechPart: EspeechPart.Noun,
        word: "meeting",
        translationUkr: "зустріч",
        translationRus: "встреча",
        difficulty: EdifficultyLevel.Easy,
        themes: ["tech", "IT"]
    },
    {
        id: 8,
        speechPart: EspeechPart.Verb,
        word: "to crave",
        translationUkr: "жадати",
        translationRus: "вожделеть",
        difficulty: EdifficultyLevel.Hard,
        themes: ["emotions"]
    },
    {
        id: 9,
        speechPart: EspeechPart.Verb,
        word: "to demolish",
        translationUkr: "руйнувати",
        translationRus: "сносить",
        difficulty: EdifficultyLevel.Medium,
        themes: ["activities", "industry"]
    },
    {
        id: 10,
        speechPart: EspeechPart.Adjective,
        word: "weird",
        translationUkr: "дивний",
        translationRus: "странный",
        difficulty: EdifficultyLevel.Medium,
        themes: ["character traits"]
    },
    {
        id: 11,
        speechPart: EspeechPart.Adjective,
        word: "playful",
        translationUkr: "грайливий",
        translationRus: "игривый",
        difficulty: EdifficultyLevel.Medium,
        themes: ["character traits"]
    },
    {
        id: 12,
        speechPart: EspeechPart.Noun,
        word: "collar",
        translationUkr: "ошийник",
        translationRus: "ошейник",
        difficulty: EdifficultyLevel.Medium,
        themes: ["pets"]
    },
    {
        id: 13,
        speechPart: EspeechPart.Adjective,
        word: "inevitable",
        translationUkr: "невідворотній",
        translationRus: "неотвратимый",
        difficulty: EdifficultyLevel.Hard,
        themes: ["other"]
    },


];

export const allPossibleNouns: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Noun);

export const allPossibleAdjectives: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Adjective);

export const allPossibleVerbs: Iword[] = words.filter(
    word => word.speechPart === EspeechPart.Verb);

let wordThemes = new Set();
words.forEach((word) => {
    word.themes.forEach((theme) => {
        wordThemes.add(theme);
    });
})

export const allWordThemes: string[] = [...wordThemes] as string[];
