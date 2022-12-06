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