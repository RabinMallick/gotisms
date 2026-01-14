/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                gotis: {
                    cyan: '#32B5E8',
                    teal: '#46D3B4',
                    dark: '#0B1E33',
                },
            },
            backgroundImage: {
                'gotis-gradient': 'linear-gradient(to right, #32B5E8, #46D3B4)',
            }
        },
    },
}