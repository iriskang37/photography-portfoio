import styled from "styled-components";
import React from "react";
import F1 from "../Images/F1.jpg";
import F2 from "../Images/F2.jpg";
import F3 from "../Images/F3.jpg";
import M1 from "../Images/myphoto.png";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const HeaderContainer = styled.div`
  margin-top: -40px;
  height: 210px;
  width: 100%;
  align-items: center;
  background-color: #D0EDFD;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const Heading1 = styled.h1`
  font-family: Georgia, serif;
  font-size: 50px;
  text-align: center;
  line-height: 220px;
  color: #F68282;
  font-weight: 550;
  text-shadow: 0 0 5px rgba(0, 0, 0.3, 0.2);
`;

const Line = styled.div`
  height: 7px;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const Navigator = styled.div`
  height: 90px;
  width: 100%;
  background-color: #F68282;
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  display: flex; /* Display as flex container */
  align-items: center; /* Center vertically within the flex container */
  justify-content: center; /* Center horizontally within the flex container */
  margin: 17px;
  font-family: Georgia, serif;
  font-size: 18px;
  background-color: #D0EDFD;
  border: none;
  border-radius: 5px;
  padding: 28px;
  color: #542222;
  max-height: 35px;
  box-shadow: 0 0 5px rgba(0.4, 0, 0.2, 0.3);
  text-shadow: 0 0 5px rgba(0, 0, 0.05, 0.08);
`;

const FeaturedContainer = styled.div`
  height: 520px;
  width: 100%;
  background-color: #D0EDFD;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Heading2 = styled.div`
  font-family: Georgia, serif;
  font-size: 40px;
  text-align: center;
  color: #F68282;
  font-weight: 550;
  text-shadow: 0 0 5px rgba(0, 0, 0.3, 0.2);
  margin-top: 30px;
  margin-bottom: 20px;
`;

const ImageRow = styled.div`
  display: flex;
  align-items: center;
`;

const FirstImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  margin: 5px;
  object-position: center +35%;
`;

const SecondImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  margin: 5px;
  filter: brightness(110%);
`;

const ThirdImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  margin: 5px;
  object-position: 35% center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageText = styled.p`
  font-family: Georgia, serif;
  font-size: 18px;
  color: #3D1919;
  max-width: 320px;
  text-align: center;
`;

const AboutMeContainer = styled.div`
  height: 560px;
  width: 100%;
  background-color: #D0EDFD;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  align-items:center
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Myphoto = styled.div`
  height: 440px;
  margin-left: 240px;
  display: flex;
  margin-right: 60px;
  
  img{
  max-width: 120%;
  max-height: 120%;
  object-fit: contain;
  margin-right: 20px;
  }
`;

const DescriptionContainer = styled.div`
  background-color: #FD9090;
  margin-right: 240px;
  height: 420px;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Button1 = styled.button`
  background-color: #white;
  border: none;
  border-radius: 3px;
  font-family: Georgia, Sans Serif;
  font-size: 20px;
  padding: 15px;
  width: 200px;
  color: #542222;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Paragraph = styled.div`
  color: #542222;
  font-family: Georgia, Sans Serif;
  font-size: 20px;
  margin:20px;
  line-height: 1.6;
  margin-bottom: 2px;
`;

const Footer = styled.div`
  background-color: #F68282;
  height: 200px;
`;

const FContainer3 = styled.div`
  display: flex;
  flex-direction: row; 
`;

const FContainer1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: center;
  font-family: Georgia;
  font-size: 24px;
  line-height: 1.5;
  margin-left: 65px;
`;

const FContainer2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center;
  font-family: Georgia;
  font-size: 24px;
  line-height: 1.5;
  color: #542222;
  margin-right: 65px;
`;

const Heading3 = styled.div`
  padding: 20px;
  font-family: Georgia, serif;
  font-size: 40px;
  text-align: center;
  color: white;
  font-weight: 550;
  text-shadow: 0 0 5px rgba(0, 0, 0.3, 0.2);
  margin-bottom: 5px;
`;

function MainPage() {

const navigate =  useNavigate();

  return (
    <Container>
      <HeaderContainer>
        <Heading1>Iris's Photography Portfolio</Heading1>
      </HeaderContainer>
      <Navigator>
        <Button onClick={() => navigate("/")}>Main Page</Button>
        <Button onClick={() => navigate("/allphotos")}>Photo Gallery</Button>
        <Button onClick={() => navigate("/aboutme")}>About Me</Button>
        <Button onClick={() => navigate("/myworks")}>My Other Works</Button>
        <Button><a href="#contact" style={{textDecoration:"none", color: "#542222"}}>Contacts</a></Button>
      </Navigator>
      <Line></Line>
      <FeaturedContainer>
        <Heading2>Featured Photos</Heading2>
        <ImageRow>
          <ImageContainer>
            <FirstImage src={F1} alt="F1" />
            <ImageText>This is a photo taken in Seoul at Gyeongbok Palace.</ImageText>
          </ImageContainer>       
          <ImageContainer>
            <SecondImage src={F2} alt="F2" />
            <ImageText>This is a photo taken in Jeju at Itami Jun's Stone museum. </ImageText>
          </ImageContainer>
          <ImageContainer>
            <ThirdImage src={F3} alt="F3" />
            <ImageText>This is a photo taken in Charmonix, France during a ski camp.</ImageText>
          </ImageContainer>
        </ImageRow>
      </FeaturedContainer>
      <Line></Line>
      <AboutMeContainer>
        <Heading2>About Me (Brief)</Heading2>
        <FlexContainer>
          <Myphoto>
            <img src={M1} alt="myphoto" />
          </Myphoto>
          <DescriptionContainer>
            <Paragraph>
             <li>My name is Jimin Kang, also known as Iris.</li>
             <li>I am a freshman at Korea International School Jeju.</li>
             <li>The things I am passionate about are architecture and design.</li>
             <li>The sports I participate in are skiing and swimming.</li>
             <li>My favorite subjects are istory, English, and art.</li>
             <li>My hobbies are photography, reading, and playing the violin.</li>
             <li>I started learning photography 2 years ago, in 6th grade, through yearbook club.</li>
             <li>Since then, I have been regularly practicing and have been uploading to my unsplash account.</li>
            </Paragraph>
            <Button1 onClick={()=> navigate("/aboutme")}>Read More</Button1>
          </DescriptionContainer>
        </FlexContainer>
      </AboutMeContainer>
      <Line>
      </Line>
      <Footer>
        <a name="contact"></a>
        <Heading3>Contact Information</Heading3>
          <FContainer3>
          <FContainer1>
          Phone
          <br />
          010-7708-8856
          </FContainer1>
          <FContainer2>
          Email
          <br />
          jmkang27@kis.ac
        </FContainer2>
      </FContainer3>
    </Footer>
  </Container>
  );
}

export default MainPage;
