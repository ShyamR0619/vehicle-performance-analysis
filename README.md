# vehicle-performance-analysis
A Vehicle Performance &amp; Analytics Application for parameter-based search and market trends analysis
# Performance Evaluation and Analysis of a Vehicle

[![Publication](https://img.shields.io/badge/Journal-IJSREM-blue.svg)](https://ijsrem.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A dual-facing Vehicle Performance and Analysis Application designed to streamline parameter-based vehicle searches for consumers while providing real-time data analytics and market trend tracking for manufacturers and dealerships.

> **Published Work:** This project was published in the *International Journal of Scientific Research in Engineering & Management (IJSREM)*, Vol. 09, Issue 01, January 2025 (DOI: 10.55041/IJSREM40777). Full certificates and thesis documentation are located in the [`/docs`](./docs) directory.

---

## 📌 Executive Summary

Finding vehicles using granular technical parameters (engine displacement, fuel efficiency metrics, or specific budget brackets) can be difficult on standard transaction platforms. This platform implements:
1. **Consumer Engine:** Parameterized filtering, side-by-side vehicle comparison, and customized matching.
2. **Business Intelligence Analytics:** Live tracking of aggregate user query patterns (e.g., fuel vs. electric segment demand shifts) to empower manufacturers in planning production inventory.

---

## 🛠 Tech Stack

- **Frontend:** React.js, CSS3 Flexbox/Grid
- **Backend Architecture:** Node.js, Express.js (REST APIs)
- **Database:** MongoDB / PostgreSQL (Schema logs search parameter telemetry)
- **Data Analytics Tools:** Integrated visualization pipelines
- **Testing:** Jest / Integration Tests

---

## 📊 Key Findings & System Metrics

- **Search Query Accuracy:** 98% across configured search matrices.
- **Latency:** Reduced average response time to **1.2 seconds**.
- **Market Trends Captured:**
  - **Engine Type Preference:** 65% Petrol vs. 35% Electric.
  - **Segment Leader:** Scooters generated **50%** of overall consumer queries.
  - **Budget Concentration:** 40% of queries were centered in the ₹80,000 – ₹1,20,000 price range.

---

## 📁 Project Structure

```text
├── docs/
│   ├── Project_Report.pdf
│   └── IJSREM_Publication_Certificates.pdf
├── src/
│   ├── App.js
│   ├── Login.js
│   ├── MotorcycleList.js
│   └── Organization.js
├── README.md
└── package.json
