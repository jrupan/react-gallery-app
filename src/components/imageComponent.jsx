import React, { Component } from "react";

class ImageComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="image-item">
        <img
          src={this.props.photo.images[0].url}
          className="img-responsive"
          alt=""
        />
      </div>
    );
  }
}

export default ImageComponet;
