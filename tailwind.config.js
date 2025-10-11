/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        'xs': '480px',
        sm: '640px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',
        '2xl':'1536px',
        '3xl':'1720px',
        '4xl':'1920px',
      },
      fontFamily: {
        chewy: ['Chewy', 'cursive'],
        baloo: ['Baloo 2', 'cursive'],
        luckiest: ['Luckiest Guy', 'cursive'],
        gloria:['Gloria Hallelujah','cursive']
      },
      backgroundPosition: {
        'banner-position':'0px -100px',
        'banner-position-inicio': '-300px -300px',
        'banner-position-carrito':'-200px -200px'
      },
      backgroundImage: {
        'banner-inicio': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1724758834/gorq51ss3mdeuysgnswx.jpg')",
        'banner-carrito': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1724758834/yjg9jr9z122sykvlxvb7.jpg')",
        'banner-slider1': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792234/f7olwksoyohqf5glxoi8.jpg')",
        'banner-slider2': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792233/it2zld0wguay4ep4w66x.jpg')",
        'banner-slider3':"url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792233/r8lbjqnt8sir8s13csan.jpg')",
        'banner-slider-responsive1': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792232/ahqo7qdjma0faikxxbeg.jpg')",
        'banner-slider-responsive2': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792232/ukdaog67b8ftejarn9o9.jpg')",
        'banner-slider-responsive3':"url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792235/sgqwojmsicizzhxnk2nu.jpg')",
      },
      colors: {
        'orange-light': '#ff9800',
        'orange-dark': '#e28000',
        'oreange-pastel': '#ffc340',
        'yellow-light': '#ffff00',
        'yellow-pastel': '#ffff56',
      },
      animation: {
        'spin-low': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 300ms linear',
        'from-right': 'fromRight 200ms linear',
        'from-left': 'fromLeft 200ms linear',
        'bg-banner': 'backBanner 15s infinite',
        'bg-banner-cate': 'backBannerCate 7s infinite',
        'bg-banner-cateX': 'backBannerCateX 7s infinite',
        'text-baner': 'showBannerText 15s linear',
        'bg-banner-carrito': 'backBannerCarrito 15s infinite',
        'show-card-title': 'showCardTitle 1500ms linear',
        'slider-title': 'showSliderTitle 7s infinite',
        'slider-description': 'showSliderDescription 7s infinite',
        'slider-button': 'showSliderbutton 7s infinite',
      },

      keyframes: {
        showSliderbutton: {
          'from': { transform: 'translateX(-200%)' },
            'to': { transform:'translateX(0%)'},
          },
        showSliderDescription: {
          'from': { transform: 'translateY(300%)' },
            'to': { transform:'translateY(0%)'},
          },
        showSliderTitle: {
          'from': { transform: 'translateY(-400%)' },
            'to': { transform:'translateY(0%)'},
          },
        fromBellow: {
        'from': { transform: 'translateY(500%)' },
          'to': { transform:'translateY(0%)'},
        },
        fromRight: {
          '0%': { transform: 'translateX(300%)' },
          '100%':{transform:'translateX(0%)'}
        },
        fromLeft: {
          '0%': { transform: 'translateX(-300%)' },
          '100%':{transform:'translateX(0%)'}
        },
        backBanner: {
          '0%': { 'background-position': '0px 0px' },
          '100%': {'background-position':'-300px -300px'},
        },
        backBannerCarrito: {
          '0%': { 'background-position': '-50px -50px' },
          '50%': { 'background-position': '-250px -250px' },
          '100%': {'background-position':'-50px -50px'},
        },
        backBannerCate: {
          '0%': { 'background-position': '0px 0px' },
          '25%': { 'background-position': '-50px -150px' },
          '50%': { 'background-position': '0px -300px' },
          '75%': { 'background-position': '-50px -150px' },
          '100%': {'background-position':'0px 0px'},
        },
        backBannerCateX: {
          '0%': { 'background-position': '0px 0px' },
          '100%': {'background-position':'-220px -220px'},
        },
        showBannerText: {
          '0%': {
            transform: 'translateX(500%) scale(5)',
            opacity:1
          },
          '50%': {
            transform: 'translateX(-500%) scale(5)',
            opacity:1
          },
          '75%': {
            transform: 'translateX(500%) scale(5)',
            'text-shadow': 'none',
            color:'tranparent',
            opacity:0
          },
          '100%': {
            transform: 'translateX(0%) scale(1,1)',
            'text-shadow': '2px 2px 1px black',
            color:'white',
            opacity: 1
          },
        },
        
        showCardTitle: {
          '0%': {
            transform: 'translateY(500%) scale(5)',
            opacity:1
          },
          '50%': {
            transform: 'translateY(-500%) scale(5)',
            opacity:1
          },
          '75%': {
            transform: 'translateY(500%) scale(5)',
            'text-shadow': 'none',
            color:'tranparent',
            opacity:0
          },
          '100%': {
            transform: 'translateY(0%) scale(1,1)',
            'text-shadow': '2px 2px 1px black',
            color:'white',
            opacity: 1
          },
        },
        fadeIn: {
          "from": { transform: 'opaciti(0)' },
          "to": { transform: 'opaciti(1)' },
        }
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
    animate: ['responsive', 'hover', 'group-hover'],
    keyframes: ['responsive', 'hover', 'group-hover'],
    fontSize: ['responsive', 'hover', 'group-hover'],
    transform: ['responsive', 'hover', 'group-hover'],
    scale:['responsive', 'hover', 'group-hover'],    
  },
  plugins: [],
    }
 
  




