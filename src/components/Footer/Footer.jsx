import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <div style={{
      marginTop: "30px",
      padding: "10px 0",
      backgroundColor: "#004BA8",
      color: "#fff",
      textAlign: "center",
    }}>
      <div className="container">
        <p>Copyright. &copy; {date.getFullYear()} </p>
      </div>
    </div>
  )
}

export default Footer
