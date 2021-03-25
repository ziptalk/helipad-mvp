import React from "react";
import "./Landing.css";

export default class Landing extends React.Component<any, any> {
    render() {
        return (
            <div className="wrapper">
                <div className="aboutUs">
                    About Us
                </div>
                <div className="video">
                    Video
                </div>
                <div className="faq">
                    FAQ
                </div>
                <div className="testimonialVideo">
                    Testimonial Video
                </div>
            </div>
        );
    }
}