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
      <div className="header">
        <h1 className="header">Emotion Detector</h1>
      </div>
    </>
  );
}

export default App;
