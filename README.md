# react-object-component
An react component that renders objects or arrays in browser as jsons

## install

```bash
npm install react-object-component@latest
```

## Before to use you need tailwindcss installing
this library have dependency from tailwindcss
- [install tailwind](https://tailwindcss.com/docs/installation)

## Usage

It working with `object`, `array`, `null`, `undefined` and `boolean`

```jsx
import { JSON } from 'react-object-component';

export const App = () => {
  const test = {
    string: 'string',
    number: 1,
    boolean: true,
    booleanTwo: false,
    array: [1, 2, 3],
    object: {
      string: 'string',
      number: 1,
      boolean: true,
      booleanTwo: false,
      array: [1, 2, 3],
    },
    null: null,
    undefined: undefined,
  };

  return (
    <div>
      <JSON json={test} />
      <JSON
        json={[test, test]}
        config={{ {/* this config is optional */}
          className: {
            brackets: 'text-teal-300',
            comma: 'text-red-500',
            doubleQuotes: 'text-green-500',
            textValue: 'text-sky-500',
            textKey: 'text-orange-500',
            colon: 'text-yellow-500',
          },
        }}
      />
    </div>
  );
};
```

# Config options

This object is className of JSON elements, we recomment you to use with [tailwindcss](https://tailwindcss.com/)

```ts
export type Config = {
  className?: {
    textKey?: string; // className of text keys
    textValue?: string; // className of text values, array is `textValue`
    doubleQuotes?: string; // className of double quotes
    brackets?: string; // className of brackets, {} and []
    comma?: string; // className of comma, ,
    colon?: string; // className of colon, :
  };
};
```
