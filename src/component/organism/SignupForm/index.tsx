import { Button, Form, Input, message, notification } from "antd";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "next/router";
import Link from "next/link";
import app from "../../../../services/firebase";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const auth = getAuth(app);
const SignupForm: React.FC = () => {
    const handleSignup = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (userCredential) {
                message.success("User register successfully");
                router.push("/login");
            }
        } catch (err: any) {
            notification.error(err.message);
        }
    };
    const onFinish = ({ email, password }: any) => {
        handleSignup(email, password);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Wrapper>
            <Form
                name="basic"
                labelCol={{ span: 16 }}
                wrapperCol={{ span: 80 }}
                initialValues={{ remember: true }}
                layout="horizontal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        { required: true, message: "Please input your email!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
            <Link href="/login">
                <a>Already have account</a>
            </Link>
        </Wrapper>
    );
};

export { SignupForm };
