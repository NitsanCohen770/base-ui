import React from 'react';
import classNames from 'classnames';
import {
  colorPalette,
  ColorPalette,
} from '@nitsancohen770/base-ui.theme-provider.color-palette';

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(colorPalette.primary, props.className)}
    ></div>
  );
}
