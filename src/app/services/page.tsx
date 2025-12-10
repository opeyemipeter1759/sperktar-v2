
import React from 'react';
import { services } from '../../lib/services';
import ServiceCard from '../../components/ServiceCard';
import { whyChooseUs } from '../../lib/whyChooseUs';
import FeatureCard from '../../components/FeatureCard';
import { buildProcess } from '../../lib/buildProcess';
import ProcessStep from '../../components/ProcessStep';

const ServicesPage = () => {
  return (
    <>
        <div className="flex flex-col items-center gap-8 px-4 py-16 text-center sm:py-24">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                How We Build Your Vision
            </h2>
            <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-300 sm:text-lg">
                You focus on the business. We build the tech. A complete product
                development lifecycle under one roof.
            </p>

            {/* Bento Grid */}
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>

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
                    {whyChooseUs.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
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
                    {buildProcess.map((step, index) => (
                        <ProcessStep key={index} {...step} isReversed={index % 2 !== 0} />
                    ))}
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
