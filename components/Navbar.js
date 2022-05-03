function Navbar(){
    return(
        <nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">News</a></li>
        <li><a href="/">Articles</a></li>
        <li><a href="/">Contributing</a></li>
        <li><a href="/">Account</a></li>
        <ul className="account">
            <li>Login</li>
            <li>Register</li>
        </ul>
    </ul>
    </nav>
    )
}

export default Navbar