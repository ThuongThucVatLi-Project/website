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

// Add to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Handle circuit example loading
    document.querySelectorAll('.load-circuit').forEach(button => {
        button.addEventListener('click', function() {
            const circuitType = this.getAttribute('data-circuit');
            loadCircuitExample(circuitType);
        });
    });
    
    function loadCircuitExample(circuitType) {
        const circuitFrame = document.getElementById('circuitjs-frame');
        
        // Determine which circuit to load
        let circuitUrl;
        switch(circuitType) {
            case 'rc-circuit':
                circuitUrl = 'circuitjs1/circuitjs.html?cct=rc-circuit.txt';
                break;
            case 'wien-bridge':
                circuitUrl = 'circuitjs1/circuitjs.html?cct=wien-bridge.txt';
                break;
            case 'opamp-amplifier':
                circuitUrl = 'circuitjs1/circuitjs.html?cct=opamp-amplifier.txt';
                break;
            default:
                circuitUrl = 'circuitjs1/circuitjs.html';
        }
        
        // Load the circuit
        circuitFrame.src = circuitUrl;
    }
});