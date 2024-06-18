import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';  // Ensure this path is correct

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  );
};

export default MarkdownRenderer;
