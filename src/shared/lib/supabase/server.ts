import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const isMock = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const mockClient = {
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
  },
};

export async function createClient() {
  if (isMock) return mockClient as Awaited<ReturnType<typeof createServerClient>>;

  const cookieStore = await cookies();

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (toSet) => toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)),
    },
  });
}
