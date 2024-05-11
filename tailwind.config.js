/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
     
    extend: {
      
      colors: {
        primary: {
          '01':'#A6FFE1',
          '02':'#95F2D3',
          '03':'#85E5C5',
          '04':'#74D8B6',
          '05':'#64CBA8',
          '06':'#42B18C',
          '07':'#21976F',
          '08':'#007D53',
          '09':'#006442',
          '10':'#004B32',
          '11':'#003221',
          '12':'#002619',
          '13':'#001911',
          '14':'#000D08',
          '15':'#000000',
        },
        neutral: {
          '01':'#F2F2F2',
          '02':'#E6E6E6',
          '03':'#D9D9D9',
          '04':'#CCCCCC',
          '05':'#B3B3B3',
          '06':'#999999',
          '07':'#808080',
          '08':'#666666',
          '09':'#4D4D4D',
          10:'#333333',
          11:'#262626',
          12:'#1A1A1A',
          13:'#0D0D0D',
          14:'#000000',
        },
        secondry: {
          '01':'#F1F5F6',
          '02':'#E2EAED',
          '03':'#D4E0E4',
          '04':'#C5D5DB',
          '05':'#A9C1CA',
          '06':'#8CACB8',
          '07':'#6F97A6',
          '08':'#597985',
          '09':'#435B64',
          10:'#2C3C42',
          11:'#212D32',
          12:'#161E21',
          13:'#0B0F11',
          14:'#000000',
        },
        accent: {
          '01':'#F9FBF5',
          '02':'#F3F6EB',
          '03':'#EDF2E0',
          '04':'#E7EED6',
          '05':'#DCE5C2',
          '06':'#D0DDAD',
          '07':'#C4D499',
          '08':'#A5B37F',
          '09':'#869364',
          10:'#67724A',
          11:'#58623D',
          12:'#48522F',
          13:'#394122',
          14:'#293115',
        },
        

      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}

