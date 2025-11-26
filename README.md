# GLIP6 Company Website

This is the premium, modern company website for GLIP6 (Gondovirtualsystems MUi).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React

## Features

- **Premium Dark Mode**: Sleek, modern aesthetic.
- **Smooth Animations**: Scroll reveals, hover effects, and smooth transitions.
- **Responsive Design**: Works perfectly on mobile and desktop.
- **Early Access Form**: Collects emails into a `subscribers.csv` file.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the site**:
    Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/app`: Main pages and layout.
- `src/components`: Reusable UI components (Hero, Navbar, Team, etc.).
- `src/lib`: Utility functions.
- `src/app/api/subscribe`: Backend API for the waitlist.

## Subscribers

Emails submitted via the Early Access form are saved to `subscribers.csv` in the project root.
