// Header.jsx
import React from "react";
import { useState } from "react";


const Topbar = ({ sharedData }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["About", "portfolio", "Skills"]; // adapte selon tes sections

 const [hoveredItem, setHoveredItem] = useState(null);

  return (
    
    <footer>
      <nav style={styles.nav}>

         <div style={styles.profileContainer}>
            
          <img
            src="https://mohamedms-1.github.io/portfolio/images/myProfile.png"
            alt="Profile"
            style={styles.profileImage}
          />
        </div>

        <ul style={styles.navList}>
          {navItems.map((item) => (
            <li
              key={item}
              style={styles.navItem(hoveredItem === item)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
              <span style={styles.underline(hoveredItem === item)}></span>
            </li>
          ))}
        </ul>
       
      </nav>
    </footer>
  );
};

const styles = {
  header: {
    width: "100%",
    backgroundColor: "#000", // navbar noire
    padding: "10px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
   height: "50px",          // hauteur réduite
 
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: '95%',

    margin:20
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 10,
    padding: 0,
  },

  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },

      navItem: (isHovered) => ({
      color: "#fff",
      cursor: "pointer",
      fontWeight: 500,
      position: "relative",
      paddingBottom: "5px",
      transition: "all 0.3s ease",
    }),
    underline: (isHovered) => ({
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: isHovered ? "100%" : "0%",
      height: "2px",
      backgroundColor: "#fff",
      transition: "width 0.3s ease",
    }),
};

export default Topbar;
