// Header.jsx
import React from "react";


const Topbar = ({ sharedData }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["About", "portfolio", "Skills", "Contact"]; // adapte selon tes sections

  return (
    
    <footer>
      <nav style={styles.nav}>

         <div style={styles.profileContainer}>
          <img
            src={"/images/myProfile.png"}
            alt="Profile"
            style={styles.profileImage}
          />
        </div>

        <ul style={styles.navList}>
          {navItems.map((item) => (
            <li
              key={item}
              style={styles.navItem}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
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
  navItem: {
    color: "#fff",
    cursor: "pointer",
    fontWeight: "500",
    transition: "color 0.3s",
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
};

export default Topbar;
