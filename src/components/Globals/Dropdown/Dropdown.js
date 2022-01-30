import React, { useState } from "react";
import {
  Wrapper,
  Container,
  CaratContainer,
  SelectedLabel,
  DropdownItem,
  Label,
  ListWrapper,
  List,
} from "./Dropdown.style";
import icon from "../../../assets/icon.png";
import { useNavigate } from "react-router-dom";

const Item = ({ item, onClickItem }) => {
  const handleClick = () => onClickItem(item);
  return <DropdownItem onClick={handleClick}>{item.label}</DropdownItem>;
};
const ListC = ({ items, onClickItem }) => {
  const result = items ? (
    <List>
      {items.map((item, index) => (
        <Item item={item} onClickItem={onClickItem} key={index} />
      ))}
    </List>
  ) : (
    <List />
  );
  return result;
};
function DropdownBox({ options, selected, label, onChange, onClick, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCloseButton = () => {
    setIsOpen(!isOpen);
  };
  const handleClickItem = (item) => {
    setIsOpen(false);
    onChange(item);
    console.log(item.label);
  };
  return (
    <Wrapper {...rest}>
      <Container onClick={handleOpenCloseButton}>
        <CaratContainer isOpen={isOpen} src={icon} />
        <Label>{label}</Label>
        {/* <SelectedLabel>{label}</SelectedLabel> */}
      </Container>
      {isOpen && (
        <ListWrapper>
          <ListC items={options} onClickItem={handleClickItem}>
            List
          </ListC>
        </ListWrapper>
      )}
    </Wrapper>
  );
}

export default DropdownBox;
