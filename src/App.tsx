import { Navigate, Route, Routes } from "react-router-dom";
import ChatApp from "./pages/chat-app";


const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<ChatApp />} />
    </Routes>
  );
};

export default App;
