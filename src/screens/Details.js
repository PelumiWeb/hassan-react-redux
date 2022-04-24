import React from 'react'
import { useLocation} from "react-router-dom"
import styled from "styled-components"
function Details() {
    const {state} = useLocation()
  return (
    <DetailsWrapper>
         <ImageContainer>
                <Image src={state.post.image[state.post.id]} alt='' />
            </ImageContainer>
        {/* <img  /> */}
        <div> 
        <h3>{state.post.name}</h3>
        <h4>{state.post.price}</h4>
        <p style={{width: "70%"}}>{state.post.description}</p>
        </div>
       

    </DetailsWrapper>
  )
}

export default Details

const DetailsWrapper = styled.div` 
display: flex;
align-items: center;
justify-content: center;
`

const ImageContainer = styled.div`
width: 100%;
height: 20rem;
transition: all .3s;
margin: 10px;

`
const Image = styled.img`
height: 100%;
object-fit: cover;
width: 100%;

`