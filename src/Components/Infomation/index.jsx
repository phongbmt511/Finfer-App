import React, { Component } from "react";

class Infomation extends Component {
  render() {
    const { followers, following, public_gists, public_repos } =this.props.user;
    return (
      <div>
        <div className="Container_Info text-center border border-2 mt-3 p-3">
           <button className="btn btn-primary m-2">Follower :{followers}</button>
           <button className="btn btn-success m-2">Following :{following}</button>
           <button className="btn btn-light m-2">Public repos :{public_repos}</button>
           <button className="btn btn-dark m-2">Public gists :{public_gists}</button>
        </div>
      </div>
    );
  }
}

export default Infomation;
