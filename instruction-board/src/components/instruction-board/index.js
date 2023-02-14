import React, { useState } from "react";
import "./index.css";

const InstructionBoard = () => {
	const [instructions, setInstructions] = useState([]);
	const [newInstruction, setNewInstruction] = useState(null);
	const [error, setError] = useState('')
	const isExist = () => {
		const filtered = instructions.filter(item => item === newInstruction);
		return filtered.length > 0
	}
	const updateInput = (evt) => {
		setNewInstruction({id: instructions.length, val: evt.target.value});
	}
	const addInstruction = () => {
		setError('')
		if (!newInstruction && isExist) {
			setError('Please enter an instruction.');
			setTimeout(() => {
				setError('')
			}, 3000);
			return;
		}
		let arr = instructions;
		arr.push(newInstruction);
		setInstructions(arr);
		setNewInstruction(null);
	}
	const moveUp = (idx) => {
		let arr = instructions;
		let temp = arr[idx];
		arr[idx] = arr[idx - 1];
		arr[idx - 1] = temp;
		setInstructions([...arr]);
	}
	const moveDown = (idx) => {
		let arr = instructions;
		let temp = arr[idx];
		arr[idx] = arr[idx + 1];
		arr[idx + 1] = temp;
		setInstructions([...arr]);
	}
	return (
		<div className="mt-50 layout-column justify-content-center align-items-center">
			<div>
				{/* <form> */}
					<section
						className="my-30 layout-row align-items-center justify-content-center width-1000"
					>
						<input
							id="instruction-input"
							type="text"
							placeholder="New Instruction"
							data-testid="instruction-input"
							className="width-80"
							onChange={(evt) => {updateInput(evt)}}
							value={newInstruction ? newInstruction.val : ''}
						/>
						<button
							type="submit"
							className="ml-30 width-20"
							data-testid="add-instruction-button"
							onClick={() => {addInstruction()}}
						>
							Add Instruction
						</button>
					</section>
				{/* </form> */}
				<span data-testid="error-message" className="error hidden-span">{error}</span>
			</div>
			<div className="card outlined mt-0 width-800" >
				<div className="card-text" >
					<h4>Instructions</h4>
					<ul className="styled mt-50" data-testid="instructions">
						{instructions.map((item, idx) => {
							return (<li key={`instructions_${idx}`}>
								<div className="li-content layout-row justify-content-between align-items-center">
									<span>{item.id + 1}</span>
									<span>{item.val}</span>
									<div className="icons">
										<button className="icon-only x-medium mx-2" onClick={() => {moveDown(idx)}} disabled={idx === instructions.length - 1}>
											<i className="material-icons">arrow_drop_down_icon</i>
										</button>
										<button className="icon-only x-medium mx-2" onClick={() => {moveUp(idx)}} disabled={idx == 0}>
											<i className="material-icons">arrow_drop_up_icon</i>
										</button>
									</div>
								</div>
							</li>)
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default InstructionBoard;