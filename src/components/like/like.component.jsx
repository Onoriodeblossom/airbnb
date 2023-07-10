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
                
                <AiOutlineHeart size={30} color="#fff"/>:
                <AiFillHeart    size={30} color="red"/>
                


                }
                
            </LikeContainer>

        
    )
}