import React from 'react';
import Admonition from '@theme-original/Admonition';
import clsx from 'clsx';

// type 不是 note, tip, info, warning, danger, Admonition會使用 info
// Customizing Admonition
export const CustomizingAdmonition = ({type, title, description, className, icon }) => (
	<Admonition 
      type={type} 
      icon={icon || "🎈"}
      title={title} 
      className={clsx(className)}
    >{ description }</Admonition>
);
