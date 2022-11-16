import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
require("dotenv").config();

const supabase = createClient(process.env.API_URL, process.env.API_ANON);

function Home() {
	const navigate = useNavigate();
	return(
        <h1>Success</h1>
    )
}

export default Home;
