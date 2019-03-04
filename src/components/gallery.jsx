import React, { Component } from "react";
import setting from "../setting.json"; // Importing consumer key from local file

/**
 * Control entire gallery component
 */
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Gallery</h1>
        </div>
        <div className="row m1">Pagination</div>
        <div className="row">Images</div>
      </div>
    );
  }
}

export default Gallery;
