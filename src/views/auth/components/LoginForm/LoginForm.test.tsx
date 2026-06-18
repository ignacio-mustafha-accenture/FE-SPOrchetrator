import { render, screen } from '@testing-library/react';

import { LoginForm } from './LoginForm';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('@/shared/lib/supabase/client', () => ({
  createClient: () => ({
    auth: {
      signInWithPassword: jest.fn().mockResolvedValue({ error: null }),
    },
  }),
}));

describe('LoginForm', () => {
  it('renders email and password inputs', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<LoginForm />);
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });

  it('renders forgot password and SSO buttons', () => {
    render(<LoginForm />);
    expect(screen.getByRole('button', { name: 'forgotPassword' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'sso' })).toBeInTheDocument();
  });
});
