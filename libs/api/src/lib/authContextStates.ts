import React from 'react';
import { AuthActions } from './authActions';

export type AuthContextStates =
  | {
      readonly kind: 'UNAUTHENTICATED';
      login: (
        email: string,
        password: string,
        dispatch: React.Dispatch<AuthActions>
      ) => void;
      readonly isLoading: true;
    }
  | {
      readonly user: string | null;
      readonly kind: 'AUTHENTICATED';
      logout: (dispatch: React.Dispatch<AuthActions>) => void;
      readonly isLoading: false;
    }
  | {
      readonly kind: 'ERRORED';
      readonly error: Error;
      readonly isLoading: false;
    };
