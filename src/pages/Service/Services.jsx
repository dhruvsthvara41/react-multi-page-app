import { Link, Outlet } from "react-router-dom";
import "./Services.css"; // Import CSS file

function Services() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <nav className="services-nav">
        <ul>
          <li>
            <Link to="individual">Individual Services</Link>
          </li>
          <li>
            <Link to="government">Government Services</Link>
          </li>
          <li>
            <Link to="corporate">Corporate Services</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Services;
