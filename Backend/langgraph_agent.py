from typing import TypedDict

class State(TypedDict):
    message: str
    result: str

# Tool 1
def log_interaction(msg):
    return f"Interaction logged: {msg}"

# Tool 2
def edit_interaction(msg):
    return f"Interaction edited: {msg}"

# Tool 3
def summarize_interaction(msg):
    return f"Summary: {msg[:50]}"

# Tool 4
def sentiment_tool(msg):
    if "positive" in msg.lower():
        return "Sentiment: Positive"
    elif "negative" in msg.lower():
        return "Sentiment: Negative"
    return "Sentiment: Neutral"

# Tool 5
def followup_tool(msg):
    return "Suggested follow-up: Schedule meeting next week"

def run_agent(message):
    text = message.lower()

    if "edit" in text:
        return edit_interaction(message)

    elif "summary" in text:
        return summarize_interaction(message)

    elif "sentiment" in text:
        return sentiment_tool(message)

    elif "follow" in text:
        return followup_tool(message)

    else:
        return log_interaction(message)