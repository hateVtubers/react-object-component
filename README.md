# react-object-component

An react component that renders objects or arrays in browser as jsons

## Before to use you need tailwindcss installed

this library have dependency from tailwindcss

- [install tailwind](https://tailwindcss.com/docs/installation)

## install

```bash
npm install react-object-component@latest
```

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
  textKey?: string; // className of text keys
  textValue?: string; // className of text values, array is `textValue`
  doubleQuotes?: string; // className of double quotes
  brackets?: string; // className of brackets, {} and []
  comma?: string; // className of comma, ,
  colon?: string; // className of colon, :
  ident?: string; // className of ident, space
};
```

# Example Config

```tsx
const app = () => {
  return (
    <div>
      <JSON
        json={test}
        classNames={{
          brackets: 'text-xl',
          comma: 'text-red-500',
          doubleQuotes: 'text-green-500',
          textValue: 'text-sky-500', // object value and array is value
          textKey: 'text-orange-500', // object key
          colon: 'mr-1 text-yellow-500',
          ident: 'pl-3', // ident space
        }}
      />
    </div>
  );
};
```
