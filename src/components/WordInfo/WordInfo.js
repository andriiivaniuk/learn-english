import { useSelector, useDispatch } from "react-redux";

import { setCurrentDefinition } from "../../ducks/appInfo";

import { 
    WordInfoStyled,
    PartOfSpeech
} from "./WordInfoStyled";

import { WordInfoTexts } from "./WordInfoTexts";

import withLoader from "../../hocs/withLoader/withLoader";

function WordInfo({wordData, wordObj}) {
    const lang = useSelector(state => state.appInfo.userLanguage);
    const dispatch = useDispatch();

    return ( 
        <WordInfoStyled>
            {/* {wordData.phonetic} */}
            {formDefinition(wordData, wordObj, dispatch)}
            <PartOfSpeech>
                {WordInfoTexts[wordObj.speechPart][lang]}
            </PartOfSpeech>
        </WordInfoStyled>
    );
}

function formDefinition(wordData, wordObj, dispatchFunc) {
    while (true) {
        const meanings = wordData.meanings;
        const meaning = meanings.find((item) =>
            item.partOfSpeech === wordObj.speechPart.toLowerCase()
        );

        setTimeout(() => {
            dispatchFunc(setCurrentDefinition(meaning.definitions[0].definition));
        }, 0)
        return meaning.definitions[0].definition;
    }
    
}

export default withLoader(WordInfo);