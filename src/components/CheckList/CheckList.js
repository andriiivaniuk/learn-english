import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { setModalSettings } from "../../ducks/appInfo";

import { 
    CheckListStyled,
    CheckListTitle,
    CheckListList,
    CheckListItem,
    CheckListBox,
    Check,
    OptionName
} from "./CheckListStyled";

function CheckList({title, options, storeSelector, alreadySelected = false}) {

    const [selectedOptions, setSelectedOptions] = useState([]); 
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (alreadySelected) {
            setSelectedOptions([...options]);
        }
    }, []);

    useEffect(() => {
        dispatch(setModalSettings({setting: storeSelector, value: selectedOptions}));
        
    }, [selectedOptions]);

    const handleOptionClick = (option) => {
        let arr = selectedOptions;
        if (!selectedOptions.includes(option)) {
            arr.push(option);
            setSelectedOptions([...arr]);
        } else {
            arr = arr.filter((presentOption) => presentOption !== option);
            setSelectedOptions([...arr]);
        }
    }

    return (
        <CheckListStyled>
            <CheckListTitle>
                {title}
            </CheckListTitle>
            <CheckListList>
                {options.map((option) => 
                    <CheckListItem key = {option}
                        onClick ={() => handleOptionClick(option)}>
                            <CheckListBox>
                                {
                                    selectedOptions.includes(option) && <Check/>
                                }
                            </CheckListBox>
                            <OptionName>
                                {option}
                            </OptionName>
                    </CheckListItem>)}
            </CheckListList>
        </CheckListStyled>
    )
}

export default CheckList;