import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Logo = ({ className }) => (
  <svg className={className} id="Filled" height="80" viewBox="0 0 512 512" width="75" xmlns="http://www.w3.org/2000/svg">
    <path d="m40 248h432v208h-432z" fill="#e74444" />
    <path d="m24 440h464v48h-464z" fill="#3a98e4" />
    <path d="m24 216h464v48h-464z" fill="#3a98e4" />
    <path d="m40 440 72-176 72 176 72-176 72 176 72-176 72 176z" fill="#ce3536" />
    <path d="m88 216h48v48h-48z" fill="#e8edf1" />
    <path d="m88 440h48v48h-48z" fill="#e8edf1" />
    <path d="m96 264h32v176h-32z" fill="#d9dbdd" />
    <path d="m376 216h48v48h-48z" fill="#e8edf1" />
    <path d="m376 440h48v48h-48z" fill="#e8edf1" />
    <path d="m384 264h32v176h-32z" fill="#d9dbdd" />
    <path d="m40 136h320a0 0 0 0 1 0 0v32a0 0 0 0 1 0 0h-320a16 16 0 0 1 -16-16 16 16 0 0 1 16-16z" fill="#d9dbdd" />
    <circle cx="360" cy="152" fill="#e8edf1" r="32" />
    <path d="m168 40h320a0 0 0 0 1 0 0v32a0 0 0 0 1 0 0h-320a16 16 0 0 1 -16-16 16 16 0 0 1 16-16z" fill="#d9dbdd" transform="matrix(-1 0 0 -1 640 112)" />
    <circle cx="152" cy="56" fill="#e8edf1" r="32" />
    <path d="m488 208h-464a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8h8v160h-8a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-48a8 8 0 0 0 -8-8h-8v-160h8a8 8 0 0 0 8-8v-48a8 8 0 0 0 -8-8zm-148.084 224 36.084-88.2v88.2zm-95.832-160-60.084 146.871-48-117.332v-29.539zm-108.084 160v-88.2l36.084 88.2zm120-146.871 60.084 146.871h-120.168zm120 16.41-48 117.332-60.084-146.871h108.084zm-232-45.539v-32h224v32zm-16 0h-32v-32h32zm-8 16v160h-16v-160zm-32 160h-36.084l36.084-88.2zm40 16v32h-32v-32zm16 0h224v32h-224zm240 0h32v32h-32zm40-16v-88.2l36.084 88.2zm-16 0h-16v-160h16zm-24-176v-32h32v32zm-352-32h48v32h-48zm56 48v29.539l-40 97.777v-127.316zm-56 176h48v32h-48zm448 32h-48v-32h48zm-16-80.684-40-97.777v-29.539h40zm16-143.316h-48v-32h48z" />
    <path d="m40 176h288.022a40 40 0 1 0 0-48h-288.022a24 24 0 0 0 0 48zm320-48a24 24 0 1 1 -24 24 24.028 24.028 0 0 1 24-24zm-320 16h280.805a40.154 40.154 0 0 0 0 16h-280.805a8 8 0 0 1 0-16z" />
    <path d="m152 96a39.962 39.962 0 0 0 31.978-16h288.022a24 24 0 0 0 0-48h-288.022a39.993 39.993 0 1 0 -31.978 64zm320-48a8 8 0 0 1 0 16h-280.8a40.154 40.154 0 0 0 0-16zm-320-16a24 24 0 1 1 -24 24 24.028 24.028 0 0 1 24-24z" />
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const BoxLogo = styled(Logo)`
  margin: 5px 215px;
  padding: 10px;
  display: block;
`;

const QuizLogo = () => (
  <BoxLogo />
);

export default QuizLogo;
