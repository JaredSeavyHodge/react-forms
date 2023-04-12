import { Component } from "react";
class Control extends Component {
    generatePdf() {
        // Capture the entire grid-container element
        const canvasContainer = document.getElementById("canvas");
    
        window.html2canvas(canvasContainer, {
            scrollHeight: canvasContainer.scrollHeight,
            scrollWidth: canvasContainer.scrollWidth,
        }).then(canvas => {
            // Create a new jsPDF instance and add the canvas as an image
            const pdf = new window.jspdf.jsPDF('l', 'mm', 'letter');
            pdf.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 0, 0, pdf.internal.pageSize.getWidth(), 0, null, "NONE");
            // Download the PDF file
            pdf.save(`lesson_plan-${new Date().toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'})}.pdf`);
        });
    }
    clear() {
        document.querySelectorAll("div[contenteditable]").forEach(element => {
            element.innerHTML = "";
        });
        document.querySelectorAll("input").forEach(element => {
            element.innerHTML = "";
        });
        console.log('clear');
    }
    render() {
        
        return (
            <div className="flex-container flex-space-between control">
                <button onClick={this.generatePdf}>Generate PDF</button>
                <button onClick={this.clear} id="clear">Clear</button>
            </div>
        )
    }
}

export default Control;