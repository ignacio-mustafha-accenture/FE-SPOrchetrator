import { getTranslations } from 'next-intl/server';

import { LoginForm } from '../components/LoginForm/LoginForm';

export async function LoginPage(): Promise<React.JSX.Element> {
  const t = await getTranslations('auth.login');

  return (
    <main>
      <h1>{t('title')}</h1>
      <LoginForm />
    </main>
  );
}
