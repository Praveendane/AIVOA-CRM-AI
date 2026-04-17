import axios from "axios";

function LogForm({ formData }) {
  const saveData = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/save", {
        hcp: formData.hcp || "",
        type: formData.type || "",
        sentiment: formData.sentiment || "",
        material: formData.material || "",
      });

      alert(res.data.message);
    } catch (error) {
      alert("Error saving data");
    }
  };

  return (
    <div>
      <h2>Log HCP Interaction</h2>

      <input placeholder="HCP Name" value={formData.hcp || ""} readOnly />

      <input placeholder="Type" value={formData.type || ""} readOnly />

      <input
        placeholder="Sentiment"
        value={formData.sentiment || ""}
        readOnly
      />

      <input placeholder="Material" value={formData.material || ""} readOnly />

      <textarea placeholder="Topics Discussed"></textarea>

      <button onClick={saveData}>Save Interaction</button>
    </div>
  );
}

export default LogForm;
