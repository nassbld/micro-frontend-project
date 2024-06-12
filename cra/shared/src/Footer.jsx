import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3>À propos</h3>
          <p>Nous sommes une entreprise dédiée à fournir les meilleurs services.</p>
        </div>
        <div style={styles.column}>
          <h3>Liens rapides</h3>
          <ul style={styles.linkList}>
            <li><a href="#home" style={styles.link}>Accueil</a></li>
            <li><a href="#about" style={styles.link}>À propos</a></li>
            <li><a href="#services" style={styles.link}>Services</a></li>
            <li><a href="#contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h3>Contact</h3>
          <p>Email: contact@monsiteweb.com</p>
          <p>Téléphone: +123 456 7890</p>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>&copy; 2024 MonSiteWeb. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px 0'
  },
  column: {
    flex: '1',
    padding: '0 20px'
  },
  linkList: {
    listStyle: 'none',
    padding: 0
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
  bottomBar: {
    backgroundColor: '#222',
    padding: '10px 0',
    marginTop: '20px'
  }
};

export default Footer;
