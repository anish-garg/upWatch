import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = () => {
            const storedUserData = localStorage.getItem("userData");
            if (storedUserData) {
                setUser(JSON.parse(storedUserData));
            } else {
                setUser(null);
            }
        };

        loadUser(); // Load user data initially

        // Listen for localStorage changes (for login updates)
        window.addEventListener("storage", loadUser);

        return () => window.removeEventListener("storage", loadUser);
    }, []);

    if (!user) return null; 

    return (
        <div className="flex items-center gap-3">
            <Avatar>
                <AvatarImage
                    src={user.profilePicture || `https://github.com/shadcn.png`}
                    alt={user.name || "User"}
                />
                <AvatarFallback>
                    {user.name ? user.name.substring(0, 2).toUpperCase() : "UN"}
                </AvatarFallback>
            </Avatar>
            <span className="font-semibold tracking-tight">
                {user.name || user.email.split('@')[0]}
            </span>
        </div>
    );
};

export default Profile;
