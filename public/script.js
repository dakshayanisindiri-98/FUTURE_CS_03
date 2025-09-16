// Handle file upload and encryption
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData();
  const file = document.getElementById('fileInput').files[0];
  formData.append('file', file);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  document.getElementById('uploadResult').innerText =
    'Encrypted file saved as: ' + data.file;
});

// Handle decryption and download
async function decryptFile() {
  const filename = document.getElementById('filename').value;

  const response = await fetch('/decrypt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ filename })
  });

  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'decrypted-' + filename.replace('.enc', '');
    document.body.appendChild(a);
    a.click();
    a.remove();

    document.getElementById('decryptResult').innerText = 'File decrypted successfully!';
  } else {
    document.getElementById('decryptResult').innerText = 'Decryption failed!';
  }
}
