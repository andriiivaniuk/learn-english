import { WordInfoStyled } from "./WordInfoStyled";

import withLoader from "../../hocs/withLoader/withLoader";

function WordInfo({wordData, wordObj}) {
    return ( 
        <WordInfoStyled>
            {wordData.phonetic}
            {wordData.meanings[0].definitions[0].definition}
        </WordInfoStyled>
    );
}

export default withLoader(WordInfo);