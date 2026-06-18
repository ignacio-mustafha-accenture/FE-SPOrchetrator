import { render, screen } from '@testing-library/react';

import { ResetPasswordForm } from './ResetPasswordForm';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('@/shared/lib/supabase/client', () => ({
  createClient: () => ({
    auth: {
      updateUser: jest.fn().mockResolvedValue({ error: null }),
    },
  }),
}));

describe('ResetPasswordForm', () => {
  it('renders password and confirm password inputs', () => {
    render(<ResetPasswordForm />);
    expect(screen.getByLabelText('password')).toBeInTheDocument();
    expect(screen.getByLabelText('confirmPassword')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ResetPasswordForm />);
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });

  it('renders back to login button', () => {
    render(<ResetPasswordForm />);
    expect(screen.getByRole('button', { name: 'backToLogin' })).toBeInTheDocument();
  });
});
