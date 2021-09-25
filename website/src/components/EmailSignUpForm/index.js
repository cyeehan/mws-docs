import React from "react";
import "./emailSignUpForm.css";

const EmailSignupForm = ({ placeholder }) => {
	return (
		<div className="subscription-ctn">
			<h2>Receive our newsletter and events</h2>
			<form className="email-signup-form" action="https://app.us5.list-manage.com/subscribe/post?u=f493b19f7614cff7c66c5909e&amp;id=1c964dc38b" method="post">
				<input aria-label="Email address" name="EMAIL" type="email" required className="input" placeholder={placeholder || "Enter your email"} />
				<div className="">
					<button className="button button--primary" type="submit">
						Subscribe
					</button>
				</div>
			</form>
			<h4 style={{ marginTop: "1rem" }}>We don't spam. Unsubscribe at any time.</h4>
		</div>
	);
};

export default EmailSignupForm;
