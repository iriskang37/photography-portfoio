import styled from "styled-components";
import React, {useState} from "react";
import ModalImage from "react-modal-image";
import { useNavigate } from 'react-router-dom';
import firstP from "../Images/1.JPG";
import secondP from "../Images/2.jpg";
import thirdP from "../Images/3.JPG";
import fourthP from "../Images/4.JPG";
import fifthP from "../Images/5.JPG";
import seventhP from "../Images/6.jpg";
import ninthP from "../Images/9.jpg";
import eleventhP from "../Images/11.jpg";
import twelfthP from "../Images/12.jpg";
import thirteenP from "../Images/13.jpg";
import fourteenP from "../Images/14.jpg";
import fifteenP from "../Images/15.jpg";
import sixteenP from "../Images/16.JPG";
import seventeenP from "../Images/17.jpeg"
import eighteenP from "../Images/18.jpg";
import nineteenP from "../Images/19.jpeg";
import twentyP from "../Images/20.jpg";
import twenty2P from "../Images/22.jpg";
import twenty3P from "../Images/23.JPG";
import twenty4P from "../Images/24.jpg";
import twenty5P from "../Images/25.jpg";
import twenty6P from "../Images/26.JPG";
import twenty7P from "../Images/27.JPG";
import twenty8P from "../Images/28.JPG";
import thirtyP from "../Images/30.jpeg";
import thirty1P from "../Images/31.jpg";
import thirty2P from "../Images/32.jpg";
import thirty3P from "../Images/33.jpg";
import thirty4P from "../Images/34.jpg";
import thirty5P from "../Images/35.jpg";
import thirty6P from "../Images/36.jpg";
import thirty7P from "../Images/37.jpeg";
import thirty8P from "../Images/38.jpeg";
import thirty9P from "../Images/39.jpeg";
import fourtyP from "../Images/40.jpeg";
import fourty1P from "../Images/41.jpeg";
import fourty2P from "../Images/42.jpeg";
import fourty3P from "../Images/43.jpeg";
import fourty4P from "../Images/44.jpeg";
import fourty5P from "../Images/45.jpeg";


import "./index.css";

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

const MainContainer = styled.div`
  height: 2570px;
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
  margin-bottom: 30px;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
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

function AllPhotosPage () {

    const navigate =  useNavigate()

        return(
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
                <Line>
                </Line>
                <MainContainer>
                    <Heading2>Photos</Heading2>
                    <PhotoContainer>
                        <ModalImage
                        small={twenty2P}
                        large={twenty2P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={secondP}
                        large={secondP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={thirdP}
                        large={thirdP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={fourteenP}
                        large={fourteenP}
                        className="modal-image"
                        />
                    </PhotoContainer>
                    <PhotoContainer>
                        <ModalImage
                        small={fifthP}
                        large={fifthP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={seventhP}
                        large={seventhP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={thirtyP}
                        large={thirtyP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={thirty2P}
                        large={thirty2P}
                        className="modal-image"
                        />
                    </PhotoContainer>
                    <PhotoContainer>
                        <ModalImage
                        small={twelfthP}
                        large={twelfthP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={thirteenP}
                        large={thirteenP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={fourthP}
                        large={fourthP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={ninthP}
                        large={ninthP}
                        className="modal-image"
                        />
                    </PhotoContainer>
                    <PhotoContainer>
                        <ModalImage
                        small={sixteenP}
                        large={sixteenP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={seventeenP}
                        large={seventeenP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={eighteenP}
                        large={eighteenP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={nineteenP}
                        large={nineteenP}
                        className="modal-image"
                        />
                    </PhotoContainer>
                    <PhotoContainer>
                        <ModalImage
                        small={twentyP}
                        large={twentyP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={firstP}
                        large={firstP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={twenty3P}
                        large={twenty3P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={twenty4P}
                        large={twenty4P}
                        className="modal-image"
                        />
                      </PhotoContainer>
                      <PhotoContainer>
                        <ModalImage
                        small={twenty5P}
                        large={twenty5P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={twenty6P}
                        large={twenty6P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={twenty7P}
                        large={twenty7P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={thirty3P}
                        large={thirty3P}
                        className="modal-image"
                        />
                    </PhotoContainer>
                    <PhotoContainer>
                        <ModalImage
                        small={thirty1P}
                        large={thirty1P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={eleventhP}
                        large={eleventhP}
                        className="modal-image"
                        />
                        <ModalImage
                        small={thirty5P}
                        large={thirty5P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={twenty8P}
                        large={twenty8P}
                        className="modal-image"
                        />
                    </PhotoContainer>
                    <PhotoContainer>
                        <ModalImage
                        small={thirty7P}
                        large={thirty7P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={thirty8P}
                        large={thirty8P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={thirty9P}
                        large={thirty9P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={fourty1P}
                        large={fourty1P}
                        className="modal-image"
                        />
                    </PhotoContainer>
                    <PhotoContainer>
                        <ModalImage
                        small={fourty2P}
                        large={fourty2P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={fourty3P}
                        large={fourty3P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={fourty4P}
                        large={fourty4P}
                        className="modal-image"
                        />
                        <ModalImage
                        small={fourty5P}
                        large={fourty5P}
                        className="modal-image"
                        />
                    </PhotoContainer>
                </MainContainer>
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
        )
    }
    
    export default AllPhotosPage;