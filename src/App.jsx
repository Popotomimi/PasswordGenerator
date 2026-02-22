import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="dark" />
      <Nav />
      <h1 className="first-h1">
        Gerador de senhas do <span>Robertinho Dev.</span>{" "}
      </h1>
      <PasswordGenerator />
      <Footer />
    </>
  );
}

export default App;
