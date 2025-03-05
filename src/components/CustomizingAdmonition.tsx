import React from 'react';
import Admonition from '@theme-original/Admonition';
import clsx from 'clsx';

// Customizing Admonition
export const CustomizingAdmonition = ({type, title, description, className, icon }) => (
	<Admonition 
      type={type} 
      icon={icon || "🎈"}
      title={title} 
      className={clsx(className)}
    >{ description }</Admonition>
);
