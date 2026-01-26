'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Strategy',
    description:
      'Charting the course from idea to market-fit with data-driven insights.',
    icon: 'explore',
    href: '/services/strategy',
  },
  {
    title: 'UX/UI Design',
    description:
      'Crafting intuitive, user-centric and beautiful digital experiences.',
    icon: 'layers',
    href: '/services/ux-ui-design',
  },
  {
    title: 'Engineering',
    description:
      'Building robust, scalable, and secure software architectures.',
    icon: 'code',
    href: '/services/engineering',
  },
  {
    title: 'MVP Development',
    description:
      'Launch faster with a powerful Minimum Viable Product designed to test hypotheses and gain traction quickly.',
    icon: 'rocket_launch',
    href: '/services/mvp-development',
  },
  {
    title: 'Dedicated Teams',
    description: 'Augment your team with our world-class engineering talent.',
    icon: 'groups',
    href: '/services/dedicated-teams',
  },
];

const detailspage = [
  {
    title: 'Strategy',
    description:
      'Charting the course from idea to market-fit with data-driven insights.',
    icon: 'explore',
    href: '/services/strategy',
  },
  {
    title: 'UX/UI Design',
    description:
      'Crafting intuitive, user-centric and beautiful digital experiences.',
    icon: 'layers',
    href: '/services/ux-ui-design',
  },
  {
    title: 'Engineering',
    description:
      'Building robust, scalable, and secure software architectures.',
    icon: 'code',
    href: '/services/engineering',
  },
  {
    title: 'Product Management',
    description:
      "From concept to launch, we guide your product's journey to success.",
    icon: 'assignment',
    href: '/services/product-management',
  },
  {
    title: 'DevOps',
    description:
      'Streamline your development and deployment with our DevOps expertise.',
    icon: 'engineering',
    href: '/services/devops',
  },
  {
    title: 'LLMOps',
    description:
      'Operationalize and scale your large language models with our LLMOps solutions.',
    icon: 'model_training',
    href: '/services/llmops',
  },
  {
    title: 'Data Analytics',
    description:
      'Turn your data into actionable insights with our data analytics services.',
    icon: 'analytics',
    href: '/services/data-analytics',
  },
  {
    title: 'Go-To-Market Strategy',
    description: 'We help you launch your product and achieve market traction.',
    icon: 'campaign',
    href: '/services/go-to-market-strategy',
  },
  {
    title: 'Mobile App Development',
    description:
      'Engaging and high-performance mobile apps for iOS and Android.',
    icon: 'phone_iphone',
    href: '/services/mobile-app-development',
  },
  {
    title: 'Web Development',
    description:
      'Modern, scalable, and secure web applications tailored to your business needs.',
    icon: 'web',
    href: '/services/web-development',
  },
  {
    title: 'MVP Development',
    description:
      'Launch faster with a powerful Minimum Viable Product designed to test hypotheses and gain traction quickly.',
    icon: 'rocket_launch',
    href: '/services/mvp-development',
  },
  {
    title: 'Dedicated Teams',
    description: 'Augment your team with our world-class engineering talent.',
    icon: 'groups',
    href: '/services/dedicated-teams',
  },
];

const motionVariants = {
  container: {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.04, when: 'beforeChildren' },
    },
  },
  item: {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
    hover: { scale: 1.03, y: -6, transition: { duration: 0.1 } },
  },
  float: {
    animate: {
      y: [0, -6, 0],
      transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4 overflow-x-hidden no-scrollbar sm:p-6 md:p-8">
      <div className="absolute inset-0 w-full h-full -z-10 bg-background-dark">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[20%] translate-y-[-10%] rounded-full bg-primary/10 opacity-40 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[-20%] translate-y-[20%] rounded-full bg-blue-600/10 opacity-30 blur-[90px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(51, 59, 60, 0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="w-full max-w-6xl">
        <main className="flex flex-col items-center gap-8 px-4 py-16 text-center sm:py-24">
          <motion.h2
            className="text-4xl font-bold tracking-tighter text-transparent text-white sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            How We Build Your Vision
          </motion.h2>
          <motion.p
            className="max-w-2xl text-base font-normal leading-relaxed text-secondary-text sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            You focus on the business. We build the tech. A complete product
            development lifecycle under one roof.
          </motion.p>
          <motion.div
            className="grid w-full max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3"
            variants={motionVariants.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            {services.map((service, index) => (
              <Link href={service.href} key={index}>
                <motion.a
                  variants={motionVariants.item}
                  whileHover="hover"
                  className={`glassmorphic-card group relative flex flex-col items-start rounded-2xl p-8 text-left h-full ${
                    service.title === 'MVP Development' ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-center mb-5 icon-background size-14 rounded-xl">
                    <span className="text-3xl material-symbols-outlined text-primary">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm font-normal text-muted leading-relaxed ${
                      service.title === 'MVP Development' ? 'max-w-md' : ''
                    }`}
                  >
                    {service.description}
                  </p>
                  <div className="absolute right-6 top-6 opacity-0 transform translate-x-[-10px] transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0">
                    <span className="material-symbols-outlined text-primary">
                      arrow_forward
                    </span>
                  </div>
                </motion.a>
              </Link>
            ))}
          </motion.div>
        </main>
        <section className="flex flex-col items-center gap-8 px-4 py-16 text-center sm:py-24">
          <motion.h2
            className="text-4xl font-bold tracking-tighter text-transparent text-white sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3 }}
          >
            Explore Our Services
          </motion.h2>
          <motion.p
            className="max-w-2xl text-base font-normal leading-relaxed text-secondary-text sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Click on a service to learn more about how we can help you achieve
            your goals.
          </motion.p>
          <motion.div
            className="grid w-full max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3"
            variants={motionVariants.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            {detailspage.map((service, index) => (
              <Link href={service.href} key={index}>
                <motion.a
                  variants={motionVariants.item}
                  whileHover="hover"
                  className={`glassmorphic-card group relative flex flex-col items-start rounded-2xl p-8 text-left h-full ${
                    service.title === 'MVP Development' ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-center mb-5 icon-background size-14 rounded-xl">
                    <span className="text-3xl material-symbols-outlined text-primary">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm font-normal text-muted leading-relaxed ${
                      service.title === 'MVP Development' ? 'max-w-md' : ''
                    }`}
                  >
                    {service.description}
                  </p>
                  <div className="absolute right-6 top-6 opacity-0 transform translate-x-[-10px] transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0">
                    <span className="material-symbols-outlined text-primary">
                      arrow_forward
                    </span>
                  </div>
                </motion.a>
              </Link>
            ))}
          </motion.div>
        </section>
        <section className="relative z-10 flex flex-col w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              Why Choose Us
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-secondary-text md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              You focus on the business. We build the tech.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
            variants={motionVariants.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={motionVariants.item}
              whileHover="hover"
              className="flex flex-col gap-4 p-6 rounded-lg glassmorphic-card md:p-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center transition-colors rounded-full icon-container h-14 w-14 group-hover:bg-primary/20"
              >
                <motion.span className="text-3xl transition-transform material-symbols-outlined text-primary group-hover:scale-110">
                  groups
                </motion.span>
              </motion.div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                  Founder Empathy
                </h2>
                <p className="text-base font-normal leading-relaxed text-secondary-text">
                  We're builders and former founders. We understand the
                  pressures and priorities of bringing a vision to life.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={motionVariants.item}
              whileHover="hover"
              className="flex flex-col gap-4 p-6 rounded-lg glassmorphic-card md:p-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center transition-colors rounded-full icon-container h-14 w-14 group-hover:bg-primary/20"
              >
                <motion.span className="text-3xl transition-transform material-symbols-outlined text-primary group-hover:scale-110">
                  rocket_launch
                </motion.span>
              </motion.div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                  Startup Experience
                </h2>
                <p className="text-base font-normal leading-relaxed text-secondary-text">
                  From MVP to scale, we've navigated the startup journey. We
                  build robust systems designed for rapid growth.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={motionVariants.item}
              whileHover="hover"
              className="flex flex-col gap-4 p-6 rounded-lg glassmorphic-card md:p-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center transition-colors rounded-full icon-container h-14 w-14 group-hover:bg-primary/20"
              >
                <motion.span className="text-3xl transition-transform material-symbols-outlined text-primary group-hover:scale-110">
                  electric_bolt
                </motion.span>
              </motion.div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                  Unmatched Speed
                </h2>
                <p className="text-base font-normal leading-relaxed text-secondary-text">
                  Our streamlined processes and expert team deliver high-quality
                  products faster, giving you a critical market advantage.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={motionVariants.item}
              whileHover="hover"
              className="flex flex-col gap-4 p-6 rounded-lg glassmorphic-card md:p-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center transition-colors rounded-full icon-container h-14 w-14 group-hover:bg-primary/20"
              >
                <motion.span className="text-3xl transition-transform material-symbols-outlined text-primary group-hover:scale-110">
                  filter_center_focus
                </motion.span>
              </motion.div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                  Radical Clarity
                </h2>
                <p className="text-base font-normal leading-relaxed text-secondary-text">
                  No jargon, just clear communication. We provide transparent
                  roadmaps and progress updates every step of the way.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
        <section className="relative z-10 w-full max-w-6xl px-4 py-12 md:px-8 lg:px-12">
          <motion.div
            className="flex flex-col gap-32"
            variants={motionVariants.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-x-0 h-px transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="relative inline-block px-6 transform -translate-x-1/2 bg-background-dark left-1/2">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-center text-white uppercase font-display md:text-3xl text-primary/80">
                  The Build Process
                </h2>
              </div>
            </motion.div>
            <motion.div
              className="relative grid items-center grid-cols-1 gap-16 group lg:grid-cols-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute hidden w-px h-32 lg:block left-1/2 top-full bg-gradient-to-b from-primary/50 to-transparent"></div>
              <motion.div
                className="relative flex items-center justify-center h-80 lg:h-96"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="relative flex flex-col justify-between w-full h-full p-8 transition-colors duration-500 border shadow-2xl bg-glass-bg border-glass-border backdrop-blur-2xl rounded-2xl shadow-black/50 hover:border-primary/30"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="material-symbols-outlined text-primary"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        search
                      </motion.span>
                    </motion.div>
                    <h3 className="text-3xl font-bold tracking-wide text-white font-display">
                      Discover
                    </h3>
                  </div>
                  <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">
                    We dive deep into your business goals, user needs, and
                    market landscape to build a solid foundation for success.
                  </p>
                  <div className="flex items-end justify-end">
                    <span className="font-bold select-none font-display text-7xl text-white/5">
                      01
                    </span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="text-left lg:pl-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="mb-3 text-sm font-bold tracking-widest uppercase font-display text-primary">
                  Phase One
                </h4>
                <h3 className="mb-6 text-4xl font-bold text-white font-display">
                  Mapping the Blueprint
                </h3>
                <p className="font-display text-[#E5E7EB] text-lg leading-relaxed opacity-90">
                  Our journey begins with a comprehensive discovery phase. We
                  collaborate closely with you to define project scope, identify
                  key challenges, and chart a strategic path forward. This
                  ensures every decision is informed and aligned with your
                  vision.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative grid items-center grid-cols-1 gap-16 group lg:grid-cols-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute hidden w-px h-32 lg:block left-1/2 top-full bg-gradient-to-b from-primary/50 to-transparent"></div>
              <motion.div
                className="order-2 text-right lg:pr-10 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="mb-3 text-sm font-bold tracking-widest uppercase font-display text-primary">
                  Phase Two
                </h4>
                <h3 className="mb-6 text-4xl font-bold text-white font-display">
                  Crafting the Experience
                </h3>
                <p className="font-display text-[#E5E7EB] text-lg leading-relaxed opacity-90">
                  Next, our team creates intuitive user flows, wireframes, and
                  high-fidelity UI/UX designs that bring your vision to life. We
                  focus on creating a seamless and engaging user experience that
                  looks beautiful and functions flawlessly.
                </p>
              </motion.div>
              <motion.div
                className="relative flex items-center justify-center order-1 h-80 lg:h-96 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="relative flex flex-col justify-between w-full h-full p-8 transition-colors duration-500 border shadow-2xl bg-glass-bg border-glass-border backdrop-blur-2xl rounded-2xl shadow-black/50 hover:border-primary/30"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="material-symbols-outlined text-primary"
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: 0.5,
                        }}
                      >
                        design_services
                      </motion.span>
                    </motion.div>
                    <h3 className="text-3xl font-bold tracking-wide text-white font-display">
                      Design
                    </h3>
                  </div>
                  <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">
                    From wireframes to pixel-perfect mockups, we design
                    interfaces that are both beautiful and intuitive, ensuring a
                    delightful user journey.
                  </p>
                  <div className="flex items-end justify-end">
                    <span className="font-bold select-none font-display text-7xl text-white/5">
                      02
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative grid items-center grid-cols-1 gap-16 group lg:grid-cols-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute hidden w-px h-32 lg:block left-1/2 top-full bg-gradient-to-b from-primary/50 to-transparent"></div>
              <motion.div
                className="relative flex items-center justify-center h-80 lg:h-96"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
                <motion.div
                  className="relative flex flex-col justify-between w-full h-full p-8 transition-colors duration-500 border shadow-2xl bg-glass-bg border-glass-border backdrop-blur-2xl rounded-2xl shadow-black/50 hover:border-primary/30"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="material-symbols-outlined text-primary"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: 1,
                        }}
                      >
                        code
                      </motion.span>
                    </motion.div>
                    <h3 className="text-3xl font-bold tracking-wide text-white font-display">
                      Build
                    </h3>
                  </div>
                  <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">
                    Designs are transformed into a robust, functional product
                    with clean, scalable code, ready for launch and future
                    development.
                  </p>
                  <div className="flex items-end justify-end">
                    <span className="font-bold select-none font-display text-7xl text-white/5">
                      03
                    </span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="text-left lg:pl-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="mb-3 text-sm font-bold tracking-widest uppercase font-display text-primary">
                  Phase Three
                </h4>
                <h3 className="mb-6 text-4xl font-bold text-white font-display">
                  Engineering the Future
                </h3>
                <p className="font-display text-[#E5E7EB] atext-lg leading-relaxed opacity-90">
                  Our developers turn the designs into a high-performance,
                  secure, and scalable application. We follow agile
                  methodologies to deliver consistent progress and adapt to
                  changes, ensuring the final product exceeds expectations.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid items-center grid-cols-1 gap-16 group lg:grid-cols-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="order-2 text-right lg:pr-10 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="mb-3 text-sm font-bold tracking-widest uppercase font-display text-primary">
                  Phase Four
                </h4>
                <h3 className="mb-6 text-4xl font-bold text-white font-display">
                  Growing Without Limits
                </h3>
                <p className="font-display text-[#E5E7EB] text-lg leading-relaxed opacity-90">
                  Launch is just the beginning. We help you refine, optimize,
                  and scale your product based on user feedback and performance
                  data to ensure long-term growth and success in a competitive
                  market.
                </p>
              </motion.div>
              <motion.div
                className="relative flex items-center justify-center order-1 h-80 lg:h-96 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                />
                <motion.div
                  className="relative flex flex-col justify-between w-full h-full p-8 transition-colors duration-500 border shadow-2xl bg-glass-bg border-glass-border backdrop-blur-2xl rounded-2xl shadow-black/50 hover:border-primary/30"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="material-symbols-outlined text-primary"
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: 1.5,
                        }}
                      >
                        trending_up
                      </motion.span>
                    </motion.div>
                    <h3 className="text-3xl font-bold tracking-wide text-white font-display">
                      Scale
                    </h3>
                  </div>
                  <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">
                    We provide ongoing support and strategic guidance to adapt
                    your product, add new features, and scale your
                    infrastructure as your user base grows.
                  </p>
                  <div className="flex items-end justify-end">
                    <span className="font-bold select-none font-display text-7xl text-white/5">
                      04
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="flex justify-center w-full pt-16">
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: '0 0 30px rgba(6,182,212,0.6)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-primary hover:bg-primary-hover transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                >
                  <span className="relative z-10 text-lg font-bold tracking-wide text-white uppercase">
                    Start Your Project
                  </span>
                  <motion.div
                    className="absolute inset-0 transition-transform duration-300 ease-out translate-y-full skew-y-12 bg-white/20 group-hover:translate-y-0"
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
