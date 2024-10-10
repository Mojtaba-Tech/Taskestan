/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      gray: {
        50: '#F1F2F4',
        100: '#DCDDE5',
        200: '#C6C7CE',
        300: '#9A9BA0',
        400: '#848589',
        500: '#6E6F73',
        600: '#58585C',
        700: '#424245',
        800: '#2C2C2E',
        900: '#161617'
      },
      darkgray: {
        50: '#EBEDF0',
        100: '#D4D5D8',
        200: '#BCBEC0',
        300: '#A5A6A8',
        400: '#8D8E90',
        500: '#767778',
        600: '#5E5F60',
        700: '#464748',
        800: '#2F2F30',
        900: '#171818'
      },
      brand: {
        50: '#FFEBD4',
        100: '#F0D1B9',
        200: '#D9B49A',
        300: '#C09879',
        400: '#AC805E',
        500: '#986A44',
        600: '#8C5F3D',
        700: '#7B5233',
        800: '#6D442C',
        900: '#5D3622'
      },
      blue: {
        50: '#E3F2FF',
        100: '#BBDEFF',
        200: '#90CAFF',
        300: '#61B5FF',
        400: '#3DA5FF',
        500: '#1D95FF',
        600: '#2386F8',
        700: '#2574E4',
        800: '#2562D1',
        900: '#2442B2'
      },
      violet: {
        50: '#F2E7FE',
        100: '#DBC4FC',
        200: '#C39CFB',
        300: '#AA70FB',
        400: '#954BF9',
        500: '#7E25EE',
        600: '#731FE8',
        700: '#6314DE',
        800: '#530CD6',
        900: '#3A00C8'
      },
      pink: {
        50: '#FDE4F6',
        100: '#F8BBE8',
        200: '#F48ADA',
        300: '#ED50CB',
        400: '#E600C0',
        500: '#DA00B2',
        600: '#CB00AE',
        700: '#B700A9',
        800: '#A500A3',
        900: '#85009A'
      },
      cyan: {
        50: '#E1FEF8',
        100: '#B5FCEA',
        200: '#7DFBDE',
        300: '#3EF6CF',
        400: '#0CEDC1',
        500: '#00E5B6',
        600: '#00D5A6',
        700: '#00C294',
        800: '#00B085',
        900: '#009165'
      },
      error: {
        50: '#FEEAED',
        100: '#FDCBD1',
        200: '#EB9798',
        300: '#E06F71',
        400: '#E94F4E',
        500: '#ED3D34',
        600: '#DE3333',
        700: '#CC292D',
        800: '#BF2226',
        900: '#B0161A'
      },
      warning: {
        50: '#FEF8E3',
        100: '#FDEDB7',
        200: '#FCE18A',
        300: '#FCD75C',
        400: '#FBCD3E',
        500: '#FAC430',
        600: '#FAB72A',
        700: '#F9A426',
        800: '#F89523',
        900: '#F6781E'
      },
      success: {
        50: '#E7F9EA',
        100: '#C5F1CA',
        200: '#9EE7A8',
        300: '#70DF82',
        400: '#45D664',
        500: '#00CD45',
        600: '#00BD3B',
        700: '#00AA2E',
        800: '#009820',
        900: '#007808'
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent'
    },
    extend: {
      borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
        huge: '24px'
      },
      boxShadow: {
        1: '0px 0px 2px 0px rgba(0, 0, 0, 0.06)',
        2: '0px 0.5px 1px 0px rgba(0, 0, 0, 0.20)',
        3: '0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
        4: '0px 0.5px 2px 0px rgba(0, 0, 0, 0.24), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12)'
      },
      fontSize: {
        13: '13px'
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

