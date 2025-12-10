
interface ProcessStepProps {
  step: string;
  phase: string;
  title: string;
  description: string;
  card: {
    icon: string;
    title: string;
    description: string;
  };
  isReversed: boolean;
}

export default function ProcessStep({ step, phase, title, description, card, isReversed }: ProcessStepProps) {
  const cardSide = (
    <div className="relative flex justify-center items-center h-80 lg:h-96">
      <div
        className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        data-alt="Soft green glowing circular shape"
      ></div>
      <div className="relative w-full h-full p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/50">
            <span className="material-symbols-outlined text-primary">{card.icon}</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
        </div>
        <p className="font-display text-zinc-300 text-lg">{card.description}</p>
        <div className="flex justify-end">
          <span className="font-display text-6xl font-bold text-white/10">{step}</span>
        </div>
      </div>
    </div>
  );

  const descriptionSide = (
    <div className={`text-left ${isReversed ? 'lg:pr-8' : 'lg:pl-8'}`}>
      <h4 className="font-display text-primary text-lg font-semibold mb-2">{phase}</h4>
      <h3 className="font-display text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="font-display text-zinc-400 text-lg leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      {isReversed ? (
        <>
          {descriptionSide}
          {cardSide}
        </>
      ) : (
        <>
          {cardSide}
          {descriptionSide}
        </>
      )}
    </div>
  );
}
