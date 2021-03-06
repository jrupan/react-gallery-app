import React, { Component } from "react";

/**
 * Simple LightBox class for individual image display
 */
class LightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const photo = this.props.photo;
    if (this.props.photo) {
      return (
        <div
          className="row lightbox"
          // setting false as a param for onPhotoClick method to hide photo in light box
          onClick={() => this.props.onPhotoClick(false)}
        >
          <div className="col-md-9 col-sm-12">
            <img alt="" width="100%" src={this.props.photo.images[1].url} />
          </div>
          <div className="col-md-3 col-cm-12">
            <div className="item">
              <div className="title">Name:</div>
              <div className="detail">{photo.name}</div>
            </div>
            <div className="item">
              <div className="title">Author:</div>
              <div className="detail">{photo.user.fullname}</div>
            </div>
            <div className="item">
              <div className="title">Rating</div>
              <div className="detail">{photo.rating}</div>
            </div>
            <div className="item">
              <div className="title">Description:</div>
              <div className="detail">{photo.description}</div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default LightBox;
