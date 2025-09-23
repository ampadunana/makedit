import { Upload, Layers } from "lucide-react";

export default function HeroCard() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-700 via-purple-600 to-primary-800 p-10 shadow-xl">
      {/* background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl translate-x-20 translate-y-20"></div>

      {/* content */}
      <div className="relative z-10 text-white">
        <h2 className="text-4xl font-extrabold drop-shadow-sm">Transform Your Products</h2>
        <p className="mt-3 text-base text-white/90 max-w-xl">
          Elevate your brand with studio-quality images in seconds.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="h-12 px-6 rounded-lg bg-white text-black font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition">
            <Upload size={18} /> Upload Photo
          </button>
          <button className="h-12 px-6 rounded-lg bg-white/20 border border-white/40 text-white flex items-center gap-2 backdrop-blur-sm hover:bg-white/30 transition">
            <Layers size={18} /> Bulk Upload
          </button>
        </div>
      </div>
    </section>
  );
}