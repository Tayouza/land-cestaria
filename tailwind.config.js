tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#eead2b",
                "background-light": "#f8f7f6",
                "background-dark": "#221c10",
            },
            fontFamily: {
                "display": ["Noto Serif", "serif"],
                "sans": ["Noto Sans", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        },
    },
}
