# Getting Started with Blasko Cool Buttons

This project is dummy project. I wanted to learn through it how to create react package. 

# Installation and usage

The easiest way to use my dummy package is to install it from npm and paste code into your React app.

```
npm i blasko-cool-buttons
```

```
import { CoolButton } from 'blasko-cool-buttons';
...
const buttons = [
    { 
        text: "First button", 
        border: true, 
        radius: true, 
        width: 100, 
        height: 30
    }
]
...
<CoolButton buttons={buttons} />
```

# Testing with Storybook

```
npm run storybook
```

# Build package

```
npm run build-lib
```
