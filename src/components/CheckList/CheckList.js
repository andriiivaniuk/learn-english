import { useEffect, useState } from "react";
import { 
    CheckListStyled,
    CheckListTitle,
    CheckListList,
    CheckListItem,
    CheckListBox,
    Check,
    OptionName
} from "./CheckListStyled";

function CheckList({title, options, alreadySelected = false}) {

    const [selectedOptions, setSelectedOptions] = useState([]); 
    
    useEffect(() => {
        if (alreadySelected) {
            setSelectedOptions([...options]);
        }
    }, [])

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