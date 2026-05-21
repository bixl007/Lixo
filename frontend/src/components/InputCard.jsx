import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function InputCard({ onShorten, loading }) {
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onShorten(url.trim(), alias.trim());
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-xl border border-black/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1.5">
          Shorten your link
        </h1>
        <p className="text-[14px] text-muted">
          Paste your long URL below to create a clean, shareable link.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            id="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/very-long-url"
            disabled={loading}
            required
            className="w-full px-4 py-3.5 bg-white border border-border rounded-xl text-[15px] placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-foreground focus:border-foreground transition-all"
          />
        </div>

        <div>
          <div className="flex items-center bg-white border border-border rounded-xl focus-within:ring-1 focus-within:ring-foreground focus-within:border-foreground transition-all overflow-hidden">
            <span className="pl-4 pr-1 py-3.5 text-muted text-[15px] select-none">
              lixo.app/
            </span>
            <input
              id="alias"
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              placeholder="optional-alias"
              disabled={loading}
              className="w-full py-3.5 pr-4 bg-transparent text-[15px] placeholder:text-muted/60 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="w-full mt-2 py-3.5 rounded-xl bg-foreground text-background text-[15px] font-medium hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : 'Shorten'}
        </button>
      </form>
    </div>
  );
}
