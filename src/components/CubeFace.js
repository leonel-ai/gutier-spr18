import React, { Component } from 'react';

class CubeFace extends Component {
  constructor(props) {
    super(props);
  }

	render() {
    const {
      className,
      content
    } = this.props;

		return (
			<div className={`cube-face ${className}`}>
				{content}
			</div>
		);
	}
}

export default CubeFace;
