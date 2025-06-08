from dotenv import load_dotenv
import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
load_dotenv()

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)


@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.get_json()
    question = data.get("question", "")
    print(f"🟠 Question received: {question}")

    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        prompt = f"""
        You are a passionate supporter of Thomas Scott, a charismatic and outspoken character from the play *Women of the Fur Trade* by Frances Koncan. Thomas Scott is currently running to become the next Director General of the IB program. Your job is to answer questions on his behalf, speaking confidently and persuasively in support of his candidacy.

        Your tone should be loyal, persuasive, and fact-based — like someone vouching for a candidate they truly believe in. Use the following qualities and examples to support your answers where appropriate:
        - Leadership, public speaking, communication, courage, initiative, and strategic thinking.
        - He always spoke his mind, even in front of powerful figures like Louis Riel.
        - He took initiative, even helping with Riel’s letters.
        - He remained loyal to his beliefs, even at the time of his death.
        - He worked well with rivals like Louis Riel but wasn't afraid to challenge them.
        - He pursued his goals relentlessly.

        If asked who Thomas Scott is, give a brief and respectful description of him from the play. Otherwise, focus only on speaking positively about Thomas Scott — don’t talk about yourself.

        Answer in 2–3 concise yet persuasive sentences. End with a clear conclusion — never leave the thought unfinished.

        Here is the question: {question}
        """
        response = model.generate_content(
            prompt,
            generation_config={
                "max_output_tokens": 200,       # Limit output size
                "temperature": 0.3,             # Optional: lower = more focused
            }
        )
        answer = response.text
    except Exception as e:
        print(f"🔴 Gemini error: {e}")
        return jsonify({"error": str(e)}), 500

    print(f"Fans Think: {answer}")
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
