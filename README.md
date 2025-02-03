# API Tester Chrome Extension

A lightweight, feature-rich REST client embedded directly in your browser for quick and easy API testing. Built as a Chrome extension, this tool allows you to send HTTP requests, inspect responses, and manage your API workflows without leaving your browser.

## 🚀 Features

- **Multiple HTTP Methods**: Supports `GET`, `POST`, `PUT`, `DELETE`, and more.
- **Environment Variables**: Use variables like `{{base_url}}` or `{{token}}` for dynamic requests.
- **Authentication**: Supports API keys, Bearer tokens, and OAuth 2.0.
- **Scripting**: Write pre-request and post-request scripts for advanced workflows.
- **Response Formatting**: Syntax highlighting for JSON, XML, and more.
- **Dark Mode**: A sleek dark theme for better usability.
- **Lightweight**: Fast and easy to use, with no unnecessary bloat.

---

## 📥 Installation

### Prerequisites
- Google Chrome or any Chromium-based browser.

### Steps
1. **Download the Extension:**
   ```sh
   git clone https://github.com/MdRaihanHasan/API-Tester.git
   ```
2. **Load the Extension in Chrome:**
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the folder containing the extension files.
3. **Start Testing:**
   - Click the extension icon in the toolbar to open the API Tester.
   - Enter your API endpoint, configure headers, and send requests!

---

## 🎯 Usage

### Making a Request
1. Select the **HTTP method** (`GET`, `POST`, etc.).
2. Enter the **URL** (e.g., `https://api.example.com/data`).
3. Add **headers** (e.g., `{ "Content-Type": "application/json" }`).
4. Add a **request body** (if applicable).
5. Click **Send Request** to see the response.

### Using Environment Variables
- Define variables in the **Environment Variables** field (e.g., `{ "base_url": "https://api.example.com" }`).
- Use them in your URL or headers like `{{base_url}}/endpoint`.

### Authentication
- Choose the **authentication type** (`API Key`, `Bearer Token`, or `OAuth 2.0`).
- Enter the required credentials.

### Scripting
- Write JavaScript in the **Pre-request Script** or **Post-request Script** fields to automate tasks.

### Dark Mode
- Toggle dark mode using the **checkbox** in the bottom-right corner.

---

## 🤝 Contributing

We welcome contributions! Here’s how you can help:

### 📌 Fork the Repository
- Click the **Fork** button on GitHub.

### 🛠️ Make Your Changes
- Create a new branch for your feature or bug fix.
- Commit your changes with clear and descriptive messages.

### 🔄 Submit a Pull Request
- Open a pull request and describe your changes.

---

## 🔧 Development Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/MdRaihanHasan/API-Tester.git
   ```
2. **Load the extension in Chrome** as described in the Installation section.
3. **Make changes** to files (`popup.html`, `popup.js`, `styles.css`, etc.).
4. **Test your changes** and ensure everything works as expected.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- Built with ❤️ by Raihan.
- Inspired by tools like **Postman** and **Insomnia**.
- Thanks to the open-source community for their contributions and support.

---

## ⭐ Support

If you find this project useful, please consider giving it a **⭐ on GitHub**!
For issues or feature requests, open an **issue** on the GitHub repository.

Enjoy testing your APIs with ease! 🚀

