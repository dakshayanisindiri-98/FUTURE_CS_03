# FUTURE_CS_03
Cyber Security Internship - Task 3 |  SECURE FILE SHARING SYSTEM

# 🔐 Secure File Sharing System

This project demonstrates a **secure file sharing application** built with **Node.js**, **Express**, and the **Crypto module**.  
Files are **encrypted automatically** on upload and can be **decrypted and downloaded securely**, ensuring data privacy and protection.

This is part of my **Cyber Security Internship** with **Future Interns**.

---

## 🚀 Features
- Upload files and automatically **encrypt** them before saving.
- Securely **store encrypted files** on the server.
- **Decrypt and download files** directly from the browser.
- Simple and responsive **frontend interface** using HTML, CSS, and JavaScript.
- Uses environment variables for secure key management.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express, Multer, Crypto
- **Frontend:** HTML, CSS, JavaScript
- **Security:** AES-256-CBC Encryption
- **Version Control:** Git & GitHub

---

## 📂 Project Structure
```

secure-file-share/
│
├── public/                # Frontend files
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── uploads/               # Encrypted files 
├── decrypted/             # Decrypted files
├── screenshots
├── .env                    # Environment variables 
├── server.js               # Main backend server
├── package.json            # Dependencies & scripts
├── package-lock.json       # Auto-generated dependency lock file

````

---

## ⚙️ Setup Instructions

### **1. Clone the Repository**
```bash
git clone https://github.com/dakshayanisindiri-98/FUTURE_CS_03.git
cd FUTURE_CS_03
````

### **2. Install Dependencies**

```bash
npm install
```

### **3. Create `.env` File**

Inside the project root, create a `.env` file:

```
ENCRYPTION_KEY=YOUR_32_CHARACTER_KEY
IV=YOUR_16_CHARACTER_IV
PORT=5000
```

> **Important Security Note:**
>
> * **Never commit or upload `.env` to GitHub.**
> * `ENCRYPTION_KEY` must be exactly **32 characters long**.
> * `IV` must be exactly **16 characters long**.

---

### **4. Run the Server**

```bash
node server.js
```

Server will start running at:

```
http://localhost:5000
```

---

## 📸 Screenshots

**-->1.Running server successfully**

<img width="1596" height="678" alt="Runnin-server" src="https://github.com/user-attachments/assets/e60e351e-94da-4aa7-b589-958b718e8a49" />


**-->2.Homepage UI**  

<img width="3200" height="2000" alt="Frontend-homePage" src="https://github.com/user-attachments/assets/b42bc677-867f-47ac-97f4-303607d9ce00" />


**-->3.File Upload**

<img width="3200" height="2000" alt="upload- -encrypt-file" src="https://github.com/user-attachments/assets/aeda04ee-1e3f-491f-a4ca-524f3a68b80a" />


**-->4.Encrypted File Saved**

<img width="2106" height="934" alt="uploads-folder" src="https://github.com/user-attachments/assets/bf4e8536-66e1-4cc3-b72d-17be98406e11" />


**-->5.File Decryption**

<img width="3200" height="2000" alt="decryption" src="https://github.com/user-attachments/assets/7a6de8cf-8b62-4482-a905-b312ed1f5fd7" />


**-->6.Final Output**

<img width="1366" height="688" alt="encryption-text" src="https://github.com/user-attachments/assets/07e66aae-0d45-47cd-8a64-8ffc54b6736d" />


<img width="1702" height="496" alt="decrypted-message" src="https://github.com/user-attachments/assets/48fbc4b4-ac02-43cc-b50a-b05cb7e941d4" />


**-->7.Backend Encryption Postman**

<img width="3200" height="2000" alt="encryption-backend" src="https://github.com/user-attachments/assets/b2d72226-4647-4190-82be-fe424e05c084" />


**-->8.Backend Decryption Postman**

<img width="3200" height="1886" alt="decryption-backend" src="https://github.com/user-attachments/assets/060dec1a-10ec-45ca-98f2-bbdcffa3315f" />

---

## 🧑‍💻 How It Works

1. **Upload a file** through the frontend.
   → It is **encrypted automatically** using AES-256-CBC.
   → The encrypted file is saved in the `/uploads/` folder.

2. The server responds with the **encrypted filename**.

3. **Decrypt the file** by pasting its encrypted filename in the frontend.

4. The original file is **restored and downloaded securely**.

---

## 📝 Folder Exclusions

Add a `.gitignore` file to hide sensitive files and folders:

```
node_modules/
uploads/
decrypted/
.env
```

This ensures your **keys and private files remain safe**.

---

## 🧪 Testing Guide

1. Start the server:

   ```bash
   node server.js
   ```
2. Open the browser and go to:

   ```
   http://localhost:5000
   ```
3. **Upload a test file** → An encrypted `.enc` file will be created inside `/uploads/`.
4. Copy the encrypted filename and paste it into the **Decryption section**.
5. Verify the decrypted file is downloaded and matches the original content.

---

## 📜 Future Interns Task

This project was completed as **Task 3** of the Cyber Security Internship under **Future Interns**.
It demonstrates secure **file encryption and decryption**, proper **key management**, and **browser-based file handling**.

---

## 📎 Useful Links

* **GitHub Repo:** (https://github.com/dakshayanisindiri-98/FUTURE_CS_03)
* **LinkedIn:** (https://www.linkedin.com/in/dakshayani-sindiri-a55037302)

---

## 👨‍🎓 Author

**Dakshayani Sindiri**
Aspiring Cybersecurity Professional | VAPT Enthusiast

---


`#CyberSecurity` `#NodeJS` `#Encryption` `#FutureInterns`

````

---
