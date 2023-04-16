import { Component } from "react";

class Control extends Component {
    generatePdf() {
        const canvasContainer = document.getElementById("canvas");
        window.html2canvas(canvasContainer, {
            scrollHeight: canvasContainer.scrollHeight,
            scrollWidth: canvasContainer.scrollWidth,
        }).then(canvas => {
            const pdf = new window.jspdf.jsPDF('l', 'mm', 'letter');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), 0, null, "NONE");
            pdf.save(`lesson_plan-${new Date().toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'})}.pdf`);
        });
    }
    clear() {
        document.querySelectorAll("div[contenteditable]").forEach(element => {
            element.value = "";
            element.innerHTML = "";
        });
        document.querySelectorAll("input").forEach(element => {
            element.value = "";
            element.innerHTML = "";
        });
        localStorage.clear();
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