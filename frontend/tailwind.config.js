module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Montserrat'],
            'Roboto':['Roboto'],
            'Poppins':['Poppins'],
            'Courgette':['Courgette']
        },
        important: true,
        extend: {
            screens: {
                // for mobile responsive
                sm:'640px',
                // for tabler responsive
                md:'768px',
                // for laptop display
                lg:'1024px',
            // for meduim display
                xl:'1280px',
                // for larger display
                mx: '2048px',
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    },
};