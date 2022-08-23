import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import style from './style.module.css';
import commonStyle from '~/styles/common.module.css';

type CommonButtonType = {
  variant?: 'attention' | 'primary';
};

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & CommonButtonType;

export const Button = forwardRef<HTMLButtonElement, ButtonType>(function ButtonBase({ className, variant, ...props }, ref) {
  return <button {...props} ref={ref} className={clsx(style.button, className, { [commonStyle.primaryBgColor]: variant === 'primary', [commonStyle.attentionBgColor]: variant === 'attention' })} />;
});
