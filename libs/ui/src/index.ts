import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { LoginForm } from './lib/login-form/login-form';
export { InputBox } from './lib/input-box/input-box';

/** Merge classes with tailwind-merge with clsx full feature */
export default function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
