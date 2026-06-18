import { getTranslations } from 'next-intl/server';

import { ForgotPasswordForm } from '../components/ForgotPasswordForm/ForgotPasswordForm';

export async function ForgotPasswordPage(): Promise<React.JSX.Element> {
  const t = await getTranslations('auth.forgotPassword');

  return (
    <main>
      <h1>{t('title')}</h1>
      <ForgotPasswordForm />
    </main>
  );
}
