import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PrintButton = ({ id, label }) => (<div className="tc mb4 mt2">
    <div id="myMm" style={{ height: "1mm" }} />
    <div
        className="pa2 ba bw1 b--black bg-yellow black-90 br2 dib pointer dim shadow-1"
        onClick={() => {
            const input = document.getElementById(id);
            html2canvas(input, { scale: 2 })
                .then((canvas) => {
                    var imgWidth = 211;
                    // var pageHeight = 297;
                    var imgHeight = canvas.height * imgWidth / canvas.width;
                    // var heightLeft = imgHeight;

                    const context = canvas.getContext('2d');
                    context.scale(2, 2);
                    context['dpi'] = 196;
                    context['imageSmoothingEnabled'] = false;
                    context['mozImageSmoothingEnabled'] = false;
                    context['oImageSmoothingEnabled'] = false;
                    context['webkitImageSmoothingEnabled'] = false;
                    context['msImageSmoothingEnabled'] = false;

                    const contentDataURL = canvas.toDataURL('image/png')
                    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
                    var position = 0;
                    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
                    pdf.save('theJaiRana-fullStack-Developer.pdf'); // Generated PDF
                })

        }}
    >
        {label}
    </div>
</div>);

export default PrintButton;