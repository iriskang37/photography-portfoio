import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import About from '../Images/About.jpeg';
import Unsplash from '../Images/Unsplash.png'

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
  display: flex; 
  align-items: center; 
  justify-content: center; 
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

const AboutmeContainer = styled.div`
  height: 690px;
  width: 100%;
  background-color: #D0EDFD;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Heading2 = styled.div`
  font-family: Georgia, serif;
  font-size: 40px;
  text-align: center;
  color: #F68282;
  font-weight: 550;
  text-shadow: 0 0 5px rgba(0, 0, 0.3, 0.2);
  padding: 25px;
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    height: 560px;
`;

const Container3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SubContainer = styled.div`
  height: 300px;
  width: 640px;
  background-color: #FD9090;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  align-items: center;
  margin-right: 30px;
  margin-left: 180px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 410px;
  height: 547px;
  object-fit: cover;
  margin-right: 180px;
  margin-top: 10px;
  margin-left: -300px; 
`;

const Heading4 = styled.div`
    padding: 20px;
    font-family: Georgia, serif;
    font-size: 28px;
    text-align: center;
    color: white;
    font-weight: 550;
    margin-bottom: -28px;
    margin-top: -3px;
    text-shadow: 0 0 5px rgba(0, 0, 0.3, 0.2);
`;

const Paragraph = styled.div`
  color: #542222;
  font-family: Georgia, Sans Serif;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;

const SocialContainer = styled.div`
  height: 590px;
  width: 100%;
  background-color: #D0EDFD;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Image1 = styled.img`
  width: 810px;
  border: 15px solid;
  border-color: #F68282;
  margin-top: -5px;
`;

const Wrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center; 
`;

const Button1 = styled.button`
  background-color: #F68282;
  border: none;
  border-radius: 3px;
  font-family: Georgia, Sans Serif;
  font-size: 20px;
  padding: 15px;
  color: white;
  margin-top: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

function Aboutme() {
  const navigate = useNavigate();

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
      <AboutmeContainer>
        <Heading2>About Me</Heading2>
        <Container3>
            <Container2>
                <SubContainer>
                    <Heading4>Background-Information</Heading4>
                    <Paragraph>
                    <br></br>My name is Iris (Jimin) Kang.
                    <br></br>I am a freshman at Korea International School Jeju. 
                    <br></br>I am passionate about architecture and design and I am currently hoping to study these fields in college. 
                    <br></br>The sports I participate in are skiing and swimming. 
                    <br></br>Academically, the subjects I have the most interest in are history, English, and art.
                    <br></br>My hobbies are photography, reading, and playing the violin.
                    </Paragraph>
                </SubContainer>
                <SubContainer>
                    <Heading4>Photography</Heading4>
                    <Paragraph>
                    <br></br>I started learning photography in 2020, in 6th grade, when I joined the school yearbook club. 
                    <br></br>Since then, I have been regularly practicing in my free time and through school classes.  
                    <br></br>Also, I made my Unsplash Account in 2021 and have been trying uploading regularly.
                    <br></br>The applications I use for editing are Adobe Lightroom Classic and Apple Photos.
                    </Paragraph>
                </SubContainer>
            </Container2>
                <Image src={About} alt="A1" />
        </Container3>
      </AboutmeContainer>
      <Line></Line>
      <SocialContainer>
        <Heading2>Links</Heading2>
            <Wrapper>
                    <Image1 src={Unsplash} alt="U1"></Image1>
            </Wrapper>
        <Wrapper>
            <a href="https://unsplash.com/@cherryblossom15" target="_blank">
            <Button1>Check out my Unsplash Account!</Button1>
            </a>
        </Wrapper>
      </SocialContainer>
      <Line></Line>
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

export default Aboutme;
        