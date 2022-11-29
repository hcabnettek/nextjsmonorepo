/* eslint-disable no-debugger */
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthActions, AuthContextStates } from '@myaccountui/api';

const LoginFormSchema = z.object({
  username: z.string().min(5),
  password: z
    .string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  remember: z.boolean().optional(),
});

const LoginFormErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.too_small) {
    if (issue.path.includes('username')) {
      return { message: 'Username must be at least 5 characters' };
    }
  }
  if (issue.code === z.ZodIssueCode.invalid_string) {
    return { message: 'Password format is not valid' };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(LoginFormErrorMap);

export type LoginFormData = z.infer<typeof LoginFormSchema>;

interface LoginFormProps {
  state: AuthContextStates;
  dispatch: React.Dispatch<AuthActions>;
}

export function LoginForm({ state, dispatch }: LoginFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  const handleLogin: SubmitHandler<LoginFormData> = (vals: LoginFormData) => {
    dispatch({
      type: 'AUTHENTICATING',
    });

    setTimeout(() => {
      if (state.kind === 'UNAUTHENTICATED') {
        state.login(vals.username, vals.password, dispatch);
      }
    }, 100);
  };

  const handleLoginErr: SubmitErrorHandler<LoginFormData> = (errors) => {
    console.error(errors);
  };

  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(handleLogin, handleLoginErr)}
        className="mx-auto w-full max-w-[400px] min-h-[535px] rounded-lg bg-gray-50 p-8 shadow-sm border border-gray-300"
      >
        <img
          className="max-w-[50%] mx-auto mb-4"
          src="https://myaccount.socalgas.com/public/images/SCG_Logo_MyAccount_DesktopMobile.png"
          alt="Socal Gas Logo"
        />
        <h2 className="mb-10 text-2xl font-bold text-center text-gray-700 dark:text-white">
          Log In to My Account
        </h2>
        <div className="flex flex-col py-2 mb-6">
          <div className="relative">
            <input
              data-cy="input-username"
              id="username"
              type="text"
              placeholder="* Email Address / Username"
              className="w-full text-gray-900 placeholder-transparent border-gray-300 rounded-lg shadow-sm peer focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-300"
              {...register('username')}
              aria-invalid={errors.username ? 'true' : 'false'}
            />
            <label
              htmlFor="username"
              data-cy="label-username"
              className="transition-all peer-focus:-top-[22px] peer-focus:text-gray-600 peer-focus:text-sm absolute left-3 -top-[22px] text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2"
            >
              <span>*</span> Email Address / Username
            </label>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <div className="relative">
            <input
              data-cy="input-password"
              id="password"
              type="password"
              placeholder="* Password"
              className="w-full text-gray-900 placeholder-transparent border-gray-300 rounded-lg shadow-sm peer focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-300"
              {...register('password')}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            <label
              htmlFor="password"
              data-cy="label-password"
              className="transition-all peer-focus:-top-[22px] peer-focus:text-gray-600 peer-focus:text-sm absolute left-3 -top-[22px] text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2"
            >
              <span className="">*</span> Password
            </label>
          </div>
        </div>

        <div className="flex justify-between py-2">
          <p className="flex items-center">
            <input
              title="Remember Me"
              className="mr-2 text-blue-500 border-gray-200 rounded focus:ring-blue-400"
              type="checkbox"
              id="remember"
              {...register('remember')}
            />
            <label
              htmlFor="remember"
              className="block ml-2 text-sm text-gray-900"
            >
              Remember Me
            </label>
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-2 my-5 font-semibold text-white bg-blue-800 rounded-lg shadow-md shadow-blue-500/50 hover:bg-blue-700 hover:shadow-blue-500/40 focus:bg-blue-700 active:bg-blue-500"
        >
          LOG IN
        </button>

        <ul className="px-5 mt-2 text-sm font-semibold text-red-500 list-disc">
          {errors.username && (
            <li>
              <span>{errors.username.message}</span>
            </li>
          )}
          {errors.password && (
            <li>
              <span>{errors.password.message}</span>
            </li>
          )}
          {errors.remember && (
            <li>
              <span>{errors.remember.message}</span>
            </li>
          )}
        </ul>
      </form>
    </div>
  );
}

export default LoginForm;
