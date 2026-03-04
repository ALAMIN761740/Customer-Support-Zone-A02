

## Project Links
- **Live Demo:** [Live Link]  my-customer-support-zone-12dftg56dfgf4436sf3.surge.sh

- **GitHub Repository:** [GitHub Link] https://github.com/ALAMIN761740/Customer-Support-Zone-A02

---

এই README ফাইলে React-এর কিছু গুরুত্বপূর্ণ কনসেপ্টের সংক্ষিপ্ত উত্তর দেওয়া হলো। 

## 1. What is JSX, and why is it used?
JSX (JavaScript XML) হলো একটি syntax extension যা HTML-এর মতো JavaScript-এ লেখা যায়।  
React-এ এটি UI কে সহজে এবং declarative ভাবে লিখতে ব্যবহৃত হয়।

## 2. What is the difference between State and Props?
State হলো component-এর local data যা component-এর ভিতরে পরিবর্তনশীল।  
Props হলো read-only values যা parent component থেকে child component-এ পাঠানো হয়।

## 3. What is the useState hook, and how does it work?
`useState` hook functional components-এ state ব্যবহার করতে দেয়।  
এটি একটি state variable এবং সেটার মান update করার function রিটার্ন করে।

## 4. How can you share state between components in React?
State share করার জন্য এটি common parent component-এ রাখা হয়।  
Parent component state এবং setter function কে props হিসেবে child component-এ পাঠায়।

## 5. How is event handling done in React?
React-এ events camelCase syntax ব্যবহার করে (যেমন `onClick`)।  
Event handler-এ সরাসরি function pass করা হয়, string নয়।