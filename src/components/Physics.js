import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const Physics = () => {
  const markdownContent = `
  ## Physics Notes

  Welcome to the Physics Notes page.

  Here is an example of an inline equation: $E = mc^2$.

  And a block equation:

  $$ 
  \\frac{d}{dx} f(x) = g(x)
  $$ 
  `;

  return (
    <div>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
};

export default Physics;
