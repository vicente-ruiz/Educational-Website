# Phishing Awareness Educational Website

This repository contains the source code for our Capstone Project: an interactive educational website designed to raise awareness about phishing-based cyberattacks. It aims to educate users through videos, interactive quizzes, technical breakdowns, and live (simulated) demonstrations of various attack vectors.

## 🌐 Live Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Python with Flask
- **Templating:** Jinja2
- **Environment:** Replit

## 📚 Educational Topics Covered

1. **Keylogging Attacks**
   - Hardware (e.g., Pico Ducky)
   - Software (Python-based)
   - Demo Page: Simulated key capture and server-side data fetch

2. **Reverse Shell Attacks**
   - Conceptual Overview
   - Techniques & Defenses
   - Video-based demonstration

3. **Credential Manipulation**
   - Credential stuffing
   - Privilege escalation
   - Defense via MFA and secure storage

Each topic is broken into modules with dedicated routes (e.g., `/education/keylogger`, `/education/reverse-shell`, etc.).

## 🧠 Features

- 🧩 **Modular Content**: Each topic is structured in its own module and accessible through an organized menu system.
- 🎬 **Video Demonstrations**: Each topic includes a walkthrough video explaining the attack scenario.
- 📄 **Footnotes System**: Custom pop-up footnotes implemented via shared HTML includes and shared CSS for consistent styling.
- 🎯 **Interactive Quizzes**: Users can test their knowledge with simple multiple-choice questions.
- 🍔 **Hamburger Menu**: Responsive navigation system for streamlined access to topics and submodules.
- 🧾 **Shared Styling**: All common UI/UX styles (typography, layout, footnotes, etc.) are centralized in `shared.css` to reduce redundancy and ensure consistency across pages.
