
export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">
        
        <main className="flex-grow flex flex-col items-center justify-center py-12 lg:py-20 gap-8">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 flex items-center">
              <div className="glass-panel rounded-xl p-8 md:p-12 lg:p-16 w-full h-full flex flex-col justify-center">
                <div className="flex flex-col gap-6 text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white">
                                You focus on the business. We build the tech.
                            </h1>
                  <p className="text-base md:text-lg font-normal text-white/70 max-w-md">
                                Product teams for founders who want to move fast and launch right.
                            </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex items-center">
              <div className="glass-panel rounded-xl p-8 md:p-10 w-full h-full flex flex-col justify-center gap-6 items-start">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Have an idea?</h2>
                <p className="text-base font-normal text-white/70">
                            Let&apos;s partner to build your MVP and scale your vision. Get a proposal in 48 hours.
                        </p>
                <button className="flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-primary text-background-dark text-base font-bold w-full md:w-auto hover:bg-opacity-90 transition-all">
                  <span>Start Your Project</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-5">
                <div className="flex items-center gap-4">
                    <span className="text-white/40 text-xs font-bold tracking-widest uppercase pl-2">Scaling Tech For</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">deployed_code</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">NEXUS</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">token</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">ORBIT</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">all_inclusive</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">FLUX</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">change_history</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">APEX</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">blur_on</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">PULSE</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">view_in_ar</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">CUBE</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
}
