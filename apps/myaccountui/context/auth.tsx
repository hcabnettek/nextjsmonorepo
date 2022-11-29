/* eslint-disable no-debugger */
//'use client;';

import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useReducer,
  Dispatch,
} from 'react';
import Router, { useRouter } from 'next/router';
import { match } from 'ts-pattern';
import { api as API, AuthActions, AuthContextStates } from '@myaccountui/api';

const defaultAuthContext: AuthContextStates = {
  kind: 'UNAUTHENTICATED',
  login: (email: string, password: string) => {
    return;
  },
  isLoading: true,
};

function reducer(
  state: AuthContextStates,
  action: AuthActions
): AuthContextStates {
  return match<AuthActions, AuthContextStates>(action)
    .with({ type: 'AUTHENTICATING' }, () => {
      return {
        kind: 'UNAUTHENTICATED',
        isLoading: true,
        login: async (
          email: string,
          password: string,
          dispatch: React.Dispatch<AuthActions>
        ) => {
          const {
            data: { token },
          } = await API.post('auth/login', {
            email,
            password,
          });

          //if (token) {
          // localStorage.setItem('token', token);
          // API.defaults.headers.Authorization = `Bearer ${token}`;
          dispatch({
            type: 'AUTHENTICATE',
            payload: { username: email },
          });
          Router.push('/');
          //}
        },
      };
    })
    .with({ type: 'AUTHENTICATE' }, ({ payload: { username } }) => {
      return {
        kind: 'AUTHENTICATED',
        isLoading: false,
        user: username,
        logout: (dispatch: React.Dispatch<AuthActions>) => {
          localStorage.removeItem('token');
          if (typeof dispatch === 'function') {
            dispatch({
              type: 'AUTHENTICATING',
            });
          }
          delete API.defaults.headers.Authorization;
          Router.push('/login');
        },
      };
    })

    .with({ type: 'ERROR' }, ({ payload: { error } }) => ({
      kind: 'ERRORED',
      isLoading: false,
      error,
    }))
    .otherwise(() => {
      return state;
    });
}

export const AuthContext = createContext<AuthContextStates>(defaultAuthContext);
const DispatchContext = createContext<Dispatch<AuthActions>>(() => {
  return;
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultAuthContext);

  useEffect(() => {
    async function loadUserFromStorage() {
      const token = localStorage.getItem('token');
      if (token) {
        //API.defaults.headers.Authorization = `Bearer ${token}`;
        //const { data: billAccounts } = await API.get('billAccounts');
        //if (billAccounts) {
        //  debugger;
        //}
      }
    }
    loadUserFromStorage();
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAuth = () => {
  const state = useContext(AuthContext);
  const dispatch = useContext(DispatchContext);

  return { state, dispatch };
};
export const ProtectRoute = ({ children }: { children: ReactNode }) => {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.kind === 'UNAUTHENTICATED' && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [state.kind, router]);

  return <>{children}</>;
};
