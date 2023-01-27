import "./App.css";
import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./Component/Layout";
import Logo from "./Component/Logo";
import TopBar from "./Component/TopBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Doc from "./Component/Doc";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doc" element={<Doc />} />
      </Routes>
      </QueryClientProvider>
  );
}

export default App;
