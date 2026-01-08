'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 overflow-hidden sm:p-6 md:p-8">
      <motion.div
        className="absolute inset-0 w-full h-full -z-10 bg-background-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          className="absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[20%] translate-y-[-10%] rounded-full bg-primary/10 opacity-40 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[-20%] translate-y-[20%] rounded-full bg-blue-600/10 opacity-30 blur-[90px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </motion.div>
      <div className="w-full max-w-6xl">
        <main className="flex flex-col items-center gap-8 px-4 py-16 text-center sm:py-24">
          <motion.h2
            className="text-4xl font-bold tracking-tighter text-transparent text-white sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            How We Build Your Vision
          </motion.h2>
          <motion.p
            className="max-w-2xl text-base font-normal leading-relaxed text-secondary-text sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            You focus on the business. We build the tech. A complete product
            development lifecycle under one roof.
          </motion.p>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3">
            {[
              { icon: 'explore', title: 'Strategy', desc: 'Charting the course from idea to market-fit with data-driven insights.' },
              { icon: 'layers', title: 'UX/UI Design', desc: 'Crafting intuitive, user-centric and beautiful digital experiences.' },
              { icon: 'code', title: 'Engineering', desc: 'Building robust, scalable, and secure software architectures.' },
              { icon: 'rocket_launch', title: 'MVP Development', desc: 'Launch faster with a powerful Minimum Viable Product designed to test hypotheses and gain traction quickly.', span: 2 },
              { icon: 'groups', title: 'Dedicated Teams', desc: 'Augment your team with our world-class engineering talent.' },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                className={`relative flex flex-col items-start h-full p-8 text-left glassmorphic-card group rounded-2xl ${card.span === 2 ? 'md:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.35,
                  delay: 0.15 + index * 0.08,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-5 icon-background size-14 rounded-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.span
                    className="text-3xl material-symbols-outlined text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    {card.icon}
                  </motion.span>
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-white">{card.title}</h3>
              <p className="text-sm font-normal leading-relaxed text-muted">
                  {card.desc}
                </p>
                <motion.div
                  className="absolute right-6 top-6 opacity-0 transform translate-x-[-10px]"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.span
                    className="material-symbols-outlined text-primary"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                  arrow_forward
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </main>
        <motion.section
          className="flex flex-col items-center gap-8 px-4 py-16 text-center sm:py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.35 }}
        >
          <motion.h2
            className="text-4xl font-bold tracking-tighter text-transparent text-white sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="max-w-2xl text-base font-normal leading-relaxed text-secondary-text sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            From startups to enterprises, we provide a full spectrum of digital
            services to bring your ideas to life.
          </motion.p>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3">
            {[
              { icon: 'web', title: 'Web Application Development', desc: 'Modern, scalable, and secure web applications tailored to your business needs.' },
              { icon: 'phone_iphone', title: 'Mobile Application Development', desc: 'Engaging and high-performance mobile apps for iOS and Android.' },
              { icon: 'smart_toy', title: 'AI & Machine Learning', desc: 'Integrate intelligent solutions to automate and enhance your business processes.' },
              { icon: 'cloud', title: 'Cloud & DevOps', desc: 'Streamline your development and deployment with our cloud and DevOps expertise.' },
              { icon: 'design_services', title: 'UI/UX Design', desc: 'Create beautiful and intuitive user interfaces that your users will love.' },
              { icon: 'campaign', title: 'Branding & Strategy', desc: 'Build a strong brand identity that resonates with your target audience.' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="relative flex flex-col items-start h-full p-8 text-left glassmorphic-card group rounded-2xl"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.35,
                  delay: 0.15 + index * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-5 icon-background size-14 rounded-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.span
                    className="text-3xl material-symbols-outlined text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    {service.icon}
                  </motion.span>
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm font-normal leading-relaxed text-muted">{service.desc}</p>
                <motion.div
                  className="absolute right-6 top-6 opacity-0 transform translate-x-[-10px]"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.span
                    className="material-symbols-outlined text-primary"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                  arrow_forward
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          className="relative z-10 flex flex-col w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Why Choose Us
            </h1>
            <p className="mt-4 text-lg text-secondary-text md:text-xl">
              You focus on the business. We build the tech.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {[
              { icon: 'groups', title: 'Founder Empathy', desc: "We're builders and former founders. We understand the pressures and priorities of bringing a vision to life." },
              { icon: 'rocket_launch', title: 'Startup Experience', desc: "From MVP to scale, we've navigated the startup journey. We build robust systems designed for rapid growth." },
              { icon: 'electric_bolt', title: 'Unmatched Speed', desc: 'Our streamlined processes and expert team deliver high-quality products faster, giving you a critical market advantage.' },
              { icon: 'filter_center_focus', title: 'Radical Clarity', desc: 'No jargon, just clear communication. We provide transparent roadmaps and progress updates every step of the way.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col gap-4 p-6 rounded-lg glassmorphic-card md:p-8 group"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.35,
                  delay: 0.1 + index * 0.06,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center rounded-full icon-container h-14 w-14"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(6,182,212,0.2)' }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.span
                    className="text-3xl material-symbols-outlined text-primary"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.icon}
                  </motion.span>
                </motion.div>
              <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold text-white">{item.title}</h2>
                  <p className="text-base font-normal leading-relaxed text-secondary-text">{item.desc}</p>
              </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          className="relative z-10 w-full max-w-6xl px-4 py-12 md:px-8 lg:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex flex-col gap-32">
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <motion.div
                className="absolute inset-x-0 h-px transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <div className="relative inline-block px-6 transform -translate-x-1/2 bg-background-dark left-1/2">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-center text-white uppercase font-display md:text-3xl text-primary/80">
                  The Build Process
                </h2>
              </div>
            </motion.div>
            {[
              { phase: 'Phase One', title: 'Mapping the Blueprint', icon: 'search', number: '01', name: 'Discover', desc: 'We dive deep into your business goals, user needs, and market landscape to build a solid foundation for success.', text: 'Our journey begins with a comprehensive discovery phase. We collaborate closely with you to define project scope, identify key challenges, and chart a strategic path forward. This ensures every decision is informed and aligned with your vision.', order: 'normal' },
              { phase: 'Phase Two', title: 'Crafting the Experience', icon: 'design_services', number: '02', name: 'Design', desc: 'From wireframes to pixel-perfect mockups, we design interfaces that are both beautiful and intuitive, ensuring a delightful user journey.', text: 'Next, our team creates intuitive user flows, wireframes, and high-fidelity UI/UX designs that bring your vision to life. We focus on creating a seamless and engaging user experience that looks beautiful and functions flawlessly.', order: 'reversed' },
              { phase: 'Phase Three', title: 'Engineering the Future', icon: 'code', number: '03', name: 'Build', desc: 'Designs are transformed into a robust, functional product with clean, scalable code, ready for launch and future development.', text: 'Our developers turn the designs into a high-performance, secure, and scalable application. We follow agile methodologies to deliver consistent progress and adapt to changes, ensuring the final product exceeds expectations.', order: 'normal' },
              { phase: 'Phase Four', title: 'Growing Without Limits', icon: 'trending_up', number: '04', name: 'Scale', desc: 'We provide ongoing support and strategic guidance to adapt your product, add new features, and scale your infrastructure as your user base grows.', text: 'Launch is just the beginning. We help you refine, optimize, and scale your product based on user feedback and performance data to ensure long-term growth and success in a competitive market.', order: 'reversed' },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative grid items-center grid-cols-1 gap-16 group lg:grid-cols-2 ${index < 3 ? 'mb-32' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.35, delay: 0.15 + index * 0.1 }}
              >
                {index < 3 && (
                  <motion.div
                    className="absolute hidden w-px h-32 lg:block left-1/2 top-full bg-gradient-to-b from-primary/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  />
                )}
                <motion.div
                  className={`relative flex items-center justify-center h-80 lg:h-96 ${step.order === 'reversed' ? 'order-1 lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: step.order === 'reversed' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="relative flex flex-col justify-between w-full h-full p-8 border shadow-2xl bg-glass-bg border-glass-border backdrop-blur-2xl rounded-2xl shadow-black/50"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(6,182,212,0.3)' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.25 + index * 0.1 }}
                  >
                  <div className="flex items-center gap-5">
                      <motion.div
                        className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.25 }}
                      >
                        <motion.span
                          className="material-symbols-outlined text-primary"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.4 }}
                        >
                          {step.icon}
                        </motion.span>
                      </motion.div>
                    <h3 className="text-3xl font-bold tracking-wide text-white font-display">
                        {step.name}
                </h3>
                    </div>
                    <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">{step.desc}</p>
                  <div className="flex items-end justify-end">
                      <motion.span
                        className="font-bold select-none font-display text-7xl text-white/5"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      >
                        {step.number}
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className={`text-left lg:pl-10 ${step.order === 'reversed' ? 'order-2 text-right lg:pr-10 lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: step.order === 'reversed' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.1 }}
                >
                  <motion.h4
                    className="mb-3 text-sm font-bold tracking-widest uppercase font-display text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + index * 0.1 }}
                  >
                    {step.phase}
                  </motion.h4>
                  <motion.h3
                    className="mb-6 text-4xl font-bold text-white font-display"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="font-display text-[#E5E7EB] text-lg leading-relaxed opacity-90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + index * 0.1 }}
                  >
                    {step.text}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
            <motion.div
              className="flex justify-center w-full pt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.5 }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(6,182,212,0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="relative z-10 text-lg font-bold tracking-wide text-white uppercase">
                    Start Your Project
                  </span>
                  <motion.div
                    className="absolute inset-0 -z-10 skew-y-12 bg-white/20"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
