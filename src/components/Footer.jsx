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
  return (
    <FooterDiv  >
    To Contact : <a href="https://www.linkedin.com/in/rimjhim-kumari-688756223/" target="_blank" style={{textDecoration: 'none'}}  ><pre >  Linkedin  </pre> </a> 
    <a href="rimjhimkr24@gmail.com" target="_blank" style={{textDecoration: 'none'}}> <pre>Email</pre></a>
    </FooterDiv>
  );
}
