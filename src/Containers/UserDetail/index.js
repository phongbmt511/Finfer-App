import React, { Component } from "react";
import axios from "axios";
import Button from "../../Components/Button";
import VisitProfile from "../../Components/VisitProfile";
import Infomation from "../../Components/Infomation";
import Item from "../../Components/Item";

class UserDetail extends Component {
  state = {
    user: {},
    repos: [],
  };
  async componentDidMount() {
    const login = this.props.match.params.login;

    const response = await axios.get(`https://api.github.com/users/${login}`);
    const responseRepo = await axios.get(
      `https://api.github.com/users/${login}/repos`
    );

    this.setState({
      user: response.data,
      repos: responseRepo.data,
    });
  }

  onBackToHome = () => {
    // this.props.history.push("/");
    this.props.history.goBack();
  };
  render() {
    const { user, repos } = this.state;
    return (
      <div>
        <Button
          label="Back to home"
          onClick={this.onBackToHome}
          color="light"
          
        />
        <span>Hierable</span>
        <VisitProfile user={user}/>
        <Infomation user={user}/>
        <Item repos={repos}/>
        
      </div>

    );
  }
}

export default UserDetail;
