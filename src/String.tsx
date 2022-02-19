import React from "react";

export const String = ({
  value,
  doubleQuotes,
  comma,
  textValue,
}: {
  value: string;
  doubleQuotes?: string;
  comma?: string;
  textValue?: string;
}) => {
  return (
    <>
      <span className={doubleQuotes}>"</span>
      <span className={textValue}>{value}</span>
      <span className={doubleQuotes}>"</span>
      <code className={comma}>,</code>
    </>
  );
};
