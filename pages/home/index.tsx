import { message } from "antd";
import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import router from "next/router";
import PrivateRoute from "../../withPrivateRoute";
import app from "../../services/firebase";
import { MainContext } from "../../reducer";
import { NextPage } from "next";
import styled from "styled-components";

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    cursor: pointer;
    background: black;
    background-blend-mode: darken;
    background-size: cover;
`;

// const background {
//     background: black;
//     background-blend-mode: darken;
//     background-size: cover;
// }

const NavList = styled.ul`
    width: 70%;
    display: flex;
    align-items: center;
    & > li {
        list-style: none;
        padding: 26px 30px;
        & > a {
            text-decoration: none;
            color: white;
            &:hover {
                color: grey;
            }
        }
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        width: 180px;
        border-radius: 50px;
    }
`;
const RightNav = styled.div`
    width: 30%;
    text-align: right;
`;

const SearchBar = styled.input`
    padding: 5px;
    font-size: 17px;
    border: 2px solid grey;
    border-radius: 9px;
`;

const FirstSection = styled.section`
    background-color: green;
    height: 400px;
`;

const SecondSection = styled.section`
    background-color: blue;
    height: 400px;
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    max-width: 80%;
    margin: auto;
    height: 80%;
`;

const FirstHalf = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Secondhalf = styled.div`
    width: 30%;
    img {
        width: 70%;
        border: 4px solid white;
        border-radius: 150px;
        display: block;
        margin: auto;
    }
`;

const H1 = styled.h1`
    font-family: "Piazzolla", serif;
    font-weight: bold;
    font-size: 35px;
`;

const SmallText = styled.p`
    font-size: 18px;
`;

const Button = styled.button`
    padding: 8px 20px;
    margin: 7px 0;
    border: 2px solid white;
    border-radius: 8px;
    background: none;
    color: white;
    cursor: pointer;
`;

const SmallButton = styled.button`
    margin: 7px 0;
    border: 2px solid white;
    border-radius: 8px;
    background: none;
    color: white;
    cursor: pointer;
    padding: 6px 10px;
    vertical-align: middle;
`;

const Section = styled.section`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin: auto;
`;

const Paras = styled.div`
    padding: 0px 65px;
`;

const ImageWrapper = styled.div`
    img {
        width: 250px;
        border: 2px solid black;
        border-radius: 26px;
        margin-top: 19px;
    }
`;

const Footer = styled.p`
    text-align: center;
    padding: 30px 0;
    font-family: "Ubuntu", sans-serif;
    display: flex;
    justify-content: center;
    color: white;
`;

const auth = getAuth(app);

const Home: NextPage = () => {
    const { state } = useContext(MainContext);
    const { email } = state;

    const handleLogout = async () => {
        try {
            await signOut(auth);
            message.success("Logged out succesfully");
            router.push("/login");
        } catch (error: any) {
            message.error(error.message);
        }
    };
    // return (
    //     <div>
    //         This is {email}
    //         <Button onClick={handleLogout}>Logout</Button>
    //     </div>
    // );
    return (
        <div>
            <Navbar>
                <NavList>
                    <Logo>
                        <img src="logo.png" />
                    </Logo>
                    <li>
                        <a href="#web">Web Technology</a>
                    </li>
                    <li>
                        <a href="#program">C Programming</a>
                    </li>
                    <li>
                        <a href="#course">Courses</a>
                    </li>
                </NavList>

                <RightNav>
                    <SearchBar type="text" name="search" id="search" />
                    <SmallButton>Search</SmallButton>
                </RightNav>
            </Navbar>

            <FirstSection>
                <Main>
                    <FirstHalf>
                        <H1 id="web">Web Technology</H1>

                        <SmallText>
                            HTML stands for HyperText Markup Language. It is
                            used to design web pages using a markup language.
                            HTML is the combination of Hypertext and Markup
                            language. Hypertext defines the link between the web
                            pages. A markup language is used to define the text
                            document within tag which defines the structure of
                            web pages. HTML is a markup language that is used by
                            the browser to manipulate text, images, and other
                            content to display it in the required format.
                        </SmallText>
                    </FirstHalf>
                </Main>
            </FirstSection>

            <SecondSection>
                <Main>
                    <Secondhalf>
                        <H1 id="program">C Programming</H1>
                        <SmallText>
                            C is a procedural programming language. It was
                            initially developed by Dennis Ritchie as a system
                            programming language to write operating system. The
                            main features of C language include low-level access
                            to memory, simple set of keywords, and clean style,
                            these features make C language suitable for system
                            programming like operating system or compiler
                            development.
                        </SmallText>
                    </Secondhalf>
                </Main>
            </SecondSection>

            <Section>
                <Paras>
                    <H1>Java</H1>
                    <SmallText>
                        Java has been one of the most popular programming
                        language for many years. Java is Object Oriented.
                        However it is not considered as pure object oriented as
                        it provides support for primitive data types (like int,
                        char, etc) The Java codes are first compiled into byte
                        code (machine independent code). Then the byte code is
                        run on Java Virtual Machine (JVM) regardless of the
                        underlying architecture.
                    </SmallText>
                </Paras>

                <ImageWrapper>
                    <img
                        id="zoom-image"
                        role="img"
                        src="https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829"
                        alt="Laptop computer with blue pink lighting and blank screen place on dark background. 3D illustration image. Laptop computer with blue pink lighting and blank screen place on dark background. 3D illustration image. Laptop Stock Photo"
                        title="Laptop computer with blue pink lighting and blank screen place on dark background. 3D illustration image. Laptop computer with blue pink lighting and blank screen place on dark background. 3D illustration image. Laptop Stock Photo"
                        className="ZoomImageCard-module__zoom__image___FG7Eq"
                    />
                </ImageWrapper>
            </Section>

            <footer className="background">
                <Footer>Copyright ©-All rights are reserved</Footer>
            </footer>
        </div>
    );
};

export default PrivateRoute(Home);
