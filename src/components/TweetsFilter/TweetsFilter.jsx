import PropTypes from 'prop-types';
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { filterVariants } from "utils/variables.js";
import { Container, StyledButton, StyledItem, StyledList } from "./TweetsFilter.styled";

export const TweetsFilter = ({filterUsers}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || "filter";
    const [choosedFilter, setChoosedFilter] = useState(query);

    const handleFilterOptionClick = (variant) => {
        setIsFilterOpen(false);
        setChoosedFilter(variant);
        filterUsers(variant);
    };

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
                    return (<React.Fragment key={variant}>
                        {(choosedFilter !== variant) && <StyledItem 
                            
                            onClick={()=>handleFilterOptionClick(variant)}
                        >
                                {variant}
                        </StyledItem>}
                    </React.Fragment>);
                })}
            </StyledList>}
        </Container>
    )
};

TweetsFilter.propTypes = {
    filterUsers: PropTypes.func
}