import React, { useRef, useState } from 'react';

import {
  DropdownContainer,
  DropdownHeader, DropdownInput, DropdownList,
  DropdownListItem
} from "./styles";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelected: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedValue, setSelectedValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelected(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = options.filter(option =>
      option.label.toLowerCase().includes(inputValue)
    );
    setFilteredOptions(filtered);
    setSelectedValue('');
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={handleOpen}>
        <span>{selectedValue || 'Selecione uma opção'}</span>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          <DropdownListItem>
            <DropdownInput
              type="text"
              placeholder="Pesquisar..."
              onChange={handleInputChange}
              ref={inputRef}
            />
          </DropdownListItem>
          {filteredOptions.map(option => (
            <DropdownListItem
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;