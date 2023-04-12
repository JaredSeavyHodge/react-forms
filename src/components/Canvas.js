import { Component } from "react";
import Header from './Header';
import LessonPlan from './LessonPlan';
import Footer from './Footer';

class Canvas extends Component {
    render() {
        return (
            <div id="canvas" className="canvas">
                <Header />
                <LessonPlan />
                <Footer />
            </div>
        )
    }
}

export default Canvas