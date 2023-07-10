import { styled } from "styled-components";

export const Text = styled.p`
color:${({color})=>(color ? color: "#000")};
font-size:${({size})=>(size ? size: "16px")};
font-weight:${({fontWeight})=>(fontWeight ? fontWeight: "600")};
font-family: 'Open Sans', sans-serif;


`