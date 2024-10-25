import axios from "axios";
import { useEffect } from "react";

function App() {
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    console.log(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
    return () => {};
  }, []);

  return (
    <>
      <div className="emotion-box">
        <div className="emotion-container">
          <text className="header">Emotion Detector</text>
          <div className="emotion-cam">
            <h1>test</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
