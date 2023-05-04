import "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [beastModal, setBeastModal] = useState({});

  function handleModal(beast) {
    setShowModal(!showModal);
    setBeastModal(beast);
  }

  return (
    <div className="App">
      <Header />
      <Main handleModal={handleModal} />
      {showModal && <SelectedBeast beastModal={beastModal} handleModal={handleModal} />}
      <Footer />
    </div>
  );
}

export default App;
