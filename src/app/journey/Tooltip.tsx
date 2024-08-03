// In another component file, e.g., Tooltip.tsx
import React from 'react';

const Tooltip = ({ content, children }: { content: string, children: React.ReactNode }) => (
  <div className="tooltip">
    {children}
    <span className="tooltip-text">{content}</span>
  </div>
);

export default Tooltip;
