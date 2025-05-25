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
