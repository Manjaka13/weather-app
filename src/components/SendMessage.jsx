import React, { Fragment } from "react";
import GetInTouchTitle from "./GetInTouchTitle";

const SendMessage = () => {
	return (
		<Fragment>
			<GetInTouchTitle title="Leave a message" icon={ ["fas", "envelope"] } />
			<form className="send-message f-c-ce-st" onSubmit={ () => console.log("Submit !") }>
				<input
					className="input br-5 pd-10 pd-l-20 pd-r-20"
					placeholder="Enter your e-mail"
					type="email"
					name="email"
					required
				/>
				<textarea
					className="input br-5 h-100px pd-10 pd-l-20 pd-r-20"
					name="message"
					placeholder="Write your message"
				></textarea>
				<button
					className="submit bg-theme pd-10 pd-l-20 pd-r-20 mg-t-20 br-5 p tr-200"
					type="submit"
				>
					Send
				</button>
			</form>
		</Fragment>
	);
};

export default SendMessage;
