import React from 'react';
import { Twemoji } from 'react-emoji-render';

interface CustomTwemojiProps {
  text: string;
  size?: number;
  className?: string;
}

const CustomTwemoji: React.FC<CustomTwemojiProps> = ({ 
  text, 
  size = 40, 
  className = '' 
}) => {
  // Style the wrapper directly
  const wrapperStyle = {
    display: 'inline-block',
    fontSize: `${size}px`,
    lineHeight: 1
  };

  return (
    <div style={wrapperStyle} className={`custom-twemoji ${className}`}>
      <Twemoji 
        text={text} 
        options={{
          className: 'twemoji-img',
          // Force base size (might not work with all versions)
          size: '72x72' 
        }}
      />
    </div>
  );
};

export default CustomTwemoji; 