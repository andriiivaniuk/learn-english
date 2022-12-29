import { 
    WordInfoStyled,
    PartOfSpeech
} from "./WordInfoStyled";

import { WordInfoTexts } from "./WordInfoTexts";

import withLoader from "../../hocs/withLoader/withLoader";
import { useSelector } from "react-redux";

function WordInfo({wordData, wordObj}) {
    const lang = useSelector(state => state.appInfo.userLanguage);

    return ( 
        <WordInfoStyled>
            {/* {wordData.phonetic} */}
            {formDefinition(wordData, wordObj)}
            <PartOfSpeech>
                {WordInfoTexts[wordObj.speechPart][lang]}
            </PartOfSpeech>
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