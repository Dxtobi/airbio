import { jsPDF } from "jspdf";

// const doc = new jsPDF({ orientation: 'p', unit: 'px', compress: true, floatPrecision: 'smart', precision: 0 });


export async function print_doc(id) {
    const original_body = document.body.innerHTML
    const print_body = document.getElementById(id)
    document.body.innerHTML = print_body.innerHTML;
    console.log(print_body.innerHTML)
    print()
    document.body.innerHTML = original_body;
    location.reload()
}


export function save_as_pdf(id) {
    const cv = document.getElementById(id);

    // Create a new jsPDF instance with A4 size and portrait orientation
    const doc = new jsPDF({ orientation: 'p', unit: 'px', format: 'a4', compress: true });

    // Calculate the appropriate scaling factor to fit the content within A4 dimensions
    const contentWidth = cv.offsetWidth;
    const contentHeight = cv.offsetHeight;
    const maxWidth = doc.internal.pageSize.getWidth();
    const maxHeight = doc.internal.pageSize.getHeight();
    const scaleX = maxWidth / contentWidth;
    const scaleY = maxHeight / contentHeight;
    const scale = Math.min(scaleX, scaleY); // Ensure both dimensions fit within A4

    // Apply scaling to both width and height
    doc.html(cv, {
        x: 0,
        y: 0,
        windowWidth: maxWidth,
        width: contentWidth * scale,
        height: contentHeight * scale,
        callback: function (doc) {
            console.log(doc.internal.pageSize.width, contentWidth * scale, scale, contentWidth)
            doc.save("download.pdf");
        },

    });
}
//import html2canvas from 'html2canvas'

// export function downloadPDF(id) {
//     // Create a new jsPDF instance
//     const pdf = new jsPDF('p', 'pt', 'a4');

//     // Get the content of the div
//     const content = document.getElementById(id);

//     // Options for html2canvas, adjust as needed
//     const options = {
//         scale: 10 // Increase scale if you want higher resolution
//     };

//     // Use html2canvas to convert the div content to an image
//     html2canvas(content, options).then(canvas => {
//         // Convert the canvas to a data URL
//         const imageData = canvas.toDataURL('image/png');

//         // Add the image to the PDF
//         pdf.addImage(imageData, 'px', 20, 20, 555, 800); // Adjust the position and size as needed

//         // Save the PDF
//         pdf.save('downloaded.pdf');
//     });
// }