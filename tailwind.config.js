module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
			fontFamily: {
				'sans-light': ['Open Sans Light'],
				'sans-semibold': ['Open Sans Semibold'],
			},
      colors: {
        'custom-red': '#CF1430',
				'overlay': 'rgba(0, 0, 0, .3)'
      },
			fontSize: {
				heading: ['42px', '57px'],
				title: ['26px', '36px'],
				caption: ['18px', '30px'],
				button: ['16px', '30px'],
				content: ['16px', '28px'],
			},
    },
  },
  plugins: [],
}
