import { createTheme } from "@mui/material/styles";

const customTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#1c2865",
            },
            error: {
              main: "#d61f56",
            },
            secondary: {
              main: "#f3f4fa",
            },
            info: {
              main: "#fff",
              dark: "#F6F9FC",
            },
            warning: {
              main: "#f8b800",
            },
          }
        : {
            // palette values for dark mode
            background: {
              default: "black",
            },
          }),
    },
    shadows: {
      header: "rgba(100, 100, 111, 0.1) 0px 7px 20px 0px;",
    },
  });
};

export default customTheme;
