import React from 'react';

function NewsBanner() {
    const style = {
      display: "flex",
      backgroundColor: "#20232a",
      color: "rgb(18, 197, 182)",
    //   color: "#61dafb",
      fontSize: "3rem",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
      textAlign: "center",
    };
    return (
      <div style={style}>
        <h5>LATEST NEWS ARTICLES ON CORONAVIRUS</h5>
      </div>
    );
}

export default NewsBanner;