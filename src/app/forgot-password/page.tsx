'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/verify-code?email=${encodeURIComponent(email)}`);
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl shadow-sm p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-slate-900">Forgot password</h1>
            <p className="text-slate-600 mt-1">
              Enter the email associated with your Makedit account. We&apos;ll send you a 6-digit code.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="you@domain.com"
                autoComplete="email"
                required
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl px-4 py-3 font-semibold text-white transition
                         bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
                         hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending…' : 'Send code'}
            </button>
          </form>

          <div className="flex items-center justify-between mt-6 text-sm">
            <Link href="/login" className="text-indigo-700 hover:text-indigo-800 font-medium">
              Back to login
            </Link>
            <Link href="/get-started" className="text-slate-600 hover:text-slate-800">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
