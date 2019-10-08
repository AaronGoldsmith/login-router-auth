import React, {useState, useCallback} from "react";
import GiphList from "../Components/Gallery/GiphList";
// import Modal from "../components/Modal";
import Search from "../Components/Gallery/Search";
import "../styles.css";

function Home() {
  const [showModal, setModal] = useState(false);
  const [key, setKey] = useState(null);
  const [scrolled, setScrolled] = useState(true);
  
  const scrollHandler = (top) => {
    top <=50 ? setScrolled(true) : setScrolled(false)
  }

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
        handleScroll={(top)=> scrollHandler(top)}
        searchKey={key}
        openModal={e => {
          setModal(e);
        }}
      />
    </div>
  );
}
export default Home;
