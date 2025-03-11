/* eslint-disable no-unused-vars */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createUser } from "@/utilities/api"
import { useState } from "react"
import { useNavigate } from "react-router"

const Signup = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await createUser(formData);
            // console.log("User signed in:", data);
            if (data.token) {
                localStorage.setItem("authToken", data.token);
            }
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="h-screen flex items-center bg-custom-slate">
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Signup</CardTitle>
                    <CardDescription>Enter email and password to create a new account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input onChange={handleChange} name="email" id="email" type="email" placeholder="m@example.com" required /> {/* Fix here */}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input onChange={handleChange} name="password" id="password" type="password" required /> {/* Fix here */}
                            </div>
                            <div>Click here to<a href="/login" className=""> Sign in </a></div>
                            <Button type="submit" className="w-full">
                                Signup
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Signup;
