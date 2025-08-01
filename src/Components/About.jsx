import NavBar from "./Navbar";
import "./About.css";
import Accordion from "./Accordion";
export default function About() {
  return (
    <div className="about-container">
      <NavBar />
      <h1>About Us</h1>
      <Accordion />
    </div>
  );
}
