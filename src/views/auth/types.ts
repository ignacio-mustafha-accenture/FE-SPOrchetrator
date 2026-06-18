export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ForgotPasswordFormValues {
  email: string;
}

export interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export type PasswordStrengthLevel = '1-Weak' | '2-Fair' | '3-Good' | '4-Strong';
