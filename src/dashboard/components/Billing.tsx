"use client";

import { CreditCard, ReceiptText, Download, Plus, CheckCircle2, Crown, Calendar, Wallet, ArrowRight } from "lucide-react";

export default function Billing() {
  const invoices = [
    { id: "INV-2025-001", date: "2025-09-01", amount: "$29.00", status: "Paid" },
    { id: "INV-2025-002", date: "2025-08-01", amount: "$29.00", status: "Paid" },
    { id: "INV-2025-003", date: "2025-07-01", amount: "$29.00", status: "Paid" },
  ];
  const methods = [
    { brand: "Visa", last4: "4242", exp: "04/28", default: true },
    { brand: "Mastercard", last4: "4444", exp: "11/27", default: false },
  ];

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Crown size={18} className="text-yellow-400" />
            Billing
          </h2>
          <p className="text-sm text-gray-400 mt-1">Manage your subscription, invoices, and payment methods.</p>
        </div>
        <button className="h-10 px-4 rounded-lg bg-white text-black font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition">
          <Wallet size={18} /> Upgrade Plan
        </button>
      </header>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-gray-400">Current Plan</div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">Pro</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 size={14} /> Active
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">Billed monthly. Cancel anytime.</p>
              </div>
              <button className="h-9 px-3 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm flex items-center gap-2">
                Manage Plan <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0b0b0d] border border-white/5 rounded-lg p-4">
                <div className="text-xs text-gray-400">Credits Remaining</div>
                <div className="mt-1 text-xl font-semibold text-white">380 / 500</div>
                <div className="mt-3 h-2 rounded bg-[#1b1b23]">
                  <div className="h-2 rounded bg-primary-600" style={{ width: "76%" }} />
                </div>
              </div>
              <div className="bg-[#0b0b0d] border border-white/5 rounded-lg p-4">
                <div className="text-xs text-gray-400">Images Processed</div>
                <div className="mt-1 text-xl font-semibold text-white">1,284</div>
                <div className="mt-3 h-2 rounded bg-[#1b1b23]">
                  <div className="h-2 rounded bg-purple-600" style={{ width: "64%" }} />
                </div>
              </div>
              <div className="bg-[#0b0b0d] border border-white/5 rounded-lg p-4">
                <div className="text-xs text-gray-400">Next Invoice</div>
                <div className="mt-1 text-xl font-semibold text-white">$29.00</div>
                <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
                  <Calendar size={14} /> Oct 1, 2025
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <CreditCard size={18} /> Payment Methods
              </h3>
              <button className="h-9 px-3 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm flex items-center gap-2">
                <Plus size={16} /> Add Method
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {methods.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-[#0b0b0d] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-[#1b1b23] grid place-items-center text-gray-300">{m.brand[0]}</div>
                    <div>
                      <div className="text-sm font-medium text-white">{m.brand} •••• {m.last4}</div>
                      <div className="text-xs text-gray-400">Expires {m.exp}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {m.default && (
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Default</span>
                    )}
                    {!m.default && (
                      <button className="text-xs px-2 py-1 rounded bg-[#1b1b23] hover:bg-[#23232c] text-white">Make Default</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <ReceiptText size={18} /> Invoices
            </h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/5">
              <table className="w-full text-sm">
                <thead className="bg-[#0b0b0d]/60 text-gray-400">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium">Invoice</th>
                    <th className="text-left px-4 py-2 font-medium">Date</th>
                    <th className="text-left px-4 py-2 font-medium">Amount</th>
                    <th className="text-left px-4 py-2 font-medium">Status</th>
                    <th className="text-right px-4 py-2 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="border-t border-white/5">
                      <td className="px-4 py-2 text-white">{inv.id}</td>
                      <td className="px-4 py-2 text-gray-300">{inv.date}</td>
                      <td className="px-4 py-2 text-white">{inv.amount}</td>
                      <td className="px-4 py-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">{inv.status}</span>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <button className="inline-flex items-center gap-1 h-8 px-2 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white">
                          <Download size={14} /> PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white">Billing Address</h3>
            <div className="mt-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="First name" />
                <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Last name" />
              </div>
              <input className="h-10 w-full px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Company (optional)" />
              <input className="h-10 w-full px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Address" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="City" />
                <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="State" />
                <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="ZIP" />
              </div>
              <button className="mt-2 h-9 px-3 rounded-md bg-white text-black font-semibold">Save Address</button>
            </div>
          </div>

          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <p className="text-sm text-gray-400 mt-2">
              Questions about billing? We’re here to help.
            </p>
            <button className="mt-3 h-9 px-3 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}