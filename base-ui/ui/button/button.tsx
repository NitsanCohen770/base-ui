import React from 'react';
import button from './styles.module.css';
import { Theme } from '@nitsancohen770/base-ui.theme-provider.theme-context';

export interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <div className={button.button}>{label || 'Default'}</div>;
};
