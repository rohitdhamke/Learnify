// Card.jsx
import React from "react";

const Card = ({ title, image, className ,button}) => {
    return (
        <div style={styles.card} className={className}>
            <img src={image} alt={title} style={styles.image} className="card-img" />
            <h2 style={styles.title}>{title}</h2>
            {button && <button style={styles.button}>{button}</button>}
        </div>
    );
};

const styles = {
    card: {
        width: "260px",
        backgroundColor: "#ffffffff",
        color: "#000000ff",
        borderRadius: "14px",
        padding: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        textAlign: "center",
    },
    image: {
        width: "100%",
        borderRadius: "10px",
        marginBottom: "10px",
        objectFit: "cover" 
    },
    title: {
        margin: "10px 0 6px",
    },
    button: {
        marginTop: "12px",
        padding: "10px 20px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    }
};

export default Card;
