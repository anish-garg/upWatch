import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { userSignin } from "@/utilities/api"
import { useState } from "react"
import { useNavigate } from "react-router"

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await userSignin(email, password);

            if (data.token) {
                localStorage.setItem("authToken", data.token);
            }

            // console.log("Login successful!", data);
            navigate("/");
        } catch (error) {
            console.log("Login failed!", error)
        }
    };

    return (
        <div className="h-screen flex items-center bg-custom-slate">
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
                    <CardDescription>Enter email and password to sign in to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" placeholder="m@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" required />
                            </div>
                            <div>Click here to<a href="/register" className=""> Sign up </a></div>
                            <Button type="submit" className="w-full">
                                Sign in
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Signin;
