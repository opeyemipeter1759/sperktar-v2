
'use client';

export default function ContactButton({ onClick, isVisible }: { onClick: () => void, isVisible: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 transform transition-all duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'} group flex items-center gap-2 rounded-r-2xl border border-l-0 border-white/10 px-4 py-8 glass-panel`}>
        <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">
            mail
        </span>
      <span className="[writing-mode:vertical-rl] text-sm font-bold uppercase tracking-wider text-white">Contact Us</span>
    </button>
  );
}
