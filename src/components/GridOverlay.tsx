import React from 'react';

export const GridOverlay: React.FC = () => {
  return (
    <div className="grid-overlay">
      <div className="grid-frame" />
      <div className="grid-line-v hidden md:block" style={{ gridColumn: '4' }} />
      <div className="grid-line-v hidden md:block" style={{ gridColumn: '7' }} />
      <div className="grid-line-v hidden md:block" style={{ gridColumn: '10' }} />
      <div className="grid-line-h hidden md:block" style={{ gridRow: '4' }} />
      <div className="grid-line-h hidden md:block" style={{ gridRow: '7' }} />
      <div className="grid-line-h hidden md:block" style={{ gridRow: '10' }} />
    </div>
  );
};
