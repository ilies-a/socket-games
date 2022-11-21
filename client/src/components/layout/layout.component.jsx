import React from "react";
import Header from "../header/header.component";
import "./layout.styles.scss";

class Layout extends React.Component{
  render(){
    return <div>
      <Header/>
      <div className="content">
        {this.props.children}
      </div>
    </div>
  }
}

export default Layout;