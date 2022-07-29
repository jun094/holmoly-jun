module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                holymolyTheme: {
                    // 적용 완료
                    primary: '#9DD2FE',
                    'base-100': '#FFF',

                    // 적용 전
                    secondary: '#D926A9',
                    accent: '#1FB2A6',
                    neutral: '#191D24',
                    info: '#3ABFF8',
                    success: '#36D399',
                    warning: '#FBBD23',
                    error: '#F87272',
                },
            },
        ],
    },
}
