import React,{useState} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';

const ServicesContainer = styled.div`
    ${tw`
        w-full lg:w-10/12 text-base mt-20 grid md:grid-cols-1 md:p-6 lg:mt-20 lg:grid-cols-2
    `}
`;

const ImageContainer = styled.div`
    ${tw`
        w-full justify-center items-center pl-2 pr-2
    `}
   

    img{
        height:400px !important ;
        ${tw`
            w-full rounded-lg grid-flow-col-dense 
        `}
  @media (max-width:767px) {
            max-height:400px !important; 
        }
        @media (max-width:640px){
            max-height:300px;
        }
       
    }
`;

const ServiceSection = styled.div`
    ${tw`
        grid gap-5 grid-cols-1 grid-rows-3 pb-5 pt-5 lg:pt-0 ml-2 mr-2
    `}
`;


const DescriptionCard = styled.p`
${tw`
    text-sm text-gray-700 text-justify p-2 
`}
`;

const CardSection = styled.div`
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    background: linear-gradient(25deg, #52b19f, palegreen);

    ${tw`
        p-2 justify-start items-start rounded-md transition-all delay-300 ease-in-out max-h-96
    `}

    &:hover{
        background: linear-gradient(25deg, #52b162,palegreen);
    }

    &:hover ${DescriptionCard}{
        ${tw`
            text-white
        `}
    }
`;

const TitleCard = styled.h4`
    ${tw`
        text-base  text-white font-semibold items-start text-justify p-2
    `}
`;


const Images = {
        img: require('../../assets/images/courses.png'),
        imgOne: require('../../assets/images/online class.jpg'),
        imgTwo: require('../../assets/images/offline class.jpg'),
        imgThree: require('../../assets/images/Ole_ahmed.png')
    };

const Services = () =>{

    const [changeImg, setChangeImg] = useState(Images.img);





    const handleMouseOver = (changeImg:any)  => {  
            setChangeImg(changeImg);
    }

    return (
        <ServicesContainer>
            <ImageContainer >
                <img  max-height="600px" src={changeImg } alt="course"  /> 
            </ImageContainer>
            <ServiceSection>
                <CardSection 
                onMouseEnter={() => handleMouseOver(Images.imgOne)}
                onMouseLeave={() => handleMouseOver(Images.img)}>
                    <TitleCard>
                        Online Class :
                    </TitleCard>
                    <DescriptionCard>
                        Online Class is more usefull and easy to attend
                    </DescriptionCard>
                </CardSection>
                <CardSection 
                onMouseEnter={() => handleMouseOver(Images.imgTwo)}
                onMouseLeave={() => handleMouseOver(Images.img)}>
                    <TitleCard>
                        Offline Class:
                    </TitleCard>
                    <DescriptionCard>
                        Physically Attent and get more experience with teacher.
                    </DescriptionCard>
                </CardSection>
                <CardSection 
                onMouseEnter={() => handleMouseOver(Images.imgThree)} 
                onMouseLeave={() => handleMouseOver(Images.img)}>
                    <TitleCard>
                        Certification: 
                    </TitleCard>
                    <DescriptionCard>
                        Afther complete the course, We will provide a valuabe certificate. That have a good rank on the market place
                    </DescriptionCard>
                </CardSection>
            </ServiceSection>
        </ServicesContainer>
    )
    }


export default Services;
