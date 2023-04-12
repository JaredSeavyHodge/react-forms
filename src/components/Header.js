import { Component } from "react";
import childcareLogo from '../images/childcare-logo.png';

class Header extends Component {
    
    render() {
        return (
            <div className="header flex-container flex-space-between flex-end">
                
                <div>
                    <img src={childcareLogo} className="logo"/>
                </div>
                
                <div className="flex-container flex-center">
                    <h3>Classroom:</h3>
                    <div contentEditable="true" id="classroom" />
                </div>
                
                <div className="flex-container flex-col">
                    <div className="flex-container flex-space-between flex-center">
                        <p className="bold">Date</p>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div className="flex-container flex-space-between flex-center">
                        <p className="bold">Teachers</p>
                        <div contentEditable="true" id="teachers"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;