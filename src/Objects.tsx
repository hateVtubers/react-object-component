import React from 'react';
import { Custom } from 'src/Custom';
import { JSON, Json, Config } from 'src/index';
import { String } from 'src/String';

type Props = {
  object: object;
  getType: (type: Json) => 'string' | 'array' | 'custom' | 'object';
  config?: Config;
};

export const Objects = ({ object, getType, config }: Props) => {
  return (
    <>
      <code className={config?.className?.brackets}>{'{'}</code>
      <ul className='pl-3'>
        {Object.entries(object).map(([key, value]) => (
          <li key={key}>
            <span className={config?.className?.doubleQuotes}>"</span>
            <span className={config?.className?.textKey}>{key}</span>
            <span className={config?.className?.doubleQuotes}>"</span>
            <code className={`mr-1 ${config?.className?.colon}`}>:</code>
            {getType(value) === 'string' && (
              <String
                value={value}
                comma={config?.className?.comma}
                doubleQuotes={config?.className?.doubleQuotes}
                textValue={config?.className?.textValue}
              />
            )}
            {getType(value) === 'custom' && (
              <Custom
                value={value}
                comma={config?.className?.comma}
                textValue={config?.className?.textValue}
              />
            )}
            {(getType(value) === 'array' || getType(value) === 'object') && (
              <JSON json={value} config={config} />
            )}
          </li>
        ))}
      </ul>
      <code className={config?.className?.brackets}>
        {'}'}
        <code className={config?.className?.comma}>{','}</code>
      </code>
    </>
  );
};
