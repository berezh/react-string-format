# react-string-format

TypeScript maybe monad for reaching child fields inside complicated objects.

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

### Format string or number

```jsx
format('number: {0}, text: {1}', 1, 'hello!');
// result:
('number: 1, text: hello!');
```

### Format react component

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
</React.Fragment>;
```
