import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 0;
  margin: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
`;

export const DropdownListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

export const DropdownInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
`;