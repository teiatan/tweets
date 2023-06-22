import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Container, StyledButton, StyledItem, StyledList } from "./TweetsFilter.styled";


export const TweetsFilter = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [choosedFilter, setChoosedFilter] = useState('filter')

    const filterVariants = ['show all', 'follow', 'followings']
    return (
        <Container>
            <StyledButton 
                isFilterOpen={isFilterOpen}
                onClick={()=>setIsFilterOpen(!isFilterOpen)}
            >
                {choosedFilter}
                {isFilterOpen ? 
                    <MdOutlineKeyboardArrowUp color='#EBD8FF' size='20px'/> :
                    <MdOutlineKeyboardArrowDown color='#EBD8FF'size='20px'/>
                }
            </StyledButton>
            {isFilterOpen && <StyledList>
                {filterVariants.map(variant => {
                    return (
                        <StyledItem key={variant}>{variant}</StyledItem>
                    )
                })}
            </StyledList>}
        </Container>
    )
}