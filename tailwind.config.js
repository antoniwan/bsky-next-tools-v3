const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
                mono: ['var(--font-mono)', ...fontFamily.mono],
            },
        },
    },
    plugins: [],
};