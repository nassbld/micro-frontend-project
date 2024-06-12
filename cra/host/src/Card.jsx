import React from 'react';

const Card = ({ text }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{text}</h2>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  title: {
    margin: 0,
    fontSize: '1.5em',
    color: '#333'
  }
};

export default Card;
