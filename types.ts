
// Fix: Added React import to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
