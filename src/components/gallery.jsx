import React, { Component } from "react";
import setting from "../setting.json"; // Importing consumer key from local file
import ImageComponent from "./imageComponent"; // Importing image component

/**
 * Control entire gallery component
 */
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null }; // initializing data with null
  }

  /**
   * Getting images from API and setting state data
   * @param {number} pageNumber
   */
  getImages(pageNumber = 1) {
    let apiUrl = `https://api.500px.com/v1/photos?feature=popular&image_size=20,2048&page=${pageNumber}&consumer_key=${
      setting.consumer_key
    }`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  componentDidMount() {
    // Initialize data from API after the component mount
    this.getImages();
  }

  render() {
    // object destructuring data
    const { data } = this.state;

    return (
      <div className="container">
        <div className="row">
          <h1>Gallery</h1>
        </div>
        <div className="row m1">Pagination</div>
        <div className="row">
          {data &&
            data.photos.map((photo, index) => {
              // loading images from data
              return <ImageComponent key={index} photo={photo} />;
            })}
        </div>
      </div>
    );
  }
}

export default Gallery;
