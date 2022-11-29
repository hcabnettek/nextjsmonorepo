export type AuthActions =
  | {
      type: 'AUTHENTICATING';
    }
  | {
      type: 'AUTHENTICATE';
      payload: {
        username: string;
      };
    }
  | {
      type: 'ERROR';
      payload: {
        error: Error;
      };
    };
