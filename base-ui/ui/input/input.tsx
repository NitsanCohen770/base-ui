import React from 'react';

export type InputProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Input({ text }: InputProps) {
  return (
    <div>
      {text}
    </div>
  );
}
