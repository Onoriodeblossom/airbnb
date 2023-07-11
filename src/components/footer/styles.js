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

@media only screen and (max-width: 850px) {

  width:100%;
display:flex;
justify-content:center;
border-top:1px solid #ccc;
position: static;
bottom:0;
background-color:white;
z-index:20;
    
  }


`

export const FooterContainerWrapper = styled.div`

display:flex;
width:91%;
justify-content:space-between;
@media only screen and (max-width: 850px) {
    flex-direction:column;
}


`
export const FlexDiv = styled.div`
width:${({width})=>(width ? width: "40%")};
display:flex;
justify-content:space-between;
align-items:center;


@media only screen and (max-width: 850px) {
    flex-direction:column;
    width:100%
}

`