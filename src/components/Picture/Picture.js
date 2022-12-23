import { useState } from "react";
import { 
    PictureStyled 
} from "./PictureStyled";

function Picture(word) {

    const [isLoading, setIsLoading] = useState(false);

    return ( 
        <PictureStyled>
            pic
        </PictureStyled>
    )
}

export default Picture;