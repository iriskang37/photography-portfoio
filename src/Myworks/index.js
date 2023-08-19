import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import P1 from "../Images/P1.png";
import P2 from "../Images/P2.png";

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

const MainContainer = styled.div`
  height: 660px;
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
  margin-bottom: 5px;
`;

const Image = styled.img`
    width: 550px;
    height: 425px;
    border: 15px solid;
    margin-top: 13px;
    border-color: #F68282;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Button1 = styled.button`
  background-color: #F68282;
  border: none;
  border-radius: 3px;
  font-family: Georgia, Sans Serif;
  font-size: 20px;
  padding: 15px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Wrapper2 = styled.div`
    padding: 10px;
`;

const BContainer1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 185px;
`;

const BContainer2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 185px;
`;

function Myworks() {
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
        <MainContainer>
            <Heading2>Portfolios</Heading2>
            <Wrapper>
                <Wrapper2>
                    <Image src={P1} alt="P1"></Image>
                </Wrapper2>
                <Wrapper2>
                    <Image src={P2} alt="P2"></Image>
                </Wrapper2>
            </Wrapper>
            <Wrapper>
            <BContainer1>
                <a href="https://www.canva.com/design/DAFjC_S1PRs/59dYiUMAk93LwIxNGoiZnA/view?utm_content=DAFjC_S1PRs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1" target="_blank">
                <Button1>Check this Portfolio out</Button1>
                </a>
            </BContainer1>
            <BContainer2>
                <a href="https://drive.google.com/file/d/171r08qrvGXQQKa2MS-fF_jHhYH9t9coy/view?usp=sharing" target="_blank">
                <Button1>Check this Portfolio out</Button1>
                </a>
            </BContainer2>
            </Wrapper>
        </MainContainer>
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
  
  export default Myworks;