
tailwind.config = {
  theme: {
    extend: {
      colors: {
        headerColor: '#30344E',
        btnColor: '#FFFFFF',
        btnColor1: '#FD5F36',
        serviceBg: '#FAFAFA',
        endBg: '#0A0B0B',
        
      },
      maxWidth: {
        headerContainer: '1170px',
      },
      backgroundImage: {
        headerBg: "url('./images/header (3).png')",
        teamBg: "url('./images/teamBg.png')",
        counterBg: "url('./images/counter.png')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      fontFamily:{
      popin:["poppin"],
      inter:["inter"],
      },
        
    }
  }
}