import React, {Component} from "react";
import axios from "axios";
import dotenv from "dotenv"
import { giphy, trending, search, translate } from "../../API/giphy";
import { Giph } from "./Giph";

class GiphList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined, showData: undefined };
  }
  handleScroll = (e) => {
    let scrollTop = e.path[1].scrollY;
    this.props.handleScroll(scrollTop);
    // console.log(scrollTop);    
}
  searchGiphyFor = keyword => {
    if (keyword.length === 0) {
      axios
        .get(`https://${giphy}/${trending}`)
        .catch(err => console.warn(err))
        .then(resp => {
          const data = resp.data.data;
          console.log(data);
          this.setState({ data, showData: data });
        });
    } else {
      axios
        .get(`https://${giphy}/${translate}${keyword}`)

        // .get(`${API}${search}${keyword}`)
        .catch(err => console.warn(err))
        .then(resp => {
          const data = resp.data.data;
          this.setState({ data, showData: data });
        });
    }
  };
  componentDidUpdate(prevProps) {
    if (this.props.searchKey !== prevProps.searchKey) {
      this.searchGiphyFor(this.props.searchKey);
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
    const { data } = this.state;
    return (
      // <section id="grid">
        <div className="grid-content wrapper">
          {data &&
            data.length > 0 &&
            data.map((item, i) => (
              <Giph
                key={i}
                id={item.id}
                label={item.title}
                animatedSrc={item.images.original.url}
                src={item.images.original_still.url}
                // handleClick={() => this.props.openModal(item)}
              />
            ))}
        </div>
      // </section>
    );
  }
}
export default GiphList;
