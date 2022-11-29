//import styles from './index.module.scss';
import Image from 'next/image';
import { LoginForm } from '@myaccountui/ui';
import { useAuth } from '../../context/auth';
import { ReactElement } from 'react';

export function Login() {
  const { state, dispatch } = useAuth();
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2">
      <div className="relative hidden h-[100vh] min-h-screen sm:block">
        <Image
          className="object-cover w-full h-full"
          src="https://www.socalgas.com/sites/default/files/styles/hero_desktop/public/1435348747769/advanced_meter-0601-1024.jpg"
          alt="pictures of gas meters"
          fill={true}
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {state.kind === 'UNAUTHENTICATED' && (
        <LoginForm state={state} dispatch={dispatch} />
      )}
    </div>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Login;
