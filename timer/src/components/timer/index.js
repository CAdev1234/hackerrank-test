import React, { Component, useEffect, useState } from "react";
import "./index.css"

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			second: 0,
			runtTime: true
		}
		this.toggleTimer = this.toggleTimer.bind(this);
	}
	componentDidMount() {
		this.setState({second: this.props.initial});
		this.startTimer();
	}
	startTimer = () => {
		this.myInterval = setInterval(() => {
			const {second} = this.state;
			if (second > 0) {
				this.setState(({second}) => ({
					second: second - 1
				}))
			}else if (second === 0) {
				clearInterval(this.myInterval);
			}
		}, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.myInterval);
	}
	stopTimer() {
		clearInterval(this.myInterval);
	}
	toggleTimer() {
		let {runtime} = this.state;
		if (runtime) {
			this.startTimer();
		}else {
			this.stopTimer();
		}
		this.setState(({runtime}) => ({
			runtime: !runtime
		}))
	}
	render() {
		const {second} = this.state;
		return (
			<div className="mt-100 layout-column align-items-center justify-content-center">
				<div className="timer-value" data-testid="timer-value">{second}</div>
				<button className="large" data-testid="stop-button" onClick={this.toggleTimer}>Stop Timer</button>
			</div>
		);
	}
	

}