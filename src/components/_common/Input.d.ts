import React from 'react';

export type InputProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  styleClass?: string;
  isWrong?: boolean;
  alertText?: string;
  content?: string;
  type?: string;
};
