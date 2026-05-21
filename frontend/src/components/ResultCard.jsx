import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function ResultCard({ result }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-md border border-border rounded-xl p-3 shadow-sm animate-fade-in flex items-center justify-between gap-4 mt-2">
      <div className="pl-2 overflow-hidden">
        <a
          href={result.shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium text-foreground hover:underline truncate"
        >
          {result.shortUrl}
        </a>
      </div>
      <button
        onClick={handleCopy}
        className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 shrink-0 ${
          copied
            ? 'bg-foreground text-background'
            : 'bg-white border border-border text-muted hover:text-foreground hover:border-foreground/20'
        }`}
        title="Copy to clipboard"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}
