import React, {useState, useLayoutEffect} from "react";
import GiphList from "../Components/Gallery/GiphList";
// import Modal from "../components/Modal";
import Search from "../Components/Gallery/Search";
import "../styles.css";

function Home() {
  const [showModal, setModal] = useState(false);
  const [key, setKey] = useState(null);
  const [scrolled, setScrolled] = useState(true);
  

  return (
    <div className="App">
      
      <Search
        useMag={key && key.length > 0}
        top={scrolled}
        updateVal={input => {
          setKey(input);
        }}
      />
      {/* <Modal showing={showModal} onClose={() => setModal(null)} /> */}
      <GiphList
        handleScroll={(top)=> top<=80?setScrolled(true):setScrolled(false)}
        searchKey={key}
        openModal={e => {
          setModal(e);
        }}
      />
    </div>
  );
}
export default Home;
