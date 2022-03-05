import React from 'react';

type Json = object | object[] | string[] | boolean[] | null[];
export type Config = {
  textKey?: string;
  textValue?: string;
  doubleQuotes?: string;
  brackets?: string;
  comma?: string;
  colon?: string;
  indent?: string;
};

const Custom = ({
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

const String = ({
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

type ObjectsProps = {
  object: object;
  getType: (type: Json) => 'string' | 'array' | 'custom' | 'object';
  classNames?: Config;
};

const Objects = ({ object, getType, classNames }: ObjectsProps) => {
  return (
    <>
      <code className={classNames?.brackets}>{'{'}</code>
      <ul className={classNames?.indent}>
        {Object.entries(object).map(([key, value]) => (
          <li key={key}>
            <span className={classNames?.doubleQuotes}>"</span>
            <span className={classNames?.textKey}>{key}</span>
            <span className={classNames?.doubleQuotes}>"</span>
            <code className={classNames?.colon}>:</code>
            {getType(value) === 'string' && (
              <String
                value={value}
                comma={classNames?.comma}
                doubleQuotes={classNames?.doubleQuotes}
                textValue={classNames?.textValue}
              />
            )}
            {getType(value) === 'custom' && (
              <Custom
                value={value}
                comma={classNames?.comma}
                textValue={classNames?.textValue}
              />
            )}
            {(getType(value) === 'array' || getType(value) === 'object') && (
              <JSON json={value} classNames={classNames} />
            )}
          </li>
        ))}
      </ul>
      <code className={classNames?.brackets}>
        {'}'}
        <code className={classNames?.comma}>{','}</code>
      </code>
    </>
  );
};

export const JSON = ({
  json,
  classNames,
}: {
  json: any | any[];
  classNames?: Config;
}) => {
  const getType = (type: Json) => {
    switch (typeof type) {
      case 'string':
        return 'string';
      case 'object':
        if (Array.isArray(type)) return 'array';
        if (!type) return 'custom';
        return 'object';
      case 'boolean':
        return 'custom';
      case 'number':
        return 'custom';
      case 'undefined':
        return 'custom';
    }
  };

  return (
    <>
      {Array.isArray(json) ? (
        <>
          <code className={classNames?.brackets}>{'['}</code>
          <ul className={classNames?.indent}>
            {json.map((item, i) => (
              <li key={i}>
                {getType(item) === 'string' && (
                  <String
                    value={item}
                    comma={classNames?.comma}
                    doubleQuotes={classNames?.doubleQuotes}
                    textValue={classNames?.textValue}
                  />
                )}
                {getType(item) === 'custom' && (
                  <Custom
                    value={item}
                    comma={classNames?.comma}
                    textValue={classNames?.textValue}
                  />
                )}
                {getType(item) === 'array' && (
                  <JSON json={item} classNames={classNames} />
                )}
                {getType(item) === 'object' && (
                  <Objects
                    object={item}
                    getType={getType}
                    classNames={classNames}
                  />
                )}
              </li>
            ))}
          </ul>
          <code className={classNames?.brackets}>
            {']'}
            <code className={classNames?.comma}>{','}</code>
          </code>
        </>
      ) : (
        <>
          <Objects object={json} getType={getType} classNames={classNames} />
        </>
      )}
    </>
  );
};
