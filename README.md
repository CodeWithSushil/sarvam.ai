# sarvam.ai
Sarvam.AI for India AI ecosystem.

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
