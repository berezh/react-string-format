# react-string-format

Formats string using string, number, and react components as paramaters

<a href="https://www.npmjs.com/package/react-string-format">
    <img src="https://nodei.co/npm/react-string-format.png?mini=true">
</a>

## Usage

### Installation:

```
npm install react-string-format
```

### Import

```js
import { format } from 'react-string-format';
```

## String

```jsx
format('first: {0}; second: {1}', 'hello', 'word');
// result:
'first: hello; second: word'
```
## Number

```jsx
format('first: {0}; second: {1}', 1, 2);
// result:
'first: 1; second: 2'
```

### React component

```jsx
format('hiperlink: {0}, span tag: {1}', <a href="#">Click Me</a>, <span>Bla-bla</span>);
// result:
<React.Fragment>
    <React.Fragment key={0}>hiperlink: </React.Fragment>
    <React.Fragment key={1}>
        <a href="#">Click Me</a>
    </React.Fragment>
    <React.Fragment key={2}>, span tag: </React.Fragment>
    <React.Fragment key={3}>
        <span>Bla-bla</span>
    </React.Fragment>
</React.Fragment>
```
