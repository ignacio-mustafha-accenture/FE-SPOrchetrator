import { render, screen } from '@testing-library/react';

import { ForgotPasswordForm } from './ForgotPasswordForm';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string, params?: Record<string, unknown>) => {
    if (params) return `${key}:${JSON.stringify(params)}`;
    return key;
  },
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('@/shared/lib/supabase/client', () => ({
  createClient: () => ({
    auth: {
      resetPasswordForEmail: jest.fn().mockResolvedValue({ error: null }),
    },
  }),
}));

describe('ForgotPasswordForm', () => {
  it('renders step 1 with email input and submit button', () => {
    render(<ForgotPasswordForm />);
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });

  it('renders back to login button', () => {
    render(<ForgotPasswordForm />);
    expect(screen.getByRole('button', { name: 'backToLogin' })).toBeInTheDocument();
  });
});
