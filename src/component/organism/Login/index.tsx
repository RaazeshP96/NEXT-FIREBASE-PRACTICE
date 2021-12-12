import { Button, Form, Input, message, notification } from "antd";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import router from "next/router";
import React from "react";
import app from "../../../../services/firebase";

const auth = getAuth(app);
const LoginForm: React.FC = () => {
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
            console.log(error);
            notification.error(error.message);
        }
    };

    const onFinish = ({ email, password }: any) => {
        handleLogin(email, password);
    };

    const onFinishFailed = (errorInfo: any) => {
        message.error(errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Email",
                        },
                        {
                            type: "email",
                            message: "wrong email id",
                        },
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
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Log In
                    </Button>
                </Form.Item>
            </Form>
            <Link href="/sign-up">
                <a>Register user</a>
            </Link>
        </>
    );
};

export { LoginForm };
