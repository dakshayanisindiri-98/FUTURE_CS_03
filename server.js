const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Log key and IV length for debugging
console.log('Encryption Key Length:', process.env.ENCRYPTION_KEY.length);
console.log('IV Length:', process.env.IV.length);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve static files (like index.html)
app.use(express.static('public'));
app.use(express.json()); // For parsing JSON bodies

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// Encryption configuration
const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY); // Must be 32 characters
const iv = Buffer.from(process.env.IV); // Must be 16 characters

// -------- Helper Functions --------

// Encrypt a file
function encryptFile(filePath) {
    return new Promise((resolve, reject) => {
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        const input = fs.createReadStream(filePath);
        const encryptedPath = `${filePath}.enc`;
        const output = fs.createWriteStream(encryptedPath);

        input.pipe(cipher).pipe(output);

        output.on('finish', () => resolve(encryptedPath));
        output.on('error', reject);
        input.on('error', reject);
    });
}

// Decrypt a file
function decryptFile(filePath, outputPath) {
    return new Promise((resolve, reject) => {
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        const input = fs.createReadStream(filePath);
        const output = fs.createWriteStream(outputPath);

        input.pipe(decipher).pipe(output);

        output.on('finish', () => resolve(outputPath));
        output.on('error', reject);
        input.on('error', reject);
    });
}

// -------- Routes --------

// Default route
app.get('/', (req, res) => {
    res.send('Secure File Sharing System is running');
});

// Upload and encrypt file
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: 'No file uploaded' });
        }

        const encryptedFilePath = await encryptFile(req.file.path);

        // Remove original unencrypted file
        fs.unlinkSync(req.file.path);

        const encryptedFileName = path.basename(encryptedFilePath);

        res.send({
            message: 'File uploaded and encrypted successfully!',
            file: `uploads/${encryptedFileName}` // Correct full path returned
        });
    } catch (error) {
        console.error('Encryption error:', error.message);
        res.status(500).send({ error: 'File encryption failed.' });
    }
});

// Decrypt a file and download it
app.post('/decrypt', async (req, res) => {
    try {
        let { filename } = req.body;

        if (!filename) {
            return res.status(400).send({ error: 'Filename is required' });
        }

        // Ensure filename includes uploads/
        if (!filename.startsWith('uploads/')) {
            filename = `uploads/${filename}`;
        }

        const encryptedFile = path.join(__dirname, filename);

        // Check if encrypted file exists
        if (!fs.existsSync(encryptedFile)) {
            return res.status(404).send({ error: 'Encrypted file not found' });
        }

        // Ensure decrypted folder exists
        const decryptedDir = path.join(__dirname, 'decrypted');
        if (!fs.existsSync(decryptedDir)) {
            fs.mkdirSync(decryptedDir);
        }

        const decryptedPath = path.join(
            decryptedDir,
            `decrypted-${Date.now()}.txt`
        );

        // Perform decryption
        await decryptFile(encryptedFile, decryptedPath);

        // Send file to client
        res.download(decryptedPath, (err) => {
            if (err) {
                console.error('Error sending decrypted file:', err.message);
            }
            fs.unlinkSync(decryptedPath); // Clean up decrypted file after sending
        });
    } catch (error) {
        console.error('Decryption error:', error.message);
        res.status(500).send({ error: 'Decryption failed. Check server logs.' });
    }
});

// -------- Start Server --------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
