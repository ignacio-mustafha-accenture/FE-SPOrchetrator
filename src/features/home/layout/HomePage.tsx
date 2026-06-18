import { redirect } from 'next/navigation';

import { createClient } from '@/shared/lib/supabase/server';

export async function HomePage(): Promise<React.JSX.Element> {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
