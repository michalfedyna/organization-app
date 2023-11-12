import {Control, FieldError, FieldValues} from 'react-hook-form';
import * as yup from 'yup';
import {InferType} from 'yup';

import {TranslationKey} from '@i18n';

type Form<FormSchema extends FieldValues> = {
  control: Control<FormSchema>;
  fields: {
    name: keyof FormSchema;
    label: TranslationKey;
    placeholder: TranslationKey;
    type: 'text' | 'password';
    error?: FieldError;
  }[];
};

export const registerSchema = yup.object().shape({
  username: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'form.errorLabel.confirmPassword')
    .required(),
});

export type RegisterFormSchema = InferType<typeof registerSchema>;

export type RegisterForm = Form<RegisterFormSchema>;

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export type LoginFormSchema = InferType<typeof loginSchema>;

export type LoginForm = Form<LoginFormSchema>;
