# praxis-5941-history-quiz# 
Praxis 5941 History Quiz

[![Live Demo](https://img.shields.io/badge/Demo-Live%20App-2ea44f?style=for-the-badge)](https://caspian1988.github.io/praxis-5941-history-quiz/)

A lightweight, offline-friendly study web app for **Praxis 5941 (World and U.S. History: Content Knowledge)** featuring **120 multiple-choice questions** with explanations, domain filtering, and question shuffling.

## Features
- **120 Praxis 5941 Questions** across U.S. History and World History periods
- **Domain Filtering** to focus on specific historical eras or all questions at once
- **Question Shuffling** using Fisher-Yates randomization
- **Instant Explanations** after each answer for active recall
- **Zero Build Step** — runs directly in the browser from static files

## Project Structure
```text
├── index.html      # Quiz layout and controls
├── app.js          # Quiz logic, filtering, shuffling, and scoring
├── questions.js    # 120-question bank loaded as a global array
└── README.md       # Project documentation
