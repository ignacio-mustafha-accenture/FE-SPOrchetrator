import { Topbar } from '@/shared/ui';

import { LoginForm } from '../components/LoginForm/LoginForm';

export function LoginPage(): React.JSX.Element {
  return (
    <div className={String.raw`min-h-screen bg-[var(--bg-base,#0a0c10)]`}>
      <Topbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-44px)] px-4 py-10">
        <LoginForm />
      </main>
    </div>
  );
}
