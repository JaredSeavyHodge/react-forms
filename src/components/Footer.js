import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="flex-container flex-center">
                    <p>Outdoor Experiences</p>
                    <div contentEditable="true"></div>
                </div>
                <div className="flex-container flex-center">
                    <p>Family Partnerships</p>
                    <div contentEditable="true"></div>
                </div>
            </div>
        )
    }
}

export default Footer