import { useAuth } from "react-oidc-context";


function Navbar() {
    const auth = useAuth();

    const signOutRedirect = () => {
    const clientId = "160kp83i2u3slcipf2hfkghneb";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://us-east-1hbddo4b3r.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };
  
    return <div className="font-bold bg-blue-500 text-white p-4 flex">
        <h1 className="text-2xl mr-auto">
            Navbar
        </h1>
        
        <img src="" alt="pfp" className="ml-2 h-8 mask-circle" /> {/*profile picture: supposed to be circular and on the right side */}

        {auth.isAuthenticated && (
            <>
            <div className="flex items-center ml-auto"> 
                <p> 
                    Hello, {auth.user?.profile?.name}
                </p>
            </div>
          <button onClick={() => auth.removeUser()} className="ml-auto text-2xl hover:bg-blue-700 rounded-2xl border-2">
            Logout {/*logout button: make it rounded and bigger*/}
          </button>
          </>
        )}
        {!auth.isAuthenticated && (
          <button onClick={() => auth.signinRedirect()} className="ml-auto text-2xl hover:bg-blue-700 rounded-2xl border-2">
            Login {/*login button: make it rounded and bigger*/}
        </button>)}
    </div>;
}

export default Navbar;