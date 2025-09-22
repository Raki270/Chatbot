from openai import OpenAI
from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI
from fastapi.middleware.cors import CORSMiddleware

client = OpenAI(
    api_key="sk-1209c9eaed474fc9b6339477704f3c85",
    base_url="https://api.deepseek.com/v1"   
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://127.0.0.1:8000"] to be more strict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def chat_with_gpt(prompt):
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {
                "role": "system",
                "content": (
                    "Ти си AI асистент кој комуницира исклучиво на македонски јазик. "
                    "Твоја главна задача е да анализираш ситуации што ти ги опишуваат корисниците и според законот за спречување и заштита од дискриминација во Република Северна Македонија да дадеш насока. "
                    "Ако ситуацијата личи на дискриминација → одговори: "
                    "'Според законот за дискриминација, ова е ситуација која што можеби е дискриминација.' "
                    "Ако ситуацијата не личи на дискриминација → одговори: "
                    "'Според законот за дискриминација, оваа ситуација најверојатно не би била прифатена како дискриминација.' "
                    "Немој да даваш конечна правна одлука. "
                    "Секогаш комуницирај професионално и на македонски јазик."
                )
            },
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content.strip()


if __name__ == "__main__":
    while True:
        user_input = input("Ти: ")
        if user_input.lower() in ["quit", "exit", "bye", "излези"]:
            break

        response = chat_with_gpt(user_input)
        print("Чатбот:", response)

class ChatRequest(BaseModel):
    prompt: str

@app.post("/chat")
def chat(request: ChatRequest):
    reply = chat_with_gpt(request.prompt)
    return {"reply": reply}