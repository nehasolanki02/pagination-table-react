import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import getData from "./data";

export default class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      data: getData(),
      limit: 10,
    };
  }

  pageNum = () => {
    return Math.ceil(this.state.data.length / this.state.limit);
  };

  handleChange = (e) => {
    this.setState({
      limit: e.target.value,
      currentPage: 1,
    });
  };

  prevPageFun = () => {
    if (this.state.currentPage > 1)
      this.setState({ currentPage: this.state.currentPage - 1 });
  };

  nextPageFun = () => {
    if (this.state.currentPage < this.state.data.length / this.state.limit)
      this.setState({ currentPage: this.state.currentPage + 1 });
  };
  lastPageFun = () => {
    this.setState({ currentPage: this.state.data.length / this.state.limit });
  };
  firstPageFun = () => {
    if (this.state.currentPage > 1) this.setState({ currentPage: 1 });
  };

  render() {
    console.log("limit", this.state.limit);
    console.log("currentPage", this.state.currentPage);
    let { limit, data, currentPage } = this.state;
    let filteredArray = data;
    let si = (currentPage - 1) * limit;
    let eidx = parseInt(si) + parseInt(limit);
    filteredArray = data.slice(si, eidx);
    console.log("Si", si);
    console.log("eidx", eidx);
    console.log("filteredArr", filteredArray);
    si = 0;
    eidx = 0;

    return (
      <div>
        <table className="table" style={{ width: "100%" }}>
          <Header />
          <Body filteredArray={filteredArray} />
          <Footer
            stateData={this.state}
            firstPageFun={this.firstPageFun}
            lastPageFun={this.lastPageFun}
            nextPageFun={this.nextPageFun}
            prevPageFun={this.prevPageFun}
            handleChange={this.handleChange}
          />
        </table>
      </div>
    );
  }
}
