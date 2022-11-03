import React, { useState } from "react";
import "./Game.css";

export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			]
		};
		this.addNum(this.state.data);
		this.addNum(this.state.data);
		const keyDownHandler = event => {
			console.log('user pressed ' + event.key);
			if(event.key === 'arrow left'){
				event.preventDefault();
				this.left();
			}else if(event.key === 'arrow right'){
				event.preventDefault();
				this.right();
			}else if(event.key === 'arrow up'){
				event.preventDefault();
				this.up();
			}else if(event.key === 'arrow down'){
				event.preventDefault();
				this.down();
			}
		};
		document.addEventListener('keydown', keyDownHandler);
	}

	addNum(newGrid) {
		let added = false;
		let gridFull = false;
		let attempts = 0;
		while (!added) {
			if (gridFull) {
				break;
			}
			let randx = Math.floor(Math.random() * 4);
			let randy = Math.floor(Math.random() * 4);

			attempts++;

			if (newGrid[randx][randy] === 0) {
				newGrid[randx][randy] = Math.random() > 0.5 ? 2 : 4;
				added = true;
			}

			if (attempts > 50) {
				gridFull = true;
			}
		}
	}

	left = (dummy) => {
		let oldGrid = this.state.data;
		let newGrid = JSON.parse(JSON.stringify(this.state.data));
		for (let i = 0; i < 4; i++) {
			let j = newGrid[i];
			let tail = 0;
			let head = 1;
			while (tail < 4) {
				if (head === 4) {
					head = tail + 1;
					tail++;
					continue;
				}
				if (j[tail] === 0 && j[head] === 0) {
					head++;
				} else if (j[tail] !== 0 && j[head] === 0) {
					head++;
				} else if (j[tail] === 0 && j[head] !== 0) {
					j[tail] = j[head];
					j[head] = 0;
					head++;
				} else if (j[tail] !== 0 && j[head] !== 0) {
					if (j[tail] === j[head]) {
						j[tail] = j[tail] + j[head]
						j[head] = 0;
						head = tail + 1;
						tail++;
					} else {
						tail++;
						head = tail + 1;
					}
				}
			}
		}
		this.refresh(oldGrid, newGrid, dummy);
	};

	right = (dummy) => {
		let oldGrid = this.state.data;
		let newGrid = JSON.parse(JSON.stringify(this.state.data));
		for (let i = 3; i >= 0; i--) {
			let j = newGrid[i];
			let tail = j.length - 1;
			let head = tail - 1;
			while (tail > 0) {
				if (head === -1) {
					head = tail - 1;
					tail--;
					continue;
				}
				if (j[tail] === 0 && j[head] === 0) {
					head--;
				} else if (j[tail] !== 0 && j[head] === 0) {
					head--;
				} else if (j[tail] === 0 && j[head] !== 0) {
					j[tail] = j[head];
					j[head] = 0;
					head--;
				} else if (j[tail] !== 0 && j[head] !== 0) {
					if (j[tail] === j[head]) {
						j[tail] = j[tail] + j[head]
						j[head] = 0;
						head = tail - 1;
						tail--;
					} else {
						tail--;
						head = tail - 1;
					}
				}
			}
		}
		this.refresh(oldGrid, newGrid, dummy);
	};

	down = (dummy) => {
		let oldGrid = this.state.data;
		let newGrid = JSON.parse(JSON.stringify(this.state.data));
		for (let i = 3; i >= 0; i--) {
			let tail = newGrid.length - 1;
			let head = tail - 1;
			while (tail > 0) {
				if (head === -1) {
					head = tail - 1;
					tail--;
					continue;
				}
				if (newGrid[tail][i] === 0 && newGrid[head][i] === 0) {
					head--;
				} else if (newGrid[tail][i] !== 0 && newGrid[head][i] === 0) {
					head--;
				} else if (newGrid[tail][i] === 0 && newGrid[head][i] !== 0) {
					newGrid[tail][i] = newGrid[head][i];
					newGrid[head][i] = 0;
					head--;
				} else if (newGrid[tail][i] !== 0 && newGrid[head][i] !== 0) {
					if (newGrid[tail][i] === newGrid[head][i]) {
						newGrid[tail][i] = newGrid[tail][i] + newGrid[head][i]
						newGrid[head][i] = 0;
						head = tail - 1;
						tail--;
					} else {
						tail--;
						head = tail - 1;
					}
				}
			}
		}
		this.refresh(oldGrid, newGrid, dummy);
	};

	up = (dummy) => {
		let oldGrid = this.state.data;
		let newGrid = JSON.parse(JSON.stringify(this.state.data));
		for (let i = 0; i < 4; i++) {
			let tail = 0;
			let head = 1;
			while (tail < 4) {
				if (head === 4) {
					head = tail + 1;
					tail++;
					continue;
				}
				if (newGrid[tail][i] === 0 && newGrid[head][i] === 0) {
					head++;
				} else if (newGrid[tail][i] !== 0 && newGrid[head][i] === 0) {
					head++;
				} else if (newGrid[tail][i] === 0 && newGrid[head][i] !== 0) {
					newGrid[tail][i] = newGrid[head][i];
					newGrid[head][i] = 0;
					head++;
				} else if (newGrid[tail][i] !== 0 && newGrid[head][i] !== 0) {
					if (newGrid[tail][i] === newGrid[head][i]) {
						newGrid[tail][i] = newGrid[tail][i] + newGrid[head][i];
						newGrid[head][i] = 0;
						head = tail + 1;
						tail++;
					} else {
						tail++;
						head = tail + 1;
					}
				}
			}
		}
		this.refresh(oldGrid, newGrid, dummy);
	};

	refresh(old, notOld, dummy) {
		console.log(JSON.stringify(old));
		console.log(JSON.stringify(notOld));
		if (JSON.stringify(old) !== JSON.stringify(notOld)) {
			this.addNum(notOld);
		}

		// if(dummy){
		// 	console.log("reached!");
		// 	return notOld;
		// }else{
		this.setState({ data: notOld });
		// }
	}

	render() {
		return (
			<div className="frame">{this.state.data.map((row, oneIndex) => {
				return (
					<div className="rows" key={oneIndex}>
						{row.map((digit, index) => (
							<Block num={digit} key={index} />
						))}
					</div>
				);
			})}
				<div className="gamepad">
					<button className="gamepadButton" onClick={this.up}>↑</button>
					<button className="gamepadButton" onClick={this.down}>↓</button>
					<button className="gamepadButton" onClick={this.right}>→</button>
					<button className="gamepadButton" onClick={this.left}>←</button>
				</div>
			</div>

		);

	}
}

const Block = ({ num }) => {
	return <div className="block">{num}</div>
}

export default Game;
