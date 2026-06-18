import { render, screen } from '@testing-library/react';

import { ForgotPasswordForm } from './ForgotPasswordForm';

describe('ForgotPasswordForm', () => {
  it('renders without crashing', () => {
    render(<ForgotPasswordForm />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
