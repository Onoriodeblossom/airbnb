import { styled } from "styled-components";


export const NavBarContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background:white;
z-index:4; 
position:sticky;
top: 0;
justify-content:center;
@media only screen and (max-width: 380px) {

   
  
}
@media only screen and (max-width: 549px) {

    width:100%;

  
}
`;

export const NavBarContainerWrapper = styled.div`
width:92%;
display:flex;
align-items:center;
justify-content:space-between;
@media only screen and (max-width: 850px) {
    width:100%;
    flex-direction:column;

  
}

`;

export const Logo = styled.img`
height:80px;
width:128px;

@media only screen and (max-width: 739px) {

    display:none

  
}

`



export const FilterContainer = styled.div`
width:auto;
height:auto;

@media only screen and (max-width: 739px) {

    display:none

  
}


`


export const Filter = styled.div`
background-color:white;
border-radius:25px;
justify-content:space-between;
align-items:center;
width:300px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 0.5px 3px;
padding-right:10px;
display:flex;
padding-left:24px;
height:50px;


&:hover{

box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 6px;
}
`



export const SearchIconContainer = styled.div`
border-radius:50px;
background-color:#ff3853;
display:flex;
padding:10px;
justify-content:center;
align-items:center;


`
export const Divider =styled.div`

border-left: 2px solid #dddddd;
height: 30px;
`



export const Container=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:300px;
@media only screen and (max-width: 739px) {

    display:none

  
}

`

export const ProfileContainer = styled.div`
border: 1px solid #dddddd;
padding:7px;
display:flex;
width:60px;
justify-content:space-between;
border-radius:25px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 1px;
&:hover{

    box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 6px;
    }
`

 export const ResponsiveMode = styled.div`

width:90%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 1px;
background-color:white;
border-radius:25px;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 0.5px 3px;
padding-right:10px;
display:flex;
padding-left:24px;
height:50px;
margin-top:20px;

// margin-bottom:20px;
justify-content:space-between;
display:none;

@media only screen and (max-width: 739px) {

    display:flex;

  
}


 
 `

 export const TextContainer = styled.p`

line-height:5px;
 flex-direction:column;
 margin-left:10px;
 
  
  `

  export const IconContainer = styled.div`

  margin-right:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50px;
  padding:5px;
  border:1px solid #b3b3b3;

  `


  export const Flex =styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  
  
  `


