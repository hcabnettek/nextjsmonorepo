/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-debugger */
import { useState, useEffect } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
// import styles from './input-box.module.scss';

export interface InputBoxProps {
  placeholder?: string;
  dataCy?: string;
  required?: boolean;
  type?: 'text' | 'password';
  field?: ControllerRenderProps<
    {
      remember?: boolean | undefined;
      password: string;
      email: string;
      username: string;
    },
    'email'
  >;
}

export function InputBox({
  placeholder = '',
  dataCy = 'text',
  required = false,
  type = 'text',
  field,
}: InputBoxProps) {
  const [value, setValue] = useState(field!.value || '');

  useEffect(() => {
    setValue(field!.value);
  }, [field]);

  return (
    <div className="relative">
      <input
        name={dataCy}
        required={required}
        data-cy={`input-${dataCy}`}
        id={dataCy}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          field!.onChange && field!.onChange(e);
        }}
        placeholder={required ? `* ${placeholder}` : placeholder}
        className="w-full text-gray-900 placeholder-transparent border-gray-300 rounded-lg shadow-sm peer focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-300"
      />
      <label
        htmlFor={dataCy}
        data-cy={`label-${dataCy}`}
        className="transition-all peer-focus:-top-[22px] peer-focus:text-gray-600 peer-focus:text-sm absolute left-3 -top-[22px] text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2"
      >
        {required && <span>*</span>}
        {` `}
        {placeholder}
      </label>
    </div>
  );
}

export default InputBox;
