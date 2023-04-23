import { ArrowDown, ArrowUp } from '@phosphor-icons/react';
import React, { useEffect, useRef, useState } from 'react';
// import { Scrollbar } from 'react-scrollbars-custom';
import SimpleBar from 'simplebar-react';

import {
  Button, CDropdown, Container, ContentText, Input, Item, Label, List, TextError, TextHelp
} from './styles';

export interface Props {
  /**
   * Define o estilo do componente Dropdown, pode ser primary ou secondary.
   * Não definindo a propriedade className, é considerado a classe primary.
   */
  variant?: 'primary' | 'secondary';
  /**
   * Define o identificador do componente Dropdown.
   */
  id: string;
  /**
   * Define o name do componente Dropdown.
   */
  name: string;
  /**
   * Define o label do componente Dropdown.
   */
  label?: string;
  /**
   * Lista com os itens do Dropdown, com as propriedades `text`, `value`.
   */
  items: {
    text: string;
    value: string;
    disabled?: boolean;
  }[];
  /**
   * Define o valor inicial do componente Dropdown.
   */
  value?: string;
  /**
   * Desabilita o componente Dropdown.
   */
  disabled?: boolean;
  /**
   * Define a mensagem de ajuda do componente Dropdown.
   */
  textHelp?: string;
  /**
   * Define a mensagem de erro do componente Dropdown.
   */
  textError?: string;
  /**
   * Define uma referência.
   */
  inpuRef?: React.MutableRefObject<HTMLInputElement | null>;
  /**
   * Possibilita o override do styled-components
   */
  className?: string;
  /**
   * Função executada para capturar o valor selecionado no DropDown
   * @param {value} - Valor
   * @param {label} - Texto
   * @return {void}
   */
  onChange?: (value: string, label: string) => void;
  /**
   * Seta o valor selecionado no componente.
   * @param {value} - Valor
   * @return {void}
   */
  setValue?: (value: string) => void;
  /**
   * Define se será exibido o valor selecionado
   */
  showValueText?: boolean;
  /**
  * Define um placeholder
  */
  placeholder?: string;
}

const DropdownInputSearch: React.FC<Props> = ({
  label,
  id,
  name,
  variant = 'primary',
  items,
  value,
  disabled = false,
  textHelp,
  textError = "",
  className,
  inpuRef,
  onChange,
  setValue,
  placeholder,
  showValueText = true,
  ...props
}) => {
  let initialValue = items.find((item) => item.value === value);
  const [valueDropDown, setValueDropDown] = useState({
    text: initialValue?.value ? initialValue.text : '',
    value: initialValue?.value ? initialValue.value : '',
  });
  
  const [show, setShow] = useState(false);
  const [valueFilter, setValueFilter] = useState('');
  const divRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [listScroll, setListScroll] = useState(0);

  function showDrowpdown(e: MouseEvent) {
    if (divRef && divRef !== null) {
      const cur = divRef.current;
      if (cur && !cur.contains(e.target as Node)) {
        setShow(false);
        setValueFilter('');
        return;
      }
    }
  }

  useEffect(() => {
    initialValue = items.find((item) => item.value === value);
    setValueDropDown({
      text: initialValue?.text ? initialValue.text : '',
      value: initialValue?.value ? initialValue.value : '',
    });
  }, [value]);

  useEffect(() => {
    document.addEventListener('mousedown', showDrowpdown);
    return () => {
      document.removeEventListener('mousedown', showDrowpdown);
    };
  }, []);

  useEffect(() => {
    const element = document.querySelector('.active');
    if (element !== null && element instanceof HTMLElement) {
      setListScroll(element.offsetTop);
    } else {
      setListScroll(0);
    }
  }, [show]);

  useEffect(() => {
    setValue && setValue(valueDropDown.value);
  }, [valueDropDown]);

  return (
    <Container
      className={`${variant} ${className ?? ''}`}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        setShow(!show);
        setTimeout(() => inputRef.current?.focus(), 0);
      }}
      ref={divRef}
    >
      <Label
        id={id}
        name={name}
        htmlFor={id}
        fill={!!valueDropDown?.text && showValueText}
        disabled={disabled}
        error={textError}
      >
        {!show || disabled ? (
          <CDropdown disabled={disabled} {...props}>
            {showValueText ? valueDropDown.text : valueFilter}
          </CDropdown>
        ) : (
          <Input
            ref={inputRef}
            type='text'
            placeholder={placeholder}
            value={valueFilter}
            disabled={disabled}
            onChange={(e) => setValueFilter(e.currentTarget.value)}
          />
        )}
        <span>{label}</span>
        <Button
          type='button'
          disabled={disabled}
          onClick={(e) => {
            setValueFilter(valueFilter)
            setShow((prevState) => !prevState);
          }}
        >
          {show && !disabled ? <ArrowUp size={28} /> : <ArrowDown size={28} />}
        </Button>
        {show && !disabled && (
          <List className={variant}>
            <SimpleBar style={{ maxHeight: 300 }}>
              {valueDropDown.text && <Item
                key="selected"
                className="active"
                disabled={false}
              >
                <div>
                  {valueDropDown.text}
                </div>
              </Item>}
              {items &&
                items.filter((item) =>
                  item.text !== valueDropDown.text
                ).filter((item) => {
                  return item.text
                    .toLowerCase()
                    .includes(valueFilter.toLowerCase());
                })
                  .map((item, i) => (
                    <Item
                      key={i}
                      onClick={() => {
                        setValueDropDown({
                          value: item.value ?? '',
                          text: item.text ?? '',
                        });
                        onChange && onChange(item.value ?? '', item.text ?? '');
                      }}
                      className={
                        item.value && item.value === valueDropDown.value
                          ? 'active'
                          : ''
                      }
                      disabled={!!item.disabled}
                    >
                      <div>
                        {item.text}
                      </div>
                    </Item>
                  ))}
            </SimpleBar>
          </List>
        )}
      </Label>
      <ContentText>
        {textHelp && <TextHelp>{textHelp}</TextHelp>}
        {textError && <TextError>{textError}</TextError>}
      </ContentText>
    </Container>
  );
};

export { DropdownInputSearch };
