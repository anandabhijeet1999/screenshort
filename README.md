# Confidential Content Page - Screenshot Protection

A single-page web application that displays confidential content with multiple layers of screenshot blocking protection. This project implements various techniques to prevent screenshot capture using only HTML5, CSS3, and vanilla JavaScript (no external libraries).

##  Features

- **Comprehensive Screenshot Blocking**: Implements multiple techniques to prevent screenshot capture
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean Code**: Well-commented, modular JavaScript following best practices
- **No External Dependencies**: Pure HTML5, CSS3, and vanilla JavaScript
- **Modern UI**: Beautiful gradient design with professional styling

##  Protection Mechanisms

The page implements the following protection mechanisms:

### 1. **Right-Click Blocking**
- Disables context menu to prevent image saving and element inspection

### 2. **Keyboard Shortcut Blocking**
- Blocks Print Screen key (Windows/Linux)
- Blocks F12 (Developer Tools)
- Blocks Ctrl+Shift+I/J/C (Developer Tools shortcuts)
- Blocks Ctrl+U (View Source)
- Blocks Ctrl+S (Save Page)
- Blocks Ctrl+P (Print/PDF)
- Blocks Mac screenshot shortcuts (Cmd+Shift+3/4)
- Blocks Windows Snipping Tool shortcuts

### 3. **Text Selection Prevention**
- Disables text selection and copying
- Prevents clipboard operations (copy, cut, paste)

### 4. **Image Protection**
- Prevents image dragging and dropping
- Disables image right-click save
- Adds overlay protection on images

### 5. **Developer Tools Detection**
- Detects when developer tools are opened
- Warns users and attempts to discourage usage

### 6. **Print Dialog Blocking**
- Prevents printing which could be used to save as PDF

### 7. **Console Protection**
- Overrides console methods to prevent information leakage
- Displays warnings in console

### 8. **Page Visibility Monitoring**
- Monitors page visibility changes
- Detects when page loses focus (potential screenshot attempt)

### 9. **DOM Mutation Monitoring**
- Detects and removes suspicious elements added by screenshot extensions





### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anandabhijeet1999/screenshort
cd screenshort
```

2. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or simply double-click the `index.html` file.

## 📱 Browser Compatibility

- Chrome/Chromium (latest)
-  Firefox (latest)
-  Safari (latest)
-  Edge (latest)
-  Some protection features may vary by browser





**Complete screenshot blocking is technically impossible** due to:
- Hardware-level screen capture (external cameras, screen recorders)
- Operating system-level screenshot tools that bypass browser restrictions
- Browser extensions with elevated permissions
- Virtual machines and screen sharing software

This implementation provides **multiple layers of protection** to make screenshot capture difficult and discourage casual attempts. It is designed to:
- Block common browser-based screenshot methods
- Prevent easy content copying
- Deter unauthorized content capture
- Provide warnings when protection is triggered

### Legal Disclaimer

This project is for educational and demonstration purposes. The effectiveness of screenshot blocking varies by browser, operating system, and user permissions. Always use additional security measures for truly sensitive content.

##  Customization

### Changing Content

Edit `index.html` to modify:
- Heading text
- Paragraph content
- Number of images
- Image sources (currently using Unsplash placeholders)

### Styling

Modify `styles.css` to customize:
- Color scheme
- Fonts
- Layout
- Responsive breakpoints

### Protection Settings

Adjust `script.js` to:
- Enable/disable specific protection mechanisms
- Customize warning messages
- Modify detection sensitivity

## Code Quality

- Semantic HTML5 structure
-  Modular JavaScript with clear function separation
- Comprehensive comments explaining each protection mechanism
-  Responsive CSS with mobile-first approach
- Clean, indented code following best practices



**Note**: This is a demonstration project. For production use with sensitive content, consider implementing server-side protection, watermarking, access controls, and other security measures in addition to client-side protections.

