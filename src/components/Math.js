import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const Math = () => {
  const markdownContent = `
  ## Math Notes

  Welcome to the Math Notes page.

  Here is an example of an inline equation: $a^2 + b^2 = c^2$.

  And a block equation:

  $$
  \\int_{a}^{b} x^2 dx = \\frac{b^3}{3} - \\frac{a^3}{3}
  $$
  `;

  return (
    <div>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
};

export default Math;
