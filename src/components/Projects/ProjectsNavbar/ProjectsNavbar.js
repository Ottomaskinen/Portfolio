import React, { Component } from 'react';
import './ProjectsNavbar.css';
import ProjectsMenuToggleButton from '../ProjectsHamburgerMenu/ProjectsMenuToggleButton';
import ProjectsHamburgerMenu from '../ProjectsHamburgerMenu/ProjectsHamburgerMenu';
import Resume from "../../../pdfs/Emil-Ottosson-Resume.pdf";
import Button from '../../Button/Button';


class ProjectsNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburgerMenuOpen: false,
      hamburgerMenuItem1Shown: false,
      hamburgerMenuItem2Shown: false,
      hamburgerMenuItem3Shown: false,
      hamburgerMenuItem4Shown: false,
      hamburgerMenuItem5Shown: false,
      hamburgerMenuItem6Shown: false,
      navbarScroll: false,
    };
    this.menuToggleClickHandler = this.menuToggleClickHandler.bind(this);
    this.resumeButtonColor = "transparent"
    this.contactButtonColor = "transparent"
  }

  menuToggleClickHandler() {
    if(!this.state.hamburgerMenuOpen) {
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem1Shown: true,
        });
      }, 100);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem2Shown: true,
        });
      }, 200);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem3Shown: true,
        });
      }, 300);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem4Shown: true,
        });
      }, 400);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem5Shown: true,
        });
      }, 500);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem6Shown: true,
        });
      }, 600);
    } else {
      this.setState ({
        hamburgerMenuItem1Shown: false,
        hamburgerMenuItem2Shown: false,
        hamburgerMenuItem3Shown: false,
        hamburgerMenuItem4Shown: false,
        hamburgerMenuItem5Shown: false,
        hamburgerMenuItem6Shown: false,
      });
    }
    this.setState( {
      hamburgerMenuOpen: !this.state.hamburgerMenuOpen
    });
  };

  toggleScrollingClasses = () => {
    var scroll = window.scrollY;
    if(scroll !== 0) {
      this.resumeButtonColor = "green"
      this.contactButtonColor = "red"
      this.setState( {
        navbarScroll: true,
      });
    } else {
      this.resumeButtonColor = "transparent"
      this.contactButtonColor = "transparent"
      this.setState( {
        navbarScroll: false,
      });
    }
  }

  render() {

    window.addEventListener('scroll', this.toggleScrollingClasses);

    return (
      <React.Fragment>
      <div className={"projects-navbar-container " + (this.state.navbarScroll ? "" : `${this.props.mainColor}`)}>
        <div className={"projects-navbar " + (this.state.navbarScroll ? "" : `${this.props.mainColor}`)} >
          <div className="projects-hamburger-icon">
            <ProjectsMenuToggleButton click={this.menuToggleClickHandler} shown={this.state.hamburgerMenuOpen}/>
          </div>
          <div className="projects-logo-container">
            <a className={"projects-navbar-logo " + (this.state.navbarScroll ? "scrolled" : "")} href="/" onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              EMIL OTTOSSON
            </a>
          </div>
          <div className="projects-menu-container">
            <a className={"projects-menu-text " + (this.state.navbarScroll ? "scrolled" : "")} href="/" onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              Workflow
            </a>
            <a className={"projects-menu-text " + (this.state.navbarScroll ? "scrolled" : "")} href="/" onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              Portfolio
            </a>
            <a className={"projects-menu-text " + (this.state.navbarScroll ? "scrolled" : "")} href="/" onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              About
            </a>
            <a className={"projects-menu-text " + (this.state.navbarScroll ? "scrolled" : "")} href="/" onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              Articles
            </a>
            <Button 
              color={this.resumeButtonColor}
              buttonText="Resume"
              buttonStyle={{padding: '11px 20px', marginRight: '8px'}}
              buttonHref={Resume}
              target="_blank"
            />
            <Button 
              color={this.contactButtonColor}
              buttonText="Contact me"
              buttonStyle={{padding: '11px 20px'}}
              buttonHref="mailto:emil@emilottosson.com"
            />
          </div>
        </div>
      </div>
      <ProjectsHamburgerMenu 
        mainColor={this.props.mainColor}
        shown={this.state.hamburgerMenuOpen} 
        hamburgerMenuItem1Shown={this.state.hamburgerMenuItem1Shown} 
        hamburgerMenuItem2Shown={this.state.hamburgerMenuItem2Shown}
        hamburgerMenuItem3Shown={this.state.hamburgerMenuItem3Shown}
        hamburgerMenuItem4Shown={this.state.hamburgerMenuItem4Shown}
        hamburgerMenuItem5Shown={this.state.hamburgerMenuItem5Shown}
        hamburgerMenuItem6Shown={this.state.hamburgerMenuItem6Shown}
        toggle={this.menuToggleClickHandler}/>
      </React.Fragment>
    );
  }
}

export default ProjectsNavbar;
