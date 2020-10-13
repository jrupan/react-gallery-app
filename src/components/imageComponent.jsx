import React, { Component } from "react";

class ImageComponet extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const nsfw = this.props.photo.nsfw;
		const nsfwClass = nsfw ? 'nsfw' : '';
		const orientation = this.props.photo.width > this.props.photo.height ? 'landscape' : 'portrait';
		return (
			<div
				onClick={e => this.props.onPhotoClick(this.props.photo, e)}
				className={`image-item ${nsfwClass} ${orientation}`}
			>
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
