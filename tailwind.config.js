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
                    primary: '#5094fa',
                    'primary-content': '#fff',

                    'base-000': '#fff',
                    'base-100': '#F0F0F5',
                    'base-200': '#E8E8EE',
                    'base-300': '#E1E1E8',
                    'base-400': '#CDCED6',
                    'base-500': '#A9ABB8',
                    'base-600': '#858899',
                    'base-700': '#525463',
                    'base-800': '#3E404C',
                    'base-900': '#252730',

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
