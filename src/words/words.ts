export interface Iword {
    id: number,
    speechPart: EspeechPart,
    translationUkr: string,
    translationRus: string
}

export enum EspeechPart {
    Noun = 1,
    Adjective = 2,
    Verb = 3
}