/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */

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
import { api as API } from '@myaccountui/api';

export type CreatePaymentActions =
  | {
      type: 'REVIEWING';
      payload: {
        paymentInfo: any;
      };
    }
  | {
      type: 'SUBMITTING';
      payload: {
        paymentInfo: any;
      };
    }
  | {
      type: 'COMPLETE';
    }
  | {
      type: 'ERRORING';
      payload: {
        error: Error;
      };
    };

type CreatePaymentContextStates =
  | {
      readonly kind: 'INIT';
      next: (paymentInfo: any) => void;
      readonly isComplete: false;
    }
  | {
      readonly kind: 'REVIEW';
      submit: (paymentInfo: any) => void;
      readonly isComplete: false;
    }
  | {
      readonly kind: 'SUBMIT';
      submit: (paymentInfo: any) => void;
      readonly isComplete: false;
    }
  | {
      readonly kind: 'SUBMITTED';
      readonly isComplete: true;
    }
  | {
      readonly kind: 'ERROR';
      error: (error: any) => void;
      readonly isComplete: false;
    };

const defaultCreatePaymentContextState: CreatePaymentContextStates = {
  kind: 'INIT',
  next: (paymentInfo: any) => {
    return void 0;
  },
  isComplete: false,
};

function reducer(
  state: CreatePaymentContextStates,
  action: CreatePaymentActions
): CreatePaymentContextStates {
  return match<CreatePaymentActions, CreatePaymentContextStates>(action)
    .with({ type: 'REVIEWING' }, ({ payload: { paymentInfo } }) => {
      return {
        kind: 'REVIEW',
        isComplete: false,
        submit: (paymentInfo) => {
          return;
        },
      };
    })
    .with({ type: 'SUBMITTING' }, ({ payload: { paymentInfo } }) => {
      return {
        kind: 'SUBMIT',
        isComplete: false,
        submit: (paymentInfo) => {
          void 0;
        },
      };
    })
    .with({ type: 'COMPLETE' }, () => ({
      kind: 'SUBMITTED',
      isComplete: true,
    }))
    .with({ type: 'ERRORING' }, ({ payload: { error } }) => ({
      kind: 'ERROR',
      isComplete: false,
      error: (error) => console.log(error),
    }))
    .otherwise(() => {
      return state;
    });
}

export const CreatePaymentContext = createContext<CreatePaymentContextStates>(
  defaultCreatePaymentContextState
);
const CreatePaymentDispatchContext = createContext<
  Dispatch<CreatePaymentActions>
>(() => {
  return;
});

export const CreatePaymentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    defaultCreatePaymentContextState
  );

  useEffect(() => {
    async function loadBillAccounts() {
      const token = localStorage.getItem('token');
      if (token) {
        API.defaults.headers.Authorization = `Bearer ${token}`;
        //const { data: billAccounts } = await API.get('billAccounts');
        //if (billAccounts) {
        // debugger;
        // }
      }
    }
    loadBillAccounts();
  }, []);

  return (
    <CreatePaymentDispatchContext.Provider value={dispatch}>
      <CreatePaymentContext.Provider value={state}>
        {children}
      </CreatePaymentContext.Provider>
    </CreatePaymentDispatchContext.Provider>
  );
};

export const useCreatePayment = () => {
  const state = useContext(CreatePaymentContext);
  const dispatch = useContext(CreatePaymentDispatchContext);

  return { state, dispatch };
};
