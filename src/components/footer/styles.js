import { styled } from "styled-components";


export const FooterContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
border-top:1px solid #ccc;
position: fixed;
bottom:0;
background-color:white;
z-index:20;

@media only screen and (max-width: 1220px) {

position: static;
    
  }


`

export const FooterContainerWrapper = styled.div`

display:flex;
width:91%;
justify-content:space-between;
@media only screen and (max-width: 1190px) {
    flex-direction:column;
},
@media only screen and (max-width: 1200px) {

  width:100%;
}


`
export const FlexDiv = styled.div`
width:${({width})=>(width ? width: "100%")};
display:flex;
justify-content:${({justifyContent})=>(justifyContent ? justifyContent: "flex-start")};
align-items:center;
background-color:${({background})=>(background ? background: "transparent")};
@media only screen and (max-width: 1150px) {

  width:${({resWidth})=>(resWidth ? resWidth: "100%")};
  align-items:${({alignItems})=>(alignItems ? alignItems: "flex-start")};
}



@media only screen and (max-width: 1120px) {
  justify-content:${({justifyContent})=>(justifyContent ? justifyContent: "flex-start")};
    flex-direction:column;
    width:100%
}

`