import { Button, Form, Input, message, notification } from "antd";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "next/router";
import Link from "next/link";
import app from "../../../../services/firebase";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    & .ant-form {
        width: 50%;
    }
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
            if (err.code === "auth/email-already-in-use") {
                message.error("This email is already registered !!!!");
            } else {
                message.error("something went wrong");
            }
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
                initialValues={{ remember: true }}
                layout="vertical"
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
                    <Input.Password type="password" />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "The two passwords that you entered do not match!"
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Register
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
