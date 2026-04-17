import os
from groq import Groq
from dotenv import load_dotenv

def ask_ai(message):
    try:
        load_dotenv(override=True)

        api_key = os.getenv("GROQ_API_KEY")

        client = Groq(api_key=api_key)

        chat = client.chat.completions.create(
            
          model="llama-3.3-70b-versatile",
          messages=[
          {"role":"user","content":message}
            ])

        return chat.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"