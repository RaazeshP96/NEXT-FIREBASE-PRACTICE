import { Button, Form, Input, message, notification } from "antd";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "next/router";
import Link from "next/link";
import app from "../../../../services/firebase";

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
                    { required: true, message: "Please input your password!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Sign Up
                </Button>
                <Link href="/login">
                    <a>Already have account</a>
                </Link>
            </Form.Item>
        </Form>
    );
};

export { SignupForm };
