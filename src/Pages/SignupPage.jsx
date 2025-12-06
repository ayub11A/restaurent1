import React from "react";
import AdminSignup from "../components/AdminSignup";

function SignupPage() {
const handleSignupSubmit = (data) => {
console.log("Data received in page:", data);
// Halkan ku dar API call ama Firebase logic
};

return ( <div className="flex items-center justify-center min-h-screen bg-white"> <AdminSignup onSubmit={handleSignupSubmit} /> </div>
);
}

export default SignupPage;
