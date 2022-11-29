import styles from './create-payment.module.scss';

/* eslint-disable-next-line */
export interface CreatePaymentProps {}

export function CreatePayment(props: CreatePaymentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CreatePayment!</h1>
    </div>
  );
}

export default CreatePayment;
