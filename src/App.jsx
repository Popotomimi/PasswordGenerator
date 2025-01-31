import Footer from "./components/Footer";
import Nav from "./components/Nav";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <>
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
