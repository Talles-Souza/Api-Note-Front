import React, { useEffect, useState } from 'react';
import SignUp from './views/login/index.jsx'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle.js';
import { darkTheme, lightTheme } from './utils/themeColors.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Root } from './routes/routes.jsx';
import { AuthenticationProvider } from './service/context/Token.jsx';
function App() {

  const savedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(savedDarkMode === "true");
  const [size, setSize] = useState(() => {
    const savedFontSize = localStorage.getItem("fontSize");
    return savedFontSize ? parseInt(savedFontSize) : 20;
  });

  const [increaseCount, setIncreaseCount] = useState(() => {
    const savedIncreaseCount = localStorage.getItem("increaseCount");
    return savedIncreaseCount ? parseInt(savedIncreaseCount) : 0;
  });

  const [decreaseCount, setDecreaseCount] = useState(() => {
    const savedDecreaseCount = localStorage.getItem("decreaseCount");
    return savedDecreaseCount ? parseInt(savedDecreaseCount) : 0;
  });

  const maxCount = 3;

  useEffect(() => {
    localStorage.setItem("fontSize", size.toString());
  }, [size]);

  useEffect(() => {
    localStorage.setItem("increaseCount", increaseCount.toString());
  }, [increaseCount]);

  useEffect(() => {
    localStorage.setItem("decreaseCount", decreaseCount.toString());
  }, [decreaseCount]);
  useEffect(() => {
    localStorage.setItem("fontSize", size.toString());
  }, [size]);

  const increaseFontSize = () => {
    if (increaseCount < maxCount) {
      setSize((prevSize) => prevSize + 2);
      setIncreaseCount((prevCount) => prevCount + 1);

      if (increaseCount + 1 === maxCount) {
        setDecreaseCount(0);
      }
    }
  };

  const decreaseFontSize = () => {
    if (decreaseCount < maxCount) {
      setSize((prevSize) => prevSize - 2);
      setDecreaseCount((prevCount) => prevCount + 1);

      if (decreaseCount + 1 === maxCount) {
        setIncreaseCount(0);
      }
    }
  };
  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
      setSize(parseInt(savedFontSize));
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const HandledarkMode = () => {
    setDarkMode(!darkMode);
  };


  const theme = {
    ...(darkMode ? darkTheme : lightTheme),
    font: {
      size: `${size}px`,
    },
  };

  const checar = darkMode ? true : false;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthenticationProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Root />
      </AuthenticationProvider>
    </ThemeProvider>
  )
}

export default App