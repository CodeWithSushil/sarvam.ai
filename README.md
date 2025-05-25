# 🇮🇳 Sarvam AI: India’s Indigenous LLM Platform for Multilingual Intelligence

India has taken a significant leap in the AI domain with the launch of **Sarvam AI**, a homegrown platform offering cutting-edge large language model (LLM) capabilities tailored for Indian languages and use cases. Sarvam AI stands out not only for its LLM capabilities but also for its comprehensive suite of multilingual and multimodal tools, designed to bridge the language divide across digital India.

---

## ✨ Key Features of Sarvam AI

Sarvam AI offers a wide range of AI-powered capabilities, making it a versatile platform for developers, enterprises, and public services:

- **🧠 Large Language Model (LLM)**  
  A robust model optimized for Indian linguistic contexts, capable of understanding, generating, and reasoning in multiple Indic languages.

- **🗣️ Text-to-Speech (TTS)**  
  Converts text into natural-sounding speech in various Indian languages for voice interfaces and accessibility.

- **🎙️ Speech-to-Text (STT)**  
  Accurately transcribes audio into text, handling diverse accents and dialects.

- **🔄 Speech Translation (ST)**  
  Real-time translation of spoken language—ideal for conversations, learning, and customer support.

- **🌐 Text Translation**  
  Seamlessly translate between English and Indian languages to support content localization.

- **✍️ Transliteration**  
  Convert text between scripts (e.g., Roman ↔️ Devanagari) for regional communication.

- **🗃️ Indic Language Support**  
  Deep support for major Indian languages like Hindi, Tamil, Telugu, Bengali, Kannada, Malayalam, Marathi, Gujarati, and more.

---

## ⚙️ Developer-Friendly API Access

Sarvam AI provides flexible and easy-to-use APIs with support for multiple programming environments:

- **🐍 Python** – Perfect for backend, data science, and ML applications.
- **🟨 JavaScript/TypeScript** – Great for web, frontend, and Node.js projects.
- **🌀 cURL** – Simple command-line integration for quick tests and automation.

---

## ✅ Conclusion

Sarvam AI is a transformative step forward in India’s AI journey. By focusing on multilingual intelligence and developer-friendly APIs, it enables the creation of inclusive, accessible, and intelligent applications for a diverse user base.

> **Built in India, for India – powering the next billion users.**  
> 🇮🇳 **Sarvam AI** is shaping the future of AI with Indic excellence.

---
### cURL
```bash
curl -X POST https://api.sarvam.ai/v1/chat/completions \
     -H "Authorization: Authorization" \
     -H "Content-Type: application/json" \
     -d '{
  "messages": [
    {
      "role": "system",
      "content": "content"
    }
  ],
  "model": "sarvam-m"
}'
```
### JavaScript/TypeScript
```ts
// Chat Completions (POST /v1/chat/completions)
const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Authorization",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "messages": [
      {
        "role": "assistant"
      }
    ],
    "model": "sarvam-m"
  }),
});

const body = await response.json();
console.log(body);
```

### Python
```py
import requests

# Chat Completions (POST /v1/chat/completions)
response = requests.post(
  "https://api.sarvam.ai/v1/chat/completions",
  headers={
    "Authorization": "Authorization"
  },
  json={
    "messages": [
      {
        "role": "system",
        "content": "content"
      }
    ],
    "model": "sarvam-m"
  },
)

print(response.json())
```
