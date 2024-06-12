import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>MonSiteWeb</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Accueil</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>À propos</a></li>
          <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff'
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  nav: {
    display: 'flex'
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navItem: {
    marginLeft: '20px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Header;
