import React from 'react';
import content from '../_content';

const withContent = (component: React.FunctionComponent<any>) => (
  props: any
) => {
  const newProps = {
    ...content,
    ...props,
  };

  return React.createElement(component, newProps);
};

export default withContent;
