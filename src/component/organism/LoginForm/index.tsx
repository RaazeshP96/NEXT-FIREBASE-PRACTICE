import { Button, Form, Input, message, notification } from "antd";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import router from "next/router";
import React, { useContext } from "react";
import app from "../../../../services/firebase";
import styled from "styled-components";
import { MainContext } from "../../../../reducer";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    align-items: center !important;
    justify-content: center !important;
    flex-direction: column;
    & .ant-btn-primary {
        width: 100%;
    }
`;

const auth = getAuth(app);
const LoginForm: React.FC = () => {
    const { state } = useContext(MainContext);
    const { email } = state;
    const handleLogin = async (email: string, password: string) => {
        try {
            const data = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (!data || !data.user) {
                return;
            } else {
                router.push("/home");
            }
        } catch (error: any) {
            message.error("Something went wrong");
        }
    };

    const onFinish = ({ email, password }: any) => {
        handleLogin(email, password);
    };

    const onFinishFailed = (errorInfo: any) => {
        message.error(errorInfo);
    };

    return (
        <Wrapper>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                        {
                            type: "email",
                            message: "Invalid email!!!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
            <Link href="/sign-up">
                <a>Register now!</a>
            </Link>
            <p>This is {email}</p>
        </Wrapper>
    );
};

export { LoginForm };
