import { ApplicationError } from '@/protocols';

export function invalidCepError(): ApplicationError {
  return {
    name: 'Invalid Cep Error',
    message: 'This Cep might not exist.',
  };
}
