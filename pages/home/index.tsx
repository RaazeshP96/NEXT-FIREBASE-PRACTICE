import { Button, message } from "antd";
import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import router from "next/router";
import PrivateRoute from "../../withPrivateRoute";
import app from "../../services/firebase";
import { MainContext } from "../../reducer";
import { NextPage } from "next";

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
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src="logo.png" />
                    </div>
                    <li>
                        <a href="#web">Web Technology</a>
                    </li>
                    <li>
                        <a href="#program">C Programming</a>
                    </li>
                    <li>
                        <a href="#course">Courses</a>
                    </li>
                </ul>

                <div className="rightNav">
                    <input type="text" name="search" id="search" />
                    <button className="btn btn-sm">Search</button>
                </div>
            </nav>

            <section className="firstsection">
                <div className="box-main">
                    <div className="firstHalf">
                        <h1 className="text-big" id="web">
                            Web Technology
                        </h1>

                        <p className="text-small">
                            HTML stands for HyperText Markup Language. It is
                            used to design web pages using a markup language.
                            HTML is the combination of Hypertext and Markup
                            language. Hypertext defines the link between the web
                            pages. A markup language is used to define the text
                            document within tag which defines the structure of
                            web pages. HTML is a markup language that is used by
                            the browser to manipulate text, images, and other
                            content to display it in the required format.
                        </p>
                    </div>
                </div>
            </section>

            <section className="secondsection">
                <div className="box-main">
                    <div className="secondHalf">
                        <h1 className="text-big" id="program">
                            C Programming
                        </h1>
                        <p className="text-small">
                            C is a procedural programming language. It was
                            initially developed by Dennis Ritchie as a system
                            programming language to write operating system. The
                            main features of C language include low-level access
                            to memory, simple set of keywords, and clean style,
                            these features make C language suitable for system
                            programming like operating system or compiler
                            development.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="paras">
                    <h1 className="sectionTag text-big">Java</h1>

                    <p className="sectionSubTag text-small">
                        Java has been one of the most popular programming
                        language for many years. Java is Object Oriented.
                        However it is not considered as pure object oriented as
                        it provides support for primitive data types (like int,
                        char, etc) The Java codes are first compiled into byte
                        code (machine independent code). Then the byte code is
                        run on Java Virtual Machine (JVM) regardless of the
                        underlying architecture.
                    </p>
                </div>

                <div className="thumbnail">
                    <img
                        id="zoom-image"
                        role="img"
                        src="https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829"
                        alt="Laptop computer with blue pink lighting and blank screen place on dark background. 3D illustration image. Laptop computer with blue pink lighting and blank screen place on dark background. 3D illustration image. Laptop Stock Photo"
                        title="Laptop computer with blue pink lighting and blank screen place on dark background. 3D illustration image. Laptop computer with blue pink lighting and blank screen place on dark background. 3D illustration image. Laptop Stock Photo"
                        className="ZoomImageCard-module__zoom__image___FG7Eq"
                    />
                </div>
            </section>

            <footer className="background">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
};

export default PrivateRoute(Home);
