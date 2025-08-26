import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img src={logo} alt="r" /> */}
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
