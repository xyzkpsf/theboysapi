import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./Component/Layout";
import Logo from "./Component/Logo";
import TopBar from "./Component/TopBar";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <TopBar />
        <Logo />
        <Layout />
      </QueryClientProvider>
    </div>
  );
}

export default App;
