import React, { Component } from "react";
import './item.css';

class Item extends Component {
  render() {
    const { repos } = this.props;
    return (
      <div>
        <div className="Container_Items">
          <h1>Repositories</h1>
          <div className="Container_Items_full  row ">
            {repos.map((items) => {
              const { name, description, clone_url, forks_url} = items;
              return (
                <div className="Items_body border border-2 p-3">
                  <a
                    href={clone_url}
                    style={{ color: "blue", textDecoration: "none" }}
                  >
                    <h2>{name}</h2>
                  </a>
                  <strong>
                    Forked From:  
                    <a href={forks_url} style={{color:'blue',textDecoration:"none"}}>{forks_url}</a>
                  </strong>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
