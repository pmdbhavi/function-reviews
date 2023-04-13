import {useState} from 'react'
import {MainCon,Con,Contain,Heading,LeftImg,RightImg,Img,Button,Name,Company,Description} from './styledComponents'

const ReviewsApp=(props)=>{
    const [num,setNum]=useState(0)
    const {reviewsList}=props

    const leftArrow=()=>{
        if(num>0){
            setNum(prevState=>prevState-1)
        }
    }

    const rightArrow=()=>{
        const length=reviewsList.length
        if(num<length-1){
            setNum(prevState=>prevState+1)
        }
    }

    return(
        <MainCon>
            <Heading>Reviews</Heading>
            <Con>
                <Button type="button" onClick={leftArrow}>
                    <LeftImg src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="left arrow"/>
                </Button>
                <Contain>
                    <Img src={reviewsList[num].imgUrl} alt={reviewsList[num].username}/>
                    <Name>{reviewsList[num].username}</Name>
                    <Company>{reviewsList[num].companyName}</Company>
                    <Description>{reviewsList[num].description}</Description>
                </Contain>
                <Button type="button" onClick={rightArrow}>
                    <RightImg src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right arrow"/>
                </Button>
            </Con>
        </MainCon>
    )
}

export default ReviewsApp