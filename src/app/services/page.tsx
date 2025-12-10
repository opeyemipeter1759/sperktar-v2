
import React from 'react';

const ServicesPage = () => {
  return (
    <>
      <main className="flex flex-col items-center gap-8 px-4 py-16 text-center sm:py-24">
        <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
          How We Build Your Vision
        </h2>
        <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-300 sm:text-lg">
          You focus on the business. We build the tech. A complete product
          development lifecycle under one roof.
        </p>

        {/* Bento Grid */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3">
          {/* Strategy */}
          <div className="glassmorphic-card group relative flex flex-col items-start rounded-lg p-6 text-left">
            <div className="icon-background mb-4 flex size-12 items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary text-3xl">
                explore
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Strategy</h3>
            <p className="mt-1 text-sm font-normal text-gray-400">
              Charting the course from idea to market-fit.
            </p>
            <span className="material-symbols-outlined absolute right-4 top-4 text-gray-600 transition-all group-hover:text-primary group-hover:translate-x-1">
              arrow_forward
            </span>
          </div>

          {/* UX/UI Design */}
          <div className="glassmorphic-card group relative flex flex-col items-start rounded-lg p-6 text-left">
            <div className="icon-background mb-4 flex size-12 items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary text-3xl">
                layers
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">UX/UI Design</h3>
            <p className="mt-1 text-sm font-normal text-gray-400">
              Crafting intuitive and beautiful user experiences.
            </p>
            <span className="material-symbols-outlined absolute right-4 top-4 text-gray-600 transition-all group-hover:text-primary group-hover:translate-x-1">
              arrow_forward
            </span>
          </div>

          {/* Engineering */}
          <div className="glassmorphic-card group relative flex flex-col items-start rounded-lg p-6 text-left">
            <div className="icon-background mb-4 flex size-12 items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary text-3xl">
                code
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Engineering</h3>
            <p className="mt-1 text-sm font-normal text-gray-400">
              Building robust, scalable, and secure software.
            </p>
            <span className="material-symbols-outlined absolute right-4 top-4 text-gray-600 transition-all group-hover:text-primary group-hover:translate-x-1">
              arrow_forward
            </span>
          </div>

          {/* MVP Development (Larger Tile) */}
          <div className="glassmorphic-card group relative flex flex-col items-start rounded-lg p-6 text-left md:col-span-2">
            <div className="icon-background mb-4 flex size-12 items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary text-3xl">
                rocket_launch
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">MVP Development</h3>
            <p className="mt-1 text-sm font-normal text-gray-400">
              Launch faster with a powerful Minimum Viable Product.
            </p>
            <span className="material-symbols-outlined absolute right-4 top-4 text-gray-600 transition-all group-hover:text-primary group-hover:translate-x-1">
              arrow_forward
            </span>
          </div>

          {/* Dedicated Teams */}
          <div className="glassmorphic-card group relative flex flex-col items-start rounded-lg p-6 text-left">
            <div className="icon-background mb-4 flex size-12 items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary text-3xl">
                groups
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Dedicated Teams</h3>
            <p className="mt-1 text-sm font-normal text-gray-400">
              Augment your team with our world-class talent.
            </p>
            <span className="material-symbols-outlined absolute right-4 top-4 text-gray-600 transition-all group-hover:text-primary group-hover:translate-x-1">
              arrow_forward
            </span>
          </div>
        </div>
      </main>

      {/* Why Choose Us Section with Net Background */}
      <div className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Background abstract shapes */}
        <div
          className="absolute top-0 left-0 h-full w-full opacity-30"
          data-alt="Abstract green and dark background gradient"
        >
          <div className="absolute -top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        </div>
        {/* Blueprint Lines */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <div
            className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(54,226,123,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(54,226,123,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
            data-alt="Faint green grid lines background pattern"
          ></div>
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Why Choose Us
            </h1>
            <p className="mt-4 text-lg text-slate-400 md:text-xl">
              You focus on the business. We build the tech.
            </p>
          </div>
          {/* TextGrid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {/* Card 1: Founder Empathy */}
            <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8">
              <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-3xl text-primary">
                  groups
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                  Founder Empathy
                </h2>
                <p className="text-slate-400 text-base font-normal leading-relaxed">
                  We&apos;re builders and former founders. We understand the
                  pressures and priorities of bringing a vision to life.
                </p>
              </div>
            </div>
            {/* Card 2: Startup Experience */}
            <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8">
              <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-3xl text-primary">
                  rocket_launch
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                  Startup Experience
                </h2>
                <p className="text-slate-400 text-base font-normal leading-relaxed">
                  From MVP to scale, we&apos;ve navigated the startup
                  journey. We build robust systems designed for rapid growth.
                </p>
              </div>
            </div>
            {/* Card 3: Unmatched Speed */}
            <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8">
              <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-3xl text-primary">
                  electric_bolt
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                  Unmatched Speed
                </h2>
                <p className="text-slate-400 text-base font-normal leading-relaxed">
                  Our streamlined processes and expert team deliver
                  high-quality products faster, giving you a critical market
                  advantage.
                </p>
              </div>
            </div>
            {/* Card 4: Radical Clarity */}
            <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8">
              <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-3xl text-primary">
                  filter_center_focus
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                  Radical Clarity
                </h2>
                <p className="text-slate-400 text-base font-normal leading-relaxed">
                  No jargon, just clear communication. We provide transparent
                  roadmaps and progress updates every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Build Process Section */}
      <div className="relative w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 py-16 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            You focus on the business.<br />
            We build the tech.
          </h1>
          <p className="font-display text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            Our process is designed to take your idea from concept to a
            scalable, market-ready product with precision and speed.
          </p>
        </div>
        {/* Scrollytelling Section */}
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 py-12">
          <div className="flex flex-col gap-24">
            {/* SectionHeader: The Build Process */}
            <div className="w-full">
              <h2 className="font-display text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">
                The Build Process
              </h2>
            </div>
            {/* Process Step 1: Discover */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              <div className="relative flex justify-center items-center h-80 lg:h-96">
                <div
                  className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  data-alt="Soft green glowing circular shape"
                ></div>
                <div className="relative w-full h-full p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/50">
                      <span className="material-symbols-outlined text-primary">
                        search
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Discover
                    </h3>
                  </div>
                  <p className="font-display text-zinc-300 text-lg">
                    We dive deep into your business goals, user needs, and market
                    landscape to build a solid foundation for success.
                  </p>
                  <div className="flex justify-end">
                    <span className="font-display text-6xl font-bold text-white/10">
                      01
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-left lg:pl-8">
                <h4 className="font-display text-primary text-lg font-semibold mb-2">
                  Phase One
                </h4>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Mapping the Blueprint
                </h3>
                <p className="font-display text-zinc-400 text-lg leading-relaxed">
                  Our journey begins with a comprehensive discovery phase. We
                  collaborate closely with you to define project scope, identify
                  key challenges, and chart a strategic path forward. This
                  ensures every decision is informed and aligned with your
                  vision.
                </p>
              </div>
            </div>
            {/* Process Step 2: Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              <div className="text-right lg:pr-8 order-2 lg:order-1">
                <h4 className="font-display text-primary text-lg font-semibold mb-2">
                  Phase Two
                </h4>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Crafting the Experience
                </h3>
                <p className="font-display text-zinc-400 text-lg leading-relaxed">
                  Next, our team creates intuitive user flows, wireframes, and
                  high-fidelity UI/UX designs that bring your vision to life. We
                  focus on creating a seamless and engaging user experience that
                  looks beautiful and functions flawlessly.
                </p>
              </div>
              <div className="relative flex justify-center items-center h-80 lg:h-96 order-1 lg:order-2">
                <div
                  className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  data-alt="Soft green glowing circular shape"
                ></div>
                <div className="relative w-full h-full p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/50">
                      <span className="material-symbols-outlined text-primary">
                        design_services
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Design
                    </h3>
                  </div>
                  <p className="font-display text-zinc-300 text-lg">
                    From wireframes to pixel-perfect mockups, we design
                    interfaces that are both beautiful and intuitive, ensuring a
                    delightful user journey.
                  </p>
                  <div className="flex justify-end">
                    <span className="font-display text-6xl font-bold text-white/10">
                      02
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Process Step 3: Build */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              <div className="relative flex justify-center items-center h-80 lg:h-96">
                <div
                  className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  data-alt="Soft green glowing circular shape"
                ></div>
                <div className="relative w-full h-full p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/50">
                      <span className="material-symbols-outlined text-primary">
                        code
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Build
                    </h3>
                  </div>
                  <p className="font-display text-zinc-300 text-lg">
                    Designs are transformed into a robust, functional product
                    with clean, scalable code, ready for launch and future
                    development.
                  </p>
                  <div className="flex justify-end">
                    <span className="font-display text-6xl font-bold text-white/10">
                      03
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-left lg:pl-8">
                <h4 className="font-display text-primary text-lg font-semibold mb-2">
                  Phase Three
                </h4>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Engineering the Future
                </h3>
                <p className="font-display text-zinc-400 text-lg leading-relaxed">
                  Our developers turn the designs into a high-performance,
                  secure, and scalable application. We follow agile
                  methodologies to deliver consistent progress and adapt to
                  changes, ensuring the final product exceeds expectations.
                </p>
              </div>
            </div>
            {/* Process Step 4: Scale */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              <div className="text-right lg:pr-8 order-2 lg:order-1">
                <h4 className="font-display text-primary text-lg font-semibold mb-2">
                  Phase Four
                </h4>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Growing Without Limits
                </h3>
                <p className="font-display text-zinc-400 text-lg leading-relaxed">
                  Launch is just the beginning. We help you refine, optimize,
                  and scale your product based on user feedback and performance
                  data to ensure long-term growth and success in a competitive
                  market.
                </p>
              </div>
              <div className="relative flex justify-center items-center h-80 lg:h-96 order-1 lg:order-2">
                <div
                  className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  data-alt="Soft green glowing circular shape"
                ></div>
                <div className="relative w-full h-full p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/50">
                      <span className="material-symbols-outlined text-primary">
                        trending_up
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Scale
                    </h3>
                  </div>
                  <p className="font-display text-zinc-300 text-lg">
                    We provide ongoing support and strategic guidance to adapt
                    your product, add new features, and scale your
                    infrastructure as your user base grows.
                  </p>
                  <div className="flex justify-end">
                    <span className="font-display text-6xl font-bold text-white/10">
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pt-12">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-background-dark text-base font-bold leading-normal tracking-wide">
                <span className="truncate">Start Your Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
