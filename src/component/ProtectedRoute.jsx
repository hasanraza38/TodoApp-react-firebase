import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ comp }) {
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsUser(true);
        return;
      }
      navigate("/login");
    });
  }, []);

  return setIsUser ? comp : <h1>Loading...</h1>;
}

export default ProtectedRoute;
