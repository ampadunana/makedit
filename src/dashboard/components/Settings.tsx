"use client";

import { useState } from "react";
import {
  User,
  Shield,
  Bell,
  SlidersHorizontal,
  Key,
  Database,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  Lock,
  Mail,
  Palette,
  Monitor,
  Globe,
} from "lucide-react";

export default function Settings() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [emailProduct, setEmailProduct] = useState(true);
  const [emailActivity, setEmailActivity] = useState(true);
  const [theme, setTheme] = useState<"system" | "dark" | "light">("dark");
  const maskedKey = "sk-live-********************a9z";

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-primary-500" />
          Settings
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Configure your profile, security, notifications and developer options.
        </p>
      </header>

      {/* Profile */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <User size={18} /> Profile
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:col-span-1">
                <div className="w-20 h-20 rounded-full bg-[#1b1b23] border border-white/10" />
                <button className="mt-3 h-9 px-3 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm">
                  Change Avatar
                </button>
              </div>
              <div className="sm:col-span-2 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="First name" defaultValue="Sarah" />
                  <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Last name" defaultValue="Chen" />
                </div>
                <input className="h-10 w-full px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Email" defaultValue="sarah@example.com" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Company" defaultValue="Makedit" />
                  <input className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Role" defaultValue="Designer" />
                </div>
                <button className="h-9 px-3 rounded-md bg-white text-black font-semibold">
                  Save Profile
                </button>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Shield size={18} /> Security
            </h3>
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="password" className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Current password" />
                <input type="password" className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="New password" />
                <input type="password" className="h-10 px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white placeholder:text-gray-500" placeholder="Confirm password" />
              </div>
              <button className="h-9 px-3 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm inline-flex items-center gap-2">
                <Lock size={16} /> Update Password
              </button>

              <div className="mt-6 flex items-center justify-between rounded-lg bg-[#0b0b0d] border border-white/5 p-4">
                <div>
                  <div className="text-sm font-medium text-white">Two-Factor Authentication</div>
                  <div className="text-xs text-gray-400">Add an extra layer of security to your account.</div>
                </div>
                <button
                  onClick={() => setTwoFA((v) => !v)}
                  className={`h-7 w-12 rounded-full transition ${twoFA ? "bg-emerald-500" : "bg-gray-600"}`}
                  aria-pressed={twoFA}
                >
                  <span className={`block h-6 w-6 bg-white rounded-full mt-0.5 transition ${twoFA ? "ml-6" : "ml-1"}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Bell size={18} /> Notifications
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-[#0b0b0d] border border-white/5 p-4">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-sm text-white">Product updates</span>
                </div>
                <button
                  onClick={() => setEmailProduct((v) => !v)}
                  className={`h-7 w-12 rounded-full transition ${emailProduct ? "bg-emerald-500" : "bg-gray-600"}`}
                  aria-pressed={emailProduct}
                >
                  <span className={`block h-6 w-6 bg-white rounded-full mt-0.5 transition ${emailProduct ? "ml-6" : "ml-1"}`} />
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#0b0b0d] border border-white/5 p-4">
                <div className="flex items-center gap-2">
                  <Bell size={16} className="text-gray-400" />
                  <span className="text-sm text-white">Account activity</span>
                </div>
                <button
                  onClick={() => setEmailActivity((v) => !v)}
                  className={`h-7 w-12 rounded-full transition ${emailActivity ? "bg-emerald-500" : "bg-gray-600"}`}
                  aria-pressed={emailActivity}
                >
                  <span className={`block h-6 w-6 bg-white rounded-full mt-0.5 transition ${emailActivity ? "ml-6" : "ml-1"}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <SlidersHorizontal size={18} /> Preferences
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg bg-[#0b0b0d] border border-white/5 p-4">
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Monitor size={14} /> Theme
                </div>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => setTheme("system")}
                    className={`h-8 px-3 rounded-md text-sm ${theme === "system" ? "bg-white text-black" : "bg-[#1b1b23] text-white hover:bg-[#23232c]"}`}
                  >
                    System
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`h-8 px-3 rounded-md text-sm ${theme === "dark" ? "bg-white text-black" : "bg-[#1b1b23] text-white hover:bg-[#23232c]"}`}
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => setTheme("light")}
                    className={`h-8 px-3 rounded-md text-sm ${theme === "light" ? "bg-white text-black" : "bg-[#1b1b23] text-white hover:bg-[#23232c]"}`}
                  >
                    Light
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#0b0b0d] border border-white/5 p-4">
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Palette size={14} /> Accent
                </div>
                <div className="mt-3 flex gap-2">
                  <span className="inline-block h-5 w-5 rounded-full bg-primary-600 border border-white/10" />
                  <span className="inline-block h-5 w-5 rounded-full bg-purple-600 border border-white/10" />
                  <span className="inline-block h-5 w-5 rounded-full bg-emerald-600 border border-white/10" />
                </div>
              </div>
              <div className="rounded-lg bg-[#0b0b0d] border border-white/5 p-4">
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Globe size={14} /> Locale
                </div>
                <select className="mt-3 h-9 w-full px-3 rounded-md bg-[#1b1b23] border border-white/10 text-white">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Developer / API */}
          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Key size={18} /> API Keys
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-10 px-3 rounded-md bg-[#0b0b0d] border border-white/5 text-white flex items-center justify-between">
                  <span className="text-sm">{showApiKey ? "sk-live-a2b3c4d5e6f7g8h9j0k1l2m3n4o5p6a9z" : maskedKey}</span>
                  <button
                    onClick={() => setShowApiKey((v) => !v)}
                    className="h-7 w-7 grid place-items-center rounded bg-[#1b1b23] hover:bg-[#23232c] text-white"
                    aria-label={showApiKey ? "Hide key" : "Show key"}
                  >
                    {showApiKey ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                <button className="h-10 px-3 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm inline-flex items-center gap-2">
                  <Copy size={14} /> Copy
                </button>
                <button className="h-10 px-3 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm inline-flex items-center gap-2">
                  <RefreshCw size={14} /> Regenerate
                </button>
              </div>
              <p className="text-xs text-gray-400">Keep your API keys secure. Do not share them publicly.</p>
            </div>
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="space-y-6">
          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Database size={18} /> Data & Privacy
            </h3>
            <div className="mt-4 space-y-3">
              <button className="w-full h-10 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm">
                Download My Data
              </button>
              <button className="w-full h-10 rounded-md bg-[#1b1b23] hover:bg-[#23232c] text-white text-sm">
                Request Data Deletion
              </button>
              <div className="p-3 rounded-md bg-[#0b0b0d] border border-white/5 text-xs text-gray-400">
                We retain your content for quality improvements and troubleshooting for 30 days unless you request deletion sooner.
              </div>
            </div>
          </div>

          <div className="bg-[#111114] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white">Danger Zone</h3>
            <p className="text-sm text-gray-400 mt-2">
              Irreversible actions. Proceed with caution.
            </p>
            <div className="mt-3 space-y-2">
              <button className="w-full h-9 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm">
                Disable Account
              </button>
              <button className="w-full h-9 rounded-md bg-red-700/20 hover:bg-red-700/30 text-red-300 border border-red-700/40 text-sm">
                Permanently Delete Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}