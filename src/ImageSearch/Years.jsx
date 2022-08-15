import React from 'react';
const YearsSelect = ({ name, placeholder, label, ForwardedRef }) => {
  const year = new Date().getFullYear();
  const years = Array.from(
    new Array(100),
    (val, index) => year - index
  );
  return (
    <div data-testid='years' className={name}>
      <p className='text-left text-white font-bold mt-4 mb-2'>
        {label}
      </p>
      <select
        name={name}
        ref={ForwardedRef}
        className='w-full p-2 border-b-2 rounded'
      >
        <option value=''>{placeholder}</option>
        {years.map((year, index) => {
          return (
            <option key={`year${index}`} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default YearsSelect;
