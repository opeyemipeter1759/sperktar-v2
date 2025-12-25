# Speckter Agency Blueprint

## Overview

This document outlines the design, features, and technical details of the Speckter digital agency website. The site is built with Next.js and Tailwind CSS, featuring a modern, dark-themed design.

## Design & Style

- **Color Palette:**
  - **Primary:** Vibrant cyan (`#06B6D4`)
  - **Primary Hover:** Darker cyan (`#0891b2`)
  - **Background:** Very dark gray (`#18181B`)
  - **Glass Background:** Translucent dark gray (`rgba(24, 24, 27, 0.7)`)
  - **Glass Border:** Translucent white (`rgba(255, 255, 255, 0.05)`)
  - **Secondary Text:** Silver/light gray (`#E5E7EB`)
- **Typography:** `Spline Sans` is used for display text, while `Inter` is used for general content.
- **Logo:** The brand name is "speckter" with a `layers` icon.
- **Overall Feel:** Modern, premium, and professional, with an emphasis on glassmorphism, soft glows, and clean typography.

## Implemented Features

- **Responsive Navigation:** A fully responsive header with a mobile menu.
- **Contact Modal:** A modal for users to get in touch.
- **Smooth Scrolling:** Sitewide smooth scrolling is enabled for a more fluid user experience.
- **Home Page:**
  - **Hero Section:** A two-column layout with the main headline and subheadline on the left, and a call-to-action panel on the right.
  - **Recent Work Section:** A preview of the latest projects.
  - **Core Capabilities Section:** A detailed breakdown of the agency's core services.
  - **Leadoo In-page Bot (Simulated):** A multi-step, conversational lead capture form embedded on the home page. It first qualifies the user by asking for their primary business challenge, then presents a contact form. This provides a more engaging and effective lead generation experience.
- **Services Page:**
  - **How We Build Your Vision Section:** An introductory section with a grid of cards detailing the initial steps of the process.
  - **What We Offer Section:** A three-column grid of glassmorphic cards, each detailing a specific service with an icon, title, and description.
  - **Why Choose Us Section:** A two-column grid of glassmorphic cards that highlight the agency's key differentiators: Founder Empathy, Startup Experience, Unmatched Speed, and Radical Clarity. This section includes a background grid and hover effects on the cards.
  - **The Build Process Section:** A detailed, four-phase timeline (Discover, Design, Build, Scale) that explains the agency's development process. It features a modern design with glass-panel cards, background gradients, and a clear, step-by-step layout.
- **Footer:** A comprehensive footer with navigation, social links, and legal information.

## Project Structure

- **Framework:** Next.js with App Router
- **Styling:** Tailwind CSS
- **Components:** Reusable components are located in `src/components`.
- **Static Data:** Project and service information is stored in the `src/lib` directory.
