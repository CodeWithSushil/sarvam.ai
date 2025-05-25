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
