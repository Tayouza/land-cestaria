tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#d4af37", // Gold
                "primary-light": "#f1e5ac",
                "secondary": "#df7e59", // Terracotta
                "accent": "#4a7c59",    // Natural Green
                "background-light": "#fffdfa",
                "background-dark": "#12100e",
                "palette-rose": "#f8d7da",
                "palette-mint": "#d4edda",
                "palette-cream": "#fff3cd",
                "palette-berry": "#e2d9f3",
            },
            fontFamily: {
                "display": ["Noto Serif", "serif"],
                "sans": ["Noto Sans", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
}
