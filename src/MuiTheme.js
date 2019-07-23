const palette = {
    primary: {
        main: '#008080',
        light: '#00b3b3',
        dark: '#003434',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#800000',
        light: '#b30000',
        dark: '#340000',
        contrastText: '#FFFFFF',
    },
    textPrimary: '#1B1C1E',
    textSecondary: '#A4A4A5',
    background: {
        default: '#FFFFFF',
        primary: '#008080',
        secondary: '#800000',
        black: '#1B1C1E',
        grey: '#A4A4A5',
        lightgrey: '#F1F1F1',
        bottomGradient: 'linear-gradient(to bottom, transparent calc(100% - 40px), #F1F1F1 calc(100% - 40px))',
        overlay: 'rgba(0,0,0,.35)'    },
};

export {palette};

const spacing = {
    unit: 8,
};

export default {
    props: {
        MuiWithWidth: {
            initialWidth: 'lg',
        },
    },
    layout: {
        width: 1280,
    },
    transition: {
        smooth: 'all .5s',
    },
    shadows: [
        'none',
        '0px 1px 2px -1px   rgba(0,84,164,0.15)',
        '0px 1px 3px 0px    rgba(0,84,164,0.15)',
        '0px 2px 5px -1px   rgba(0,84,164,0.15)',
        '0px 2px 6px 0px    rgba(0,84,164,0.15)',
        '0px 3px 8px -1px   rgba(0,84,164,0.15)',
        '0px 3px 9px 0px    rgba(0,84,164,0.15)',
        '0px 4px 11px -1px  rgba(0,84,164,0.15)',
        '0px 4px 12px 0px   rgba(0,84,164,0.15)',
        '0px 5px 14px -1px  rgba(0,84,164,0.15)',
        '0px 5px 15px 0px   rgba(0,84,164,0.15)',
        '0px 6px 17px -1px  rgba(0,84,164,0.15)',
        '0px 6px 18px 0px   rgba(0,84,164,0.15)',
        '0px 7px 20px -1px  rgba(0,84,164,0.15)',
        '0px 7px 21px 0px   rgba(0,84,164,0.15)',
        '0px 8px 23px -1px  rgba(0,84,164,0.15)',
        '0px 8px 24px 0px   rgba(0,84,164,0.15)',
        '0px 9px 26px -1px  rgba(0,84,164,0.15)',
        '0px 9px 27px 0px   rgba(0,84,164,0.15)',
        '0px 10px 29px -1px rgba(0,84,164,0.15)',
        '0px 10px 30px 0px  rgba(0,84,164,0.15)',
        '0px 11px 32px -1px rgba(0,84,164,0.15)',
        '0px 11px 33px 0px  rgba(0,84,164,0.15)',
        '0px 12px 35px -1px rgba(0,84,164,0.15)',
        '0px 12px 36px 0px  rgba(0,84,164,0.15)',
    ],
    palette: palette,
    spacing: spacing,
    shape: {borderRadius: 6},
    typography:{
        fontFamily: [
            'Roboto',
            'OpenSans',
            'sans-serif',
        ].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        useNextVariants: true,
        h1: {
            fontSize: '5rem',
            fontWeight: 700,
            lineHeight: '6rem',
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: '3.75rem',
        },
        h3: {
            fontSize: '2.25rem',
            fontWeight: 500,
            lineHeight: '2.75rem',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: '2rem',
        },
        h5: {
            fontSize: '1.375rem',
            fontWeight: 400,
            lineHeight: '1.875rem',
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 400,
            lineHeight: '1.75rem',
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: '1.50rem',
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '1.25rem',
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: "1.50rem",
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 300,
            lineHeight: "1.25rem",
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 300,
            lineHeight: "1rem",
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 700,
        },
    },
    overrides: {
        MuiTypography: {
            gutterBottom: {
                marginBottom: 16
            }
        },
        MuiGrid: {
            'spacing-xs-8': {
                margin: -16,
                width: 'calc(100% + 32px)',
                '& > .MuiGrid-item': {
                    padding: 16
                }
            }
        }
    },
};
