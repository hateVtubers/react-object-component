import React from 'react';
import { Custom } from 'src/Custom';
import { Objects } from 'src/Objects';
import { String } from 'src/String';

export type Json = object | object[] | string[] | boolean[] | null[];
export type Config = {
  className?: {
    textKey?: string;
    textValue?: string;
    doubleQuotes?: string;
    brackets?: string;
    comma?: string;
    colon?: string;
  };
};

type Props = {
  json: any | any[];
  config?: Config;
};

export const JSON = ({ json, config }: Props) => {
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
          <code className={config?.className?.brackets}>{'['}</code>
          <ul className='pl-3'>
            {json.map((item, i) => (
              <li key={i}>
                {getType(item) === 'string' && (
                  <String
                    value={item}
                    comma={config?.className?.comma}
                    doubleQuotes={config?.className?.doubleQuotes}
                    textValue={config?.className?.textValue}
                  />
                )}
                {getType(item) === 'custom' && (
                  <Custom
                    value={item}
                    comma={config?.className?.comma}
                    textValue={config?.className?.textValue}
                  />
                )}
                {getType(item) === 'array' && (
                  <JSON json={item} config={config} />
                )}
                {getType(item) === 'object' && (
                  <Objects object={item} getType={getType} config={config} />
                )}
              </li>
            ))}
          </ul>
          <code className={config?.className?.brackets}>
            {']'}
            <code className={config?.className?.comma}>{','}</code>
          </code>
        </>
      ) : (
        <>
          <Objects object={json} getType={getType} config={config} />
        </>
      )}
    </>
  );
};
