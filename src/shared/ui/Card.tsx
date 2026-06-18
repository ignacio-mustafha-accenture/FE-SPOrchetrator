import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps): React.JSX.Element {
  return (
    <div
      className={clsx(
        String.raw`bg-[var(--bg-elevated,#181c23)] border border-[var(--border-default,rgba(255,255,255,0.14))] border-solid`,
        String.raw`flex flex-col gap-[var(--spacing-16,16px)] items-start w-full max-w-[420px]`,
        String.raw`px-8 py-9 rounded-[var(--radius-card,16px)] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)]`,
        className,
      )}
    >
      {children}
    </div>
  );
}
