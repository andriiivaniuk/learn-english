import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { 
    PictureStyled,
    Loader,
    LoaderBack
} from "./PictureStyled";

import { searchImages } from "../../ducks/appInfo";

import { scrambleArr } from "../../utils/utils.ts";


function Picture({word}) {

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const currentPictureData = useSelector(state => state.appInfo.currentPictureData);
    const [picPresent, setPicPresent] = useState(false);
    const [pic, setPic] = useState(null);

    useEffect(() => {
        dispatch(searchImages(word));
        setIsLoading(true);
    }, []);
    
    useEffect(() => {
        if (currentPictureData === null) {
            setPicPresent(false);
        } else {
            setPicPresent(true);
            setPic(scrambleArr(currentPictureData.value)[0].url)
        }
    }, [currentPictureData]);

    return ( 
        picPresent ? <PictureStyled src = {pic}/> : <LoaderBack><Loader/></LoaderBack>
    )
}

export default Picture;