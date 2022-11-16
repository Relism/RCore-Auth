import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
require("dotenv").config();

const supabase = createClient(process.env.API_URL, process.env.API_ANON);

function Success() {
	const [user, setUser] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		async function getUserData() {
			await supabase.auth.getUser().then((value) => {
				if (value.data?.user) {
					console.log(value.data.user);
					setUser(value.data.user);
				}
			});
		}
		getUserData();
	}, []);

	return <h1>Success</h1>;
}

export default Success;
