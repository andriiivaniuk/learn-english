import {
    NotFoundStyled,
    ToMainButton
} from "./NotFoundStyled";

import {useSelector} from "react-redux";

import {NotFoundTexts} from "./NotFoundTexts";

import {useNavigate} from "react-router-dom";

function NotFound(){
    const lang = useSelector(state => state.appInfo.userLanguage);
    const navigate = useNavigate();

    return (
        <NotFoundStyled>
            {NotFoundTexts.NotFound[lang]}
            <ToMainButton onClick={() => navigate("/")}>
                {NotFoundTexts.ToMain[lang]}
            </ToMainButton>
        </NotFoundStyled>
    )
}

export default NotFound;