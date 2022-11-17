/* eslint-disable-next-line */
export interface InputBoxProps {
  placeholder: string;
}

export function InputBox({ placeholder }: InputBoxProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`mt-10 ml-5 rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none`}
    />
  );
}

export default InputBox;
