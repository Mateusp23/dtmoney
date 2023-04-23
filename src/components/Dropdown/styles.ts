import styled, { css } from 'styled-components';

interface LabelProps {
  id: string;
  name: string;
  htmlFor: string;
  fill: boolean;
  disabled: boolean;
  error?: string;
}

interface DisabledProps {
  disabled: boolean;
}

export const Container = styled.div<DisabledProps>`
  position: relative;

  &.secondary {
    label {
      background-color: ${({ disabled }) =>
    disabled
      ? 'var(--on-middle-gray-50) !important'
      : 'var(--on-white) !important'};
      border-color: ${({ disabled }) =>
    disabled
      ? 'var(--on-middle-gray-50) !important'
      : 'var(--on-white) !important'};
    }
  }
`;

export const Label = styled.label<LabelProps>`
  min-width: 25.2rem;
  position: relative;
  min-height: 6.2rem;
  display: flex;
  border: 1px solid ${({ error }) =>
    error ? css`var(--on-red)` : css`var(--on-graphite-gray)`};
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  border-radius: 2px;
  align-items: flex-end;
  cursor: pointer;
  ${({ disabled }) => disabled && 'border-color: transparent'};
  ${({ disabled }) => disabled && 'cursor: not-allowed'};
  ${({ disabled, fill }) =>
    disabled && fill && 'background-color: var(--on-middle-gray-50)'};

  span {
    font-family: var(--se-font-arial);
    user-select: none;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    line-height: 2rem;
    transition: top 0.2s, font-size 0.2s, color 0.2s;
    top: ${({ fill }) => fill && '1.6rem'} !important;
    font-size: ${({ fill }) => fill && '1.2rem'} !important;
    line-height: ${({ fill }) => fill && '1.4rem'} !important;
    padding-right: 0rem;
    color: ${({ disabled }) =>
    disabled ? `var(--on-middle-gray)` : `var(--on-graphite-gray)`};
    ${({ disabled }) => disabled && 'cursor: not-allowed'};
  }
`;

export const Input = styled.input<{ disabled: boolean; ref: any }>`
  height: fit-content;
  border: none;
  font-family: var(--se-font-semi);
  font-size: 1.4rem;
  line-height: 2rem;
  background: transparent;
  font-weight: 600;
  color: ${({ disabled }) =>
  disabled ? 'var(--on-middle-gray)' : '#000'};
  ${({ disabled }) => disabled && 'cursor: not-allowed'};

  ::placeholder,
  :-ms-input-placeholder,
  ::-webkit-input-placeholder {
    color: gray !important;
    font-weight: 700 !important;
  }

  &:focus + span {
    top: 1.6rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  &:not(:focus) + span {
    top: 50%;
  }
`;

export const CDropdown = styled.div<DisabledProps>`
  height: fit-content;
  border: none;
  font-family: var(--se-font-semi);
  font-size: 1.4rem;
  line-height: 2rem;
  background: transparent;
  font-weight: 600;
  color: ${({ disabled }) =>
    disabled ? 'var(--on-middle-gray)' : '#000'};
  ${({ disabled }) => disabled && 'cursor: not-allowed'};

  &:focus + span {
    top: 1.6rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  &:not(:focus) + span {
    top: 50%;
  }
`;

export const Button = styled.button<DisabledProps>`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translate(0, -50%);
  border: none;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  svg {
    path {
      stroke: ${({ disabled }) =>
    disabled ? 'var(--on-middle-gray)' : '#000'};
    }
  }
`;

export const List = styled.div`
  width: calc(100% + 2px);
  padding: 0;
  position: absolute;
  z-index: 4;
  top: 5.8rem;
  right: 0;
  left: -1px;
  border: none;
  border: 1px solid gray;
  background-color: #fff;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;

  &.secondary {
    border-color: #fff;
  }

  .simplebar-scrollbar {
    &:before {
      width: 0.2rem;
      background-color: gray;
      border-radius: 0.1rem;
      left: 0.5rem;
    }
  }
`;

export const Item = styled.button<DisabledProps>`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 0 0.8rem 1.5rem;
  font-family: var(--se-font-semi);
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -2%;
  font-weight: 400;
  text-align: left;
  background-color: transparent;
  border-color: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) =>
  disabled ? '#000' : '#000'};

  &.active {
    font-weight: 700;
  }

  &:hover {
    background-color: orange;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 1rem;

      svg {
        path {
          stroke: gray;
        }
      }
    }
  }
`;

export const ContentText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.6rem;
`;

export const TextHelp = styled.p`
  flex: 1;
  font-family: var(--se-font-arial);
  font-size: 1.2rem;
  color: gray;
  font-weight: 400;
  line-height: 1.4rem;
  text-align: left;
`;

export const TextError = styled.p`
  flex: 1;
  font-family: var(--se-font-arial);
  font-size: 1.2rem;
  color: red;
  font-weight: 400;
  line-height: 1.4rem;
  text-align: right;
`;
