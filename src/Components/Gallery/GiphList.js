import React, {Component, useState, useEffect} from "react";
import axios from "axios";
import { giphy, trending, search, translate } from "../../Config/giphy";
import { Giph } from "./Giph";

// pass in the visible giphs
function GiphList(props){
  const [giphs, setGiphs] = useState([])
  useEffect(()=> setGiphs([]),[props.giphs])
  useEffect(()=> setGiphs(props.giphs),[props.giphs])
  return (
    giphs.map((item, i) => (
      <Giph
        key={i}
        id={item.id}
        label={item.title}
        animatedSrc={item.images.original.url}
        src={item.images.original_still.url}
        // handleClick={() => this.props.openModal(item)}
      />
    )))
  }


  // .get(`https://${giphy}/${translate}${keyword}`)


  // TODO: show results on enter (submit).
  //       load data immediately.

class GiphListController extends Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined, showData: undefined, updating: false};
  }

  handleScroll = (e) => {
    let scrollTop = e.path[1].scrollY;
    this.props.handleScroll(scrollTop);
  }

  updateGiphList = (data) => {
      this.setState({showData: data })
  }
  searchGiphyFor = keyword => {
    this.setState({data: []})
    if (keyword.length === 0) {
      axios
        .get(`https://${giphy}/${trending}`)
        .catch(err => console.warn(err))
        .then(resp => {
          const data = resp.data.data;
          this.setState({ data, showData: data});
        });
    } else {
      // pause between queries
      setTimeout(()=>{
        axios
        .get(`https://${giphy}/${search}/${keyword}`)
        .catch(err => console.warn(err))
        .then(resp => {
          const data = resp.data.data;
          this.setState({ data });
        });
      },100) 
    }
  };
  componentDidUpdate(prevProps,prevState) {
    if (this.props.searchKey !== prevProps.searchKey) {
      this.searchGiphyFor(this.props.searchKey);
    }
    if(this.state.data !== prevState.data){
      this.updateGiphList(this.state.data);
    }
  }
  componentDidMount() {
    this.searchGiphyFor(this.props.searchKey || "");
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
  }

  render() {
    const { showData } = this.state;
    return (
        <section className="grid-content wrapper">
          { showData && <GiphList giphs={showData} /> }
        </section>
    );
  }
}
export default GiphListController;
