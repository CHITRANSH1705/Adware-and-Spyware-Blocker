🛡️ Adware & Spyware Blocker - Chrome Extension
A lightweight and powerful Chrome Extension that automatically detects and blocks **adware**, **spyware**, **trackers**, **keyloggers**, and **malicious scripts** on websites. It also displays real-time alerts about the number of threats blocked on each page.

Features:
-  Blocks Adware elements like ad scripts, iframes, popups, and banners
- Blocks Spyware & Trackers including Google Analytics, Hotjar, Mixpanel, etc.
- Detects & Removes Keyloggers from input fields
- Alerts users with a count of blocked threats
- Fast & Lightweight with minimal performance overhead
- Uses `chrome.declarativeNetRequest` to block requests at the network level

  How It Works:
- Identifies and removes DOM elements commonly used by adware/spyware
- Scans for suspicious event handlers (e.g., `onkeydown`) for keylogger activity
- Uses a **block list of known malicious URLs/domains**
- Notifies the user with a popup showing counts of blocked elements

 📁 Folder Structure
adware-spyware-blocker/
├── icons/
│ └── icon128.png
├── background.js
├── content.js
├── manifest.json
├── rules.json
└── README.md

 Installation
1. Download the Codes
2. Go to chrome://extensions/ in your browser.
3. Enable Developer mode (top right).
4. Click "Load unpacked" and select the extension folder.

You’ll now see the Adware & Spyware Blocker icon in your toolbar.

Tech Used
1. JavaScript (ES6)
2. Chrome Extension APIs (declarativeNetRequest, content_scripts)
3. CSS3 for popup styling

📢 Contribution
Pull requests are welcome! If you want to add more domains, improve detection logic, or enhance UI, feel free to fork this repo and submit a PR.

⚠️ Disclaimer
This extension is for educational and ethical use only. It does not guarantee 100% protection from all threats. For best results, use it alongside a trusted antivirus.
