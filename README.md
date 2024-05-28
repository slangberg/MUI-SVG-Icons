# MUI-SVG-Icons

**Description**:  This project demonstrates how to use a template to create icons for MUI 5 using the included `createSvgIcon` util from the '@mui/material/utils' library and the SVGR cli.

This repo is set to convert any svgs included in `./svgs` folder into the `<SvgIcon/>` component included in the MUI library. These generated icons will use the same API as the native component

## Technology stack
  - React
  - MUI v5
  - Vite
  - @svgr/cli

## Installation

To install the this project follow the standard yarn/node installation

```shell
yarn install
npm install
```


## Usage

**How To Generate Icons From SVGS**: 

Place SVG for intended icons in the `./svgs` folder

Then run the following yarn script

```shell
yarn gen
npm run gen
```

This script will render the icons within the `./src/icons` folder, and the application will render all icons exported from the index.ts barrel file withing the directory.

**How To Preview Icons**: 

Then run the vite dev script 

```shell
yarn dev
```

## Template Used For SVGR

```js
const template = (variables, { tpl, ...rest }) => {
    return tpl`
  import * as React from 'react';
  import { createSvgIcon } from '@mui/material/utils';

  
  const ${variables.componentName} = createSvgIcon(
    React.createElement(React.Fragment, null, ${variables.jsx.children}),
    '${variables.componentName.replace("Svg", "")}',
  );
   
  export default ${variables.componentName};
  `
  }
  
  module.exports = template
```
