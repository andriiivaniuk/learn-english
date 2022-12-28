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