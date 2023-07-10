import React from "react"

export const Like = () =>{
    const [like, setLike] = useState(true)
    return(
        
            <LikeContainer className="btn btn-outline-primary"  onClick={handleClickShowLike}>
                {/* {lke


                } */}
            </LikeContainer>

        
    )
}