import React, { Component } from "react";
import "./Visit.css";

class VisitProfile extends Component {
  render() {
    const { avatar_url, bio, company, location, name, blog, login, html_url } =
      this.props.user;
    return (
      <div>
        <div className="container_visit d-flex justify-content-between mt-5 border border-2 p-4">
          <div className="container_visit_body ">
            <div className="container_visit_body_image ">
              <div
                className="image_left text-center"
                style={{ width: "450px" }}
              >
                <img src={avatar_url} alt="img" />
              </div>
            </div>

            <div className="image_left_top text-center">
              <h2>{name}</h2>
              <span>
                <strong>Location:</strong>
                {location}
              </span>
            </div>
          </div>
          <div className="image_right">
            <h3>Bio</h3>
            <p>{bio}</p>
            <p>
              <strong>Username:</strong>
              {login}
            </p>
            <p>
              <strong>Company:</strong>
              {company}
            </p>
            <p>
              <strong>Blog:</strong>
              <a href={blog} style={{ color: "blue" }}>
                {blog}
              </a>
            </p>
            <button className="btn btn-dark mt-3">
              Visit Github profile <a href={html_url}></a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VisitProfile;
