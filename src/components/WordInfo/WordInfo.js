import { WordInfoStyled } from "./WordInfoStyled";

import withLoader from "../../hocs/withLoader/withLoader";

function WordInfo({wordData, wordObj}) {
    return ( 
        <WordInfoStyled>
            {/* {wordData.phonetic} */}
            {formDefinition(wordData, wordObj)}
        </WordInfoStyled>
    );
}

function formDefinition(wordData, wordObj) {
    while (true) {
        const meanings = wordData.meanings;
        const meaning = meanings.find((item) =>
            item.partOfSpeech === wordObj.speechPart.toLowerCase()
        );

        return meaning.definitions[0].definition;
    }
    
}

export default withLoader(WordInfo);