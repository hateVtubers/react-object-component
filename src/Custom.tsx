import React from 'react';

export const Custom = ({
  value,
  comma,
  textValue,
}: {
  value: string;
  comma?: string;
  textValue?: string;
}) => {
  return (
    <>
      <span className={textValue}>{`${value}`}</span>
      <code className={comma}>,</code>
    </>
  );
};
