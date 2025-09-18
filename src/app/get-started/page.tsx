import Layout from '@/components/Layout';
import Link from 'next/link';

export default function GetStartedPage() {
  const steps = [
    { title: 'Create an account', desc: 'Sign in or sign up in a minute.' },
    { title: 'Upload a photo', desc: 'Drop a product image—JPG, PNG, or WebP.' },
    { title: 'Choose a background', desc: 'Studio, soft grey, or gradient presets.' },
    { title: 'Download & publish', desc: 'Get a high‑res result sized for your store.' },
  ];

  return (
    <Layout>
      <div className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Get started in four steps</h1>
            <p className="mt-4 text-lg text-slate-600">No credit card required. Pay per image when you publish.</p>
          </div>
        </section>

        <section className="py-14 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">{i+1}</div>
                  <h3 className="text-base font-medium text-slate-900">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/login" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-black">Create account</Link>
            <span className="mx-3 text-slate-400">or</span>
            <Link href="/pricing" className="inline-flex items-center rounded-lg border border-slate-300 text-slate-900 px-6 py-3 text-sm font-medium hover:bg-slate-50">See pricing</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}





