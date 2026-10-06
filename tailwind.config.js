/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        workspace: {
          bg: 'var(--color-workspace-bg)',
          sidebar: 'var(--color-workspace-sidebar)',
          panel: 'var(--color-workspace-panel)',
          card: 'var(--color-workspace-card)',
          hover: 'var(--color-workspace-hover)',
          border: 'var(--color-workspace-border)',
          'border-light': 'var(--color-workspace-border-light)',
        },
        content: {
          primary: 'var(--color-content-primary)',
          secondary: 'var(--color-content-secondary)',
          muted: 'var(--color-content-muted)',
        },
        brand: {
          red: 'var(--color-brand-red)',
          'red-light': 'var(--color-brand-red-light)',
          'red-dark': 'var(--color-brand-red-dark)',
          'red-subtle': 'var(--color-brand-red-subtle)',
        },
        status: {
          green: 'var(--color-status-green)',
          'green-subtle': 'var(--color-status-green-subtle)',
          amber: '#F6AD55',
          blue: '#63B3ED',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'window': '0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'panel': '0 10px 30px -10px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.03)',
        'glow-red': '0 0 20px rgba(229, 72, 77, 0.25)',
      }
    },
  },
  plugins: [],
}
