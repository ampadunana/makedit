'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function VerifyCodePage() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get('email') ?? '';

  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendTimer, setResendTimer] = useState(60);
  const [resendLoading, setResendLoading] = useState(false);

  // Index of the "active" slot (0..5). This controls styling and where typing goes.
  const [activeIndex, setActiveIndex] = useState(0);

  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const code = digits.join('');

  const setSelectionToActive = () => {
    const input = hiddenInputRef.current;
    if (!input) return;

    // If we're inside already-filled characters, select that one; else place caret at the end.
    const pos = Math.min(activeIndex, code.length);
    const start = pos < code.length ? pos : code.length;
    const end = pos < code.length ? pos + 1 : code.length;

    try {
      input.setSelectionRange(start, end);
    } catch {
      /* ignore */
    }
  };

  // Keep the hidden input focused and its selection in sync with activeIndex/code.
  useEffect(() => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.focus();
      setSelectionToActive();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, code]);

  // Helpers
  const writeDigitAt = (i: number, char: string) => {
    setDigits((prev) => {
      const next = [...prev];
      if (i >= 0 && i < 6) next[i] = char;
      return next;
    });
  };

  const clearDigitAt = (i: number) => writeDigitAt(i, '');

  const moveLeft = () => setActiveIndex((i) => Math.max(0, i - 1));
  const moveRight = () => setActiveIndex((i) => Math.min(5, i + 1));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow tab to move out if needed
    if (e.key === 'Tab') return;

    // Digits 0-9 (including numpad)
    if (/^\d$/.test(e.key)) {
      e.preventDefault();
      writeDigitAt(activeIndex, e.key);
      // Move to next slot (stay at last slot if already at 5)
      setActiveIndex((i) => Math.min(5, i + 1));
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      // If current slot has a value, clear it and stay; if empty, move left and clear that.
      setDigits((prev) => {
        const next = [...prev];
        if (next[activeIndex]) {
          next[activeIndex] = '';
        } else if (activeIndex > 0) {
          next[activeIndex - 1] = '';
          setActiveIndex((i) => Math.max(0, i - 1));
        }
        return next;
      });
      return;
    }

    if (e.key === 'Delete') {
      e.preventDefault();
      clearDigitAt(activeIndex);
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      moveLeft();
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      moveRight();
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      // Submit only if all 6 filled
      if (code.length === 6) {
        // Trigger form submission programmatically
        const form = (e.currentTarget as HTMLInputElement).form;
        form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
      return;
    }

    // Block other keys (letters, symbols)
    e.preventDefault();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text') || '';
    const nums = pasted.replace(/\D/g, '');

    if (!nums) return;

    setDigits((prev) => {
      const next = [...prev];
      let idx = activeIndex;
      for (const ch of nums) {
        if (idx > 5) break;
        next[idx] = ch;
        idx++;
      }
      // Move cursor to last filled index (or stay at 5 if filled all)
      setActiveIndex(Math.min(5, activeIndex + nums.length));
      return next;
    });
  };

  const handleChangeFallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Fallback for mobile auto-fill or browsers that bypass keydown/paste handlers.
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    const next = val.split('').concat(Array(6 - val.length).fill(''));
    setDigits(next);
    setActiveIndex(Math.min(val.length, 5));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (code.length !== 6) {
      setError('Please enter the 6-digit code sent to your email.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/reset-password?email=${encodeURIComponent(email)}`);
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl shadow-sm p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-slate-900">Verify code</h1>
            <p className="text-slate-600 mt-1">
              Enter the 6-digit code we sent to{' '}
              <span className="font-medium text-slate-900">{email || 'your email'}</span>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden, controlled input that captures typing/paste */}
            <input
              ref={hiddenInputRef}
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={6}
              value={code}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              onChange={handleChangeFallback}
              onFocus={setSelectionToActive}
              style={{ position: 'absolute', left: '-9999px' }}
              autoFocus
              aria-hidden
            />

            <div className="flex items-center justify-between gap-2">
              {digits.map((d, i) => (
                <div
                  key={i}
                  onClick={() => {
                    // Always move focus to the hidden input first
                    hiddenInputRef.current?.focus();

                    // If clicking before/within filled range, set index there; if clicking beyond, jump to end.
                    const caretPos = i < code.length ? i : code.length;
                    setActiveIndex(caretPos);
                  }}
                  className={`w-12 h-12 text-center text-lg rounded-xl border flex items-center justify-center cursor-text ${
                    i === activeIndex
                      ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl px-4 py-3 font-semibold text-white transition
                         bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
                         hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying…' : 'Verify'}
            </button>
          </form>

          <div className="flex items-center justify-between mt-6 text-sm">
            <Link href="/forgot-password" className="text-slate-600 hover:text-slate-800">
              Change email
            </Link>
            <div className="text-right">
              <button
                type="button"
                onClick={() => {
                  setResendLoading(true);
                  setDigits(['', '', '', '', '', '']);
                  setActiveIndex(0);
                  setTimeout(() => {
                    setResendLoading(false);
                    setResendTimer(60);
                  }, 700);
                }}
                disabled={resendTimer > 0 || resendLoading}
                className="text-indigo-700 hover:text-indigo-800 font-medium disabled:text-slate-400 disabled:cursor-not-allowed"
              >
                {resendLoading ? 'Verifying…' : resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend code'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
