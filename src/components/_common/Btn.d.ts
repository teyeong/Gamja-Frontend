import React from 'react';

export type BtnProps = {
  label: string;
  styleClass: string;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
