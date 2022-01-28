import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
`;
export const Container = styled.div`
  background-color: var(--secondary-color);
  height: 50px;
  width: 260px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.isOpen ? "#6670d7" : "transparent")};
`;
export const Label = styled.div``;

export const CaratContainer = styled.img`
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.3s ease-in-out;
  height: 30px;
`;
export const SelectedLabel = styled.div`
  color: var(--secondary-color);
`;

export const DropdownItem = styled.li`
  width: 260px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: white;
  box-sizing: border-box;
  padding-left: 15px;
  cursor: pointer;
  border-bottom: 1px solid
    ${(props) => (props.last ? "transparent" : "rgba(255, 255, 255, 0.1)")};
  &:hover {
    color: var(--font-dark-color);
    background-color: var(--font-light-color);
  }
`;

export const DropdownIcon = styled.img`
  height: 20px;
  margin-right: 10px;
`;

export const ListWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const List = styled.ul`
  position: relative;
  width: 100%;
  list-style: none;
  color: var(--border-color);
  padding: 10px 0 0 0;
  border-top: none;
  max-height: 140px;
  overflow-y: auto;
  background-color: var(--border-color);
  border-radius: 10px;
`;
