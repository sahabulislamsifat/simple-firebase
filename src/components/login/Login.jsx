import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .cath((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login With Google</button>
    </div>
  );
};

export default Login;
