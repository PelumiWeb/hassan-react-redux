import React from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"

function CardComponent({post}) {
    const navigate = useNavigate()
    const GotoDetails = () => {
    navigate(`/${post.id}`, {state: {post: post}})

    }

    return (
        <Card onClick={GotoDetails}>
            <ImageContainer>
                <Image src={post.image[post.id]} alt='' />
            </ImageContainer>
            <ContentContainer> 
            <p>{post.name}</p>
            <p>{post.model}</p>
            <p>{post.price}</p>
            </ContentContainer>
         

        </Card>
    )
}

export default CardComponent

const ImageContainer = styled.div`
width: 100%;
height: 20rem;
transition: all .3s;

`

const Card = styled.div`
width: 17rem;
height: 31rem;
margin: 15px;
border-radius: 10px;
background-color: #FFFFFF;
box-shadow: 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);
&:hover ${ImageContainer} {
transform: scale(1.02);
}
`

// const ImageContainer = styled.div`
// width: 100%;
// height: 20rem;
// `

const Image = styled.img`
height: 100%;
object-fit: cover;
width: 100%;


`
const ContentContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column ;
align-items: center;
justify-content:center ;
` 

