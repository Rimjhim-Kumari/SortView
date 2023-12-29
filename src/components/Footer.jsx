import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
`;

export function Footer() {
  const copyrightStyle = {
    marginTop: '10px', // Add space above the copyright notice (adjust as needed)
    fontSize: '14px', // Adjust the font size as needed
    color: 'gray', // Set the color to your preferred color
  };

  return (
    <FooterDiv>
      {/* Copyright notice */}
      <div style={copyrightStyle}>
        <p>&copy; {new Date().getFullYear()} Made by Rimjhim </p>
      </div>
    </FooterDiv>
  );
}

// export function Footer() {
//   const linkStyle = {
//     textDecoration: 'none',
//     color: 'black', // Set the color to black or any other desired color
//     fontWeight: 'bold', // Make the text bold
//     marginRight: '10px', // Add space between the links (adjust as needed)
//   };

//   return (
//     <FooterDiv>
//       To Contact:   
//       <a href="https://www.linkedin.com/in/rimjhim-kumari-688756223/" target="_blank" style={linkStyle}>
//         <pre>Linkedin</pre>
//       </a> 
//       <a href="mailto:rimjhimkr24@gmail.com" target="_blank" style={linkStyle}>
//         <pre>Email</pre>
//       </a>
//     </FooterDiv>
//   );
// }

// export function Footer() {
//   const linkStyle = {
//     textDecoration: 'none',
//     color: 'black', // Set the color to black or any other desired color
//   };

//   return (
//     <FooterDiv>
//       To Contact:   
//       <a href="https://www.linkedin.com/in/rimjhim-kumari-688756223/" target="_blank" style={linkStyle}>
//         <pre>Linkedin</pre>
//       </a> 
//       <a href="mailto:rimjhimkr24@gmail.com" target="_blank" style={linkStyle}>
//         <pre>Email</pre>
//       </a>
//     </FooterDiv>
//   );
// }

// export function Footer() {
//   return (
//     <FooterDiv>
//     To Contact :   <a href="https://www.linkedin.com/in/rimjhim-kumari-688756223/" target="_blank" style={{textDecoration: 'none'}}><pre >Linkedin  </pre></a> 
//     <a href="mailto:rimjhimkr24@gmail.com" target="_blank" style={{textDecoration: 'none'}}> <pre>Email</pre></a>
//     </FooterDiv>

//   );
// }
