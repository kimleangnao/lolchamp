import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import champions from "./Champions.js"

import "./Home.css";
class Home extends Component {
  state = {
    all: champions,
    selectSort: null,
    mobileRole: "select a role",
    mobileDisplay: false,
    mobileCaret: false,
  }

  changeSort = (e) => {
    if (e.target.id === "all"){
      this.setState({selectSort: null})
    }else if (e.target.id === "fighter"){
      let result = this.state.all.filter((champ) => champ.type === "fighter")
      this.setState({ selectSort: result})
    }else if (e.target.id === "mage"){
      let result = this.state.all.filter((champ) => champ.type === "mage")
      this.setState({ selectSort: result})
    }else if (e.target.id === "assassin"){
      let result = this.state.all.filter((champ) => champ.type === "assassin")
      this.setState({ selectSort: result})
    }else if (e.target.id === "tank"){
      let result = this.state.all.filter((champ) => champ.type === "tank")
      this.setState({ selectSort: result})
    }else if (e.target.id === "marksmen"){
      let result = this.state.all.filter((champ) => champ.type === "marksmen")
      this.setState({ selectSort: result})
    }else {
      alert("nothing matches! :(");
    };
  };

  changeMobileRole  = (e) => {
    if (e.target.id === "all"){
      this.setState({selectSort: null, mobileRole: e.target.id, mobileCaret: !this.state.mobileCaret})
    }else if (e.target.id === "fighter"){
      let result = this.state.all.filter((champ) => champ.type === "fighter")
      this.setState({ selectSort: result,  mobileDisplay: !this.state.mobileDisplay, mobileCaret: !this.state.mobileCaret})
    }else if (e.target.id === "mage"){
      let result = this.state.all.filter((champ) => champ.type === "mage")
      this.setState({ selectSort: result, mobileRole: e.target.id, mobileDisplay: !this.state.mobileDisplay, mobileCaret: !this.state.mobileCaret})
    }else if (e.target.id === "assassin"){
      let result = this.state.all.filter((champ) => champ.type === "assassin")
      this.setState({ selectSort: result, mobileRole: e.target.id, mobileDisplay: !this.state.mobileDisplay, mobileCaret: !this.state.mobileCaret})
    }else if (e.target.id === "tank"){
      let result = this.state.all.filter((champ) => champ.type === "tank")
      this.setState({ selectSort: result, mobileRole: e.target.id, mobileDisplay: !this.state.mobileDisplay, mobileCaret: !this.state.mobileCaret})
    }else if (e.target.id === "marksmen"){
      let result = this.state.all.filter((champ) => champ.type === "marksmen")
      this.setState({ selectSort: result, mobileRole: e.target.id, mobileDisplay: !this.state.mobileDisplay, mobileCaret: !this.state.mobileCaret})
    }else {
      alert("nothing matches! :(");
    };
  }

  changeMobileDisplay = () => {
    this.setState({ mobileDisplay: !this.state.mobileDisplay, mobileCaret: !this.state.mobileCaret})
  }
  
  render() {
    const {all: allChampions, selectSort} = this.state;
    return (
      <div className="home">
        <h1 className="title">Champions</h1>
        <div className="roles">
          <button id="all" className="button-role" onClick={this.changeSort}>All</button>
          <button id="fighter" className="button-role" onClick={this.changeSort}>Fighter</button>
          <button id="mage" className="button-role" onClick={this.changeSort}>Mages</button>
          <button id="assassin" className="button-role" onClick={this.changeSort}>Assassins</button>
          <button id="tank" className="button-role" onClick={this.changeSort}>Tank</button>
          <button id="marksmen" className="button-role" onClick={this.changeSort}>Marksmen</button>
        </div>
        {/*for mobile and Ipad size screen, need event to make roles hidden show or hide*/}
        <div className="mobile-roles">
          <button id="all" className="button-role" onClick={this.changeMobileRole}>All</button>
          <button  className="button-role" onClick={this.changeMobileDisplay}>{this.state.mobileRole}
            <i className={this.state.mobileCaret ? "fas fa-caret-up"  : "fas fa-caret-down" }></i></button>
        </div>
       {/*need and even changing hide and show here*/} 
        <div className={this.state.mobileDisplay ? "hidden-roles-show" : "hidden-roles-hide"}> 
          <div className="hidden-roles"> 
            {/*need event to select role and set a state to that id,
            and the button above select role will show whatever select*/}
            <button id="fighter" className="hidden-button-role" onClick={this.changeMobileRole}>Fighter</button>
            <button id="mage" className="hidden-button-role" onClick={this.changeMobileRole}>Mages</button>
            <button id="assassin" className="hidden-button-role" onClick={this.changeMobileRole}>Assassins</button>
            <button id="tank" className="hidden-button-role" onClick={this.changeMobileRole}>Tank</button>
            <button id="marksmen" className="hidden-button-role" onClick={this.changeMobileRole}>Marksmen</button>
          </div>
        </div>
        <section className="champions">
        {selectSort ?  selectSort.map((select) => (
            <NavLink key={select.id} to={"/details/"+select.id} className="champions-box">
              <img className="champions-image" src={select.homeImage} alt={select.name}/>
             <p className="champions-name">{select.name}</p>
          </NavLink>)) : allChampions.map((champ) => (
            <NavLink key={champ.id} to={"/details/"+champ.id} className="champions-box">
              <img className="champions-image" src={champ.homeImage} alt={champ.name}/>
             <p className="champions-name">{champ.name}</p>
          </NavLink>
          ))
        }
  
        </section>
      </div>
    );
  }
}
export default Home;
