import { CreatePaymentProvider } from '../../../context/createPayment';
import CreatePaymentComponent from '../../../components/create-payment/create-payment';

export function CreatePayment() {
  return (
    <CreatePaymentProvider>
      <CreatePaymentComponent />
    </CreatePaymentProvider>
  );
}

export default CreatePayment;
