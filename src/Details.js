import React, { Component } from "react";
import champions from "./Champions"


import "./Details.css";
class Details extends Component {
  state = {
    info: null,
    selectSkill: "details-skill-p",
    currentSelectSkillDetail: null,
    currentSelectSkillName: null,
  };
  componentWillMount() {
    //get the :id at the end of the route
    const { id } = this.props.match.params;
    let result = champions.filter(champ => champ.id === id);
    this.setState({info: result[0]})
  }
 
  changeSkill = (e) => {
    let skillNow = "details-skill-" + e.target.id;

    if (e.target.id === "p") {
      var currentSelectSkillDetail = this.state.info.pDescription;
      var currentSelectSkillName = this.state.info.pName;
    }else if (e.target.id === "q") {
      var currentSelectSkillDetail = this.state.info.qDescription;
      var currentSelectSkillName = this.state.info.qName;
    }else if (e.target.id === "w") {
      var currentSelectSkillDetail = this.state.info.wDescription;
      var currentSelectSkillName = this.state.info.wName;
    }else if (e.target.id === "e") {
      var currentSelectSkillDetail = this.state.info.eDescription;
      var currentSelectSkillName = this.state.info.eName;
    }else if (e.target.id === "r") {
      var currentSelectSkillDetail = this.state.info.rDescription;
      var currentSelectSkillName = this.state.info.rName;
    }else {
      alert("select wrong skills ??? something wrongs!")
    }

    this.setState({ selectSkill: skillNow ,currentSelectSkillDetail, currentSelectSkillName})
  }

  render() {
    const {name, title, backgroundImage, biography, pImage, qImage, wImage, eImage, rImage, pName, pDescription, roles} = this.state.info;
    return (
      <div className="details">
        <div to="/details/aatrox" className="details-box">
          <img className="details-image" src={backgroundImage} alt="aatrox-red" />
        </div>
        <section className="details-section">
          <a href="/" className="backHome"><i className="fas fa-long-arrow-alt-left"></i></a>
          <h1 className="details-title">{name}</h1>
          <p className="details-sub-title">{title}</p>
          <div className="details-roles ">
            {roles.map((r, index) => (
              <p key={index} className={`details-role ${r.name}` }>{r.name}</p>
            ))}
          </div>
          <h2 className="bio-title">Biography</h2>
          <section className="bio-box">
            <p className="bio-p">
              {biography}
            </p>
          </section>
          <section className="details-skills">
            <img id="p" onClick={e => this.changeSkill(e)} 
              className={this.state.selectSkill === "details-skill-p" ? "details-skill details-skill-select" : "details-skill"}
              src={pImage} alt="skill-passive" 
            />
            <img id="q" onClick={e => this.changeSkill(e)}
              className={this.state.selectSkill === "details-skill-q" ? "details-skill details-skill-select" : "details-skill"} 
              src={qImage} alt="skill-q" 
            />
            <img id="w" onClick={e => this.changeSkill(e)} 
              className={this.state.selectSkill === "details-skill-w" ? "details-skill details-skill-select" : "details-skill"} 
              src={wImage} alt="skill-w" 
            />
            <img id="e" onClick={e => this.changeSkill(e)} 
              className={this.state.selectSkill === "details-skill-e" ? "details-skill details-skill-select" : "details-skill"} 
              src={eImage} alt="skill-e" 
            />
            <img id="r" onClick={e => this.changeSkill(e)} 
              className={this.state.selectSkill === "details-skill-r" ? "details-skill details-skill-select" : "details-skill"} 
              src={rImage} alt="skill-r"
            />
          </section>
          <section className="details-skills-info">
            <h1 className="details-skills-info-h1">{this.state.currentSelectSkillName ? this.state.currentSelectSkillName : pName}</h1>
            <p className="details-skills-info-p">
             {this.state.currentSelectSkillDetail ? this.state.currentSelectSkillDetail : pDescription }
            </p>
          </section>
        </section>
      </div>
    );
  }
}

export default Details;
