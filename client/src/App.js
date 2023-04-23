import { Routes, Route } from "react-router-dom";

import { useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";

import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import SummaryText from "./pages/SummaryText";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConvertor from "./pages/JsConvertor";
import ImageGenerator from "./pages/ImageGenerator";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navbar />
          <Toaster />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/summary" element={<SummaryText />} />
            <Route path="/paragraph" element={<Paragraph />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/jsconvertor" element={<JsConvertor />} />
            <Route path="/imagegenerator" element={<ImageGenerator />} />
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
