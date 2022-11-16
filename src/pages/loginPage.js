import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
require("dotenv").config();

const supabase = createClient(process.env.API_URL, process.env.API_ANON);

function Login() {
	const navigate = useNavigate;
	supabase.auth.onAuthStateChange(async (event) => {
		if (event !== "SIGNED_OUT") {
			navigate("/success");
		} else {
			navigate("/");
		}
	});

	return (
		<>
			<h1>Login</h1>
			<Auth
				supabaseClient={supabase}
				appearance={{ theme: ThemeSupa }}
				theme="dark"
				providers={["discord"]}
			/>
		</>
	);
}

export default Login;
