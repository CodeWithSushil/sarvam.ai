#!bin/bash/curl
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
