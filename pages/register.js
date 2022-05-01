import Navbar from "../components/Navbar";

export default function Register(){
    return (
      <>
      <div class = "register" align="center">
        <form action = "/registerPost" method = "POST">
            <h1 style = {{ color : "white" }}>Register to SciencePlanet</h1>
            <input placeholder="Username" type="text" name="username" />
            <input placeholder="E-mail" type="email" name="email" />
            <input placeholder="Password!" type="password" name="password" />
            <input placeholder="Re-enter password" type="password" name="repassword" />
            <button>Register</button>
        </form>
    </div>
      </>
    )
}