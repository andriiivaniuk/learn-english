import {NotFoundStyled} from "./NotFoundStyled";
import {useSelector} from "react-redux";
import {NotFoundTexts} from "./NotFoundTexts";

function NotFound(){
    const lang = useSelector(state => state.appInfo.userLanguage);

    return (
        <NotFoundStyled>
            {NotFoundTexts.NotFound[lang]}
        </NotFoundStyled>
    )
}

export default NotFound;