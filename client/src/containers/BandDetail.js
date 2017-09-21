import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandDetail extends Component {
	render () {
		if (!this.props.band) {
			return <div>Select a band:</div>;
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.band.name}</div>
				<div><img src={this.props.band.image} /></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		band: state.selectedBand
	};
}

export default connect(mapStateToProps)(BandDetail);