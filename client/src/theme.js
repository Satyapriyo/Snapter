export const colorToken = {
  gray: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2C",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

// MUI THEME SETTINGS
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorToken.primary[200],
              main: colorToken.primary[500],
              light: colorToken.primary[800],
            },
            neutral: {
              dark: colorToken.gray[100],
              main: colorToken.gray[200],
              mediumMain: colorToken.gray[300],
              medium: colorToken.gray[400],
              light: colorToken.gray[700],
            },
            background: {
              default: colorToken.gray[900],
              alt: colorToken.gray[800],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              dark: colorToken.primary[700],
              main: colorToken.primary[500],
              light: colorToken.primary[50],
            },
            neutral: {
              dark: colorToken.gray[700],
              main: colorToken.gray[500],
              mediumMain: colorToken.gray[400],
              medium: colorToken.gray[300],
              light: colorToken.gray[50],
            },
            background: {
              default: colorToken.gray[10],
              alt: colorToken.gray[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubic", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubic", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubic", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubic", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubic", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubic", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubic", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
