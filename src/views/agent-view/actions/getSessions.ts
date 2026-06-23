'use server';

import { createClient } from '@/shared/lib/supabase/server';

import { GetRecentSessionsUseCase } from '../application/use-cases/GetRecentSessionsUseCase';
import { BEApiChatRepository } from '../infrastructure/adapters/BEApiChatRepository';
import type { ChatSession } from '../domain/entities/ChatSession';

export async function getRecentSessions(): Promise<ChatSession[]> {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  const repo = new BEApiChatRepository(session?.access_token ?? '');
  return new GetRecentSessionsUseCase(repo).execute();
}
