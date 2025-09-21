'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PasswordField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12
                     text-slate-900 placeholder-slate-400 focus:outline-none
                     focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
          required
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-500 hover:text-slate-700"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? (
            // eye-off
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12c.46-1.11 1.11-2.16 1.92-3.12M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88M6.1 6.1 17.9 17.9M22.94 12c-.46 1.11-1.11 2.16-1.92 3.12" />
            </svg>
          ) : (
            // eye
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}

function ResetPasswordContent() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get('email') ?? '';

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/login?reset=success');
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl shadow-sm p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-slate-900">Create new password</h1>
            <p className="text-slate-600 mt-1">
              Set a strong password for{' '}
              <span className="font-medium text-slate-900">{email || 'your account'}</span>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <PasswordField id="password" label="New password" value={password} onChange={setPassword} />
            <PasswordField id="confirm" label="Confirm password" value={confirm} onChange={setConfirm} />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl px-4 py-3 font-semibold text-white transition
                         bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
                         hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving…' : 'Confirm new password'}
            </button>
          </form>

          <div className="mt-6 text-sm">
            <Link href="/login" className="text-indigo-700 hover:text-indigo-800 font-medium">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
