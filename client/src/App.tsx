import './App.css';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import TopBar from './Component/TopBar';
import Home from './Component/Home';
import About from './Component/About';
import Docs from './Component/Docs';
import Footer from './Component/Footer';
import Box from '@mui/material/Box';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        {/* <Box sx={{ minHeight: '100%' }}> */}
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* </Box> */}
        <Footer />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
