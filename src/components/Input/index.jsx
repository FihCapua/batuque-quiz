import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BaseInput = styled.input`
  margin: 0;
  width: 100%;
  display: block;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.third};
  padding: 4px 0;
  font-size: 1rem;
  font-family: "Work Sans";
  background: none;
  outline: none;
  transition: all 0.25s ease-in-out;

  &:invalid {
    border-color: ${({ theme }) => theme.colors.error};
  }
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const InputWrapper = styled.div`
  margin: 0 0 12px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputLabel = styled.label`
  font-size: 0.85rem;
  margin: 0 0 4px;
  font-weight: 300;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.third};

  &:after {
    content: ':';
  }
`;

const Input = ({
  label,
  type,
  placeholder,
  onChange,
  value,
}) => (
  <InputWrapper>
    {label.length > 0 && <InputLabel>{label}</InputLabel>}
    <BaseInput type={type} value={value} onChange={onChange} placeholder={placeholder} />
  </InputWrapper>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: '',
  placeholder: null,
  type: 'text',
};

export default Input;
