/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'neutral-50':"#F9F9F9",
        'neutral-100':"#F4F4F4",
        'neutral-200':"#E4E4E4",
        'neutral-300':"#D3D3D3",
        'neutral-400':"#A2A2A2",
        'neutral-500':"#737373",
        'neutral-600':"#525252",
        'neutral-700':"#404040",
        'neutral-800':"#262626",
        'neutral-900':"#171717",
        'neutral-950':"#0A0A0A",
        'neutral-1000':"#000000",
        'twitter-blue-default': "#1D9BF0",
        'twitter-blue-hover': "#1871CA",
        'twitter-blue-disabled': "#1E5D87",
        'blue-wash':"rgba(117, 190, 239, 0.20)",
        'button-stroke': "#546A7A",
        'searchbar-fill': "#212327",
        'card-fill': "#16181C",
        'green-success':"#00BE74",
        'red-error': "#8B141A",
            },

        fontFamily: {
              'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
            borderRadius: {
              '65': '65px',
              '30': '30px'
        },
        width: {
          '334': '334px',
          '367': '367px',
          '423': '427px',
          '320': '320px',
          '350': '350px',
          '348': '348px',
          '434': '434px',
          '442': '442px',
          '482': '482px',
          '171': '171px',
          '600': '600px',
          '56': '56px',
          '33': '33px',
          '19': '19px',
          '319': '319px'
          
    },
    spacing: {
      '15': '15px',
      '86': '340px',
      '20': '88px',
      '21': '92px',
      '17' : '60px',
      '78' : '308px',
      'one': '1px',
      '129':'129px',
      'five':'5px'
},

    height: {
      '355': '355px',
      '03': '3px',
      '442': '442px',
      '91': '91px',
      '14.5': '14.5px',
      '33': '33px',
      '826': '826px',
      '19': '19px',
      '39': '39px'
},
    boxShadow:{
      'btn':'0px 8px 16px 0px rgba(0, 0, 0, 0.25)'
    },
    backdropBlur:{
      'btn':'blur(23.668209075927734px)'
    },

    flex: {
      '1-0-0': '1 0 0'
    },

    fontSize: {
      '2.5xl':'26px',
      'big':'48px',
      'xxl': '48px'
    },
    padding: {
      '1px': '1px',
      '80px': '80px',
      '247': '247px',
      '1.50': '1.5px'
    },
    fontSize: {
      '19': '19px',
      '15': '15px'
    }
      }
    },
  
  plugins: [],
}
