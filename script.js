let qrText = document.querySelector('.qr-text');
let qrCode = document.querySelector('.qrImg');
let downBtn = document.querySelector('.down-qr');

// Initially download button is disabled
downBtn.disabled = true;

// Function to generate QR CODE 
function generate() {
    if (qrText.value.length > 0) {
        let qrURL = "https://quickchart.io/qr?size=230&text=" + encodeURIComponent(qrText.value);
        qrCode.src = qrURL;
        qrCode.classList.add('show-img');
        
        downBtn.disabled = false;
        downBtn.classList.remove('js-btn-disable');
        downBtn.setAttribute('data-url', qrURL);  
    } else {
        // Vibrate the input field is no text/URL is entered
        qrText.classList.add('js-error');
        setTimeout(() => {
            qrText.classList.remove('js-error');
        }, 500);
    }
}

// Function to create dowloadable png image of QR CODE
function downloadQR() {
    let qrURL = downBtn.getAttribute('data-url');
    if (qrURL) {
        let link = document.createElement('a');
        link.href = qrURL;
        link.download = 'QRCode.png';  
        document.body.appendChild(link);
        link.click();  
        document.body.removeChild(link);  
    } else {
        alert("Please generate a QR code first.");
    }
}

