import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import style from './style.module.css';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export const CircleButton = forwardRef<HTMLButtonElement, ButtonType>(function ButtonBase({ className, ...props }, ref) {
  return (
    <button {...props} ref={ref} className={clsx(style.circleButton, className)}>
      +
    </button>
  );
});
