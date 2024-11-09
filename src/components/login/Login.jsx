import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  console.log(user);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .cath((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("sign out done"), setUser(null))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="flex gap-6">
        {/* <button onClick={handleGoogleSignIn}>Login With Google</button>
        <button onClick={handleSignOut}>Sign Out</button> */}
        {user ? (
          <button className="btn btn-error" onClick={handleSignOut}>
            Log Out
          </button>
        ) : (
          <>
            <button className="btn btn-success" onClick={handleGoogleSignIn}>
              Login With Google
            </button>
            <button className="btn btn-accent" onClick={handleGithubSignIn}>
              Login With GitHub
            </button>
          </>
        )}
      </div>
      {user && (
        <div className="my-3">
          <h4> {user.displayName}</h4>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
