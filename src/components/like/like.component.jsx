import React,{useState} from "react"
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
import { LikeContainer } from "./styles";

export const Like = () =>{
    const [like, setLike] = useState(true)

    const handleClickShowLike = () => {
        setLike(!like);
      };
    
    return(
        
            <LikeContainer className="btn btn-outline-primary"  onClick={handleClickShowLike}>
                {like ?
                
                <AiOutlineHeart size={24} color="black"/>:
                <AiFillHeart    size={24} color="red"/>
                


                }
                
            </LikeContainer>

        
    )
}