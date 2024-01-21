import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loader = ({ loading }) => (
  <div className="flex items-center justify-center w-full h-full">
    <BeatLoader color="#36D7B7" loading={loading} size={15} />
  </div>
);

const convertToRoman = (num) => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  return romanNumerals[num - 1] || num.toString();
};

export {Loader, convertToRoman};
