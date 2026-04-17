// import LogForm from "./components/LogForm";
// import ChatPanel from "./components/ChatPanel";
// import "./styles/app.css";

// function App() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <LogForm />
//       </div>

//       <div className="right-panel">
//         <ChatPanel />
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import LogForm from "./components/LogForm";
import ChatPanel from "./components/ChatPanel";
import "./styles/app.css";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div className="container">
      <div className="left-panel">
        <LogForm formData={formData} />
      </div>

      <div className="right-panel">
        <ChatPanel setFormData={setFormData} />
      </div>
    </div>
  );
}

export default App;
