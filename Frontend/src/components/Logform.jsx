cd import { useState } from "react";

function LogForm({ formData }) {
  const [task, setTask] = useState("");

  return (
    <div className="form-box">
      <h1>Log HCP Interaction</h1>

      <input
        placeholder="Search or select HCP..."
        value={formData.hcp || ""}
        readOnly
      />

      <select value={formData.type || "Meeting"} readOnly>
        <option>Meeting</option>
        <option>Call</option>
        <option>Email</option>
      </select>

      <input type="date" />
      <input type="time" />

      <input placeholder="Enter names or search..." />

      <textarea
        placeholder="Enter key discussion points..."
        value={formData.topic || ""}
        rows="4"
        readOnly
      />

      <button>🎤 Summarize from Voice Note</button>

      <h3>Materials Shared / Samples Distributed</h3>

      <input
        placeholder="Brochures..."
        value={formData.material || ""}
        readOnly
      />

      <button>🔍 Search/Add</button>
      <button>➕ Add Sample</button>

      <div className="radio-group">
        <label>
          <input type="radio" name="sentiment" /> 😊 Positive
        </label>

        <label>
          <input type="radio" name="sentiment" /> 😐 Neutral
        </label>

        <label>
          <input type="radio" name="sentiment" /> 😞 Negative
        </label>
      </div>

      <textarea placeholder="Key outcomes or agreements..." rows="3"></textarea>

      {/* Clickable Follow-up Actions */}
      <textarea
        placeholder="Enter next steps or tasks..."
        rows="3"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></textarea>

      <div className="followup-box">
        <p className="follow-title">AI Suggested Follow-ups:</p>

        <p
          className="follow-link"
          onClick={() => setTask("Schedule follow-up meeting in 2 weeks")}
        >
          + Schedule follow-up meeting in 2 weeks
        </p>

        <p
          className="follow-link"
          onClick={() => setTask("Send OncoBoost Phase III PDF")}
        >
          + Send OncoBoost Phase III PDF
        </p>

        <p
          className="follow-link"
          onClick={() =>
            setTask("Add Dr. Sharma to advisory board invite list")
          }
        >
          + Add Dr. Sharma to advisory board invite list
        </p>
      </div>

      <button className="save-btn">Save Interaction</button>
    </div>
  );
}

export default LogForm;
