import React from "react";


interface MarkdownRendererProps {
  htmlContent: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ htmlContent }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};