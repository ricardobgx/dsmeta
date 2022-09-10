import Main from "./components/Main";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Main />
    </>
  );
};

export default App;
