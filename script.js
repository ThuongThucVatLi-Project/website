function displayDocument() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const documentDisplay = document.getElementById('documentDisplay');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileType = file.type;
            let content = '';

            if (fileType === 'application/pdf') {
                content = `<embed src="${e.target.result}" type="application/pdf" width="100%" height="600px" />`;
            } else if (fileType === 'text/plain') {
                content = `<pre>${e.target.result}</pre>`;
            } else {
                content = `<p>Unsupported file type: ${fileType}</p>`;
            }

            documentDisplay.innerHTML = content;
        };
        reader.readAsDataURL(file);
    } else {
        documentDisplay.innerHTML = '<p>No file selected</p>';
    }
}