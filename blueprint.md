# Project Blueprint

## Overview

This document outlines the development plan and features for the Sperktar Next.js application. It serves as a single source of truth for the project's architecture, design, and implemented features.

## Implemented Features

### Core Application Setup

*   **Framework:** Next.js with App Router
*   **Styling:** Tailwind CSS
*   **Components:**
    *   Header with navigation
    *   Footer with navigation and legal links
    *   Contact Modal for user inquiries
*   **Context:**
    *   `ModalContext` for managing the contact modal state.

### Feature Enhancements

*   **Contact Modal Integration:**
    *   The "Contact" link in the footer now opens the contact modal, providing a consistent user experience with the header.
*   **Image Optimization:**
    *   Replaced an external image URL in `src/app/page.tsx` with a locally stored image (`public/images/futuristic-tech.jpg`) to improve performance and reliability.
    *   Applied a blur effect to the background image to enhance the readability of the overlaying text.

## Current Task: Update Image and Apply Blur Effect

The current task is to update the `src/app/page.tsx` file to use the locally downloaded image and apply a blur effect.

*   **Action:** Modify the `src/app/page.tsx` file.
*   **Change:** Update the `src` attribute of the `motion.img` component to point to the local image path (`/images/futuristic-tech.jpg`) and add a `filter blur-sm` class.
