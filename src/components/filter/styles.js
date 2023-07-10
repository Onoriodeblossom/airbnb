import { styled } from "styled-components";
import { Text } from "../text/styles";


export const Container = styled.div`
width:100%;
height:${(props)=> (props.stickyClass ? "100px" :"100px")};;
display:flex;
justify-content:center;
transition: ease 0.2s;
border-top:1px solid #ccc;
box-shadow: ${(props)=> (props.stickyClass ? "3px 3px 5px 1px #ccc" : "0px 0px 0px 0px #ccc")} ;        
border-bottom:  ${(props)=> (props.stickyClass ? "0px solid " : "0px solid")};
padding-top:${(props)=> (props.stickyClass ? "0px" :"30px")};
@media only screen and (max-width: 739px) {

 

  border-top:0px solid #fff;

}


`;


export const ContainerWrapper = styled.div`
width:92%;
display:flex;
align-items:center;
justify-content:space-between;
@media only screen and (max-width: 739px) {

    width:100%;

  
}



`


export const FilterContainer = styled.div`
width:88%;
align-items:center;
justify-content:space-between;
display: flex;
overflow-x: scroll;
scroll-behavior: smooth;

&::-webkit-scrollbar {
    display: none;
  };

@media only screen and (max-width: 739px) {

    width:100%;

  
}

`


export const FilterTextContainerWrapper = styled.div`
max-width:auto;
align:items:center;
display:flex;
justify-content:center;


`
export const IconContainer = styled.div`
position:${({position})=>(position ? position: "static")};
left:${({left})=>(left ? left: "auto")};
right:${({right})=>(right ? right: "auto")};
display:flex;
justify-content:center;
align-items:center;
border-radius:50px;
padding:5px;
border:1px solid #b3b3b3;

@media only screen and (max-width: 739px) {

    display:none;

  
}
`

export const FilterText = styled(Text)`
color:#5c5c5c;
 white-space: nowrap;

&:hover{
color:#000;
}
`

export const Icon = styled.div`
width:30px;
color:#5c5c5c;
`

export const FilterIconContainer = styled.div`
padding-right:65px;
line-height:10px;
width:auto;
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;


`

export const FilterIconContainerWrapper = styled.div`

align-items:center;
display:flex;
flex-direction:column;
justify-content:center;
&:hover {
    border-bottom:3px solid;
      ${Icon} {
        color: #000;
      };
      ${FilterText} {
        color: #000;
      };
},
`







export const FilterTextContainer  = styled.div`

border:0.7px solid #b3b3b3;
border-radius:20px;
padding:5px;
height:45px;
width:90px;
display:flex;
justify-content:center;
align-items:center;


@media only screen and (max-width: 749px) {

display:none;

  
}

`