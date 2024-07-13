import axios from "axios"
import { toast } from "react-toastify";


const backendUrl = 'http://localhost:3001/api/v1/auth';

 export const registerUser = async ({email , password , mobile , name }) => { 
	try {
		// debugger;
	const reqUrl = `${backendUrl}/register`;
	
	const response = await axios.post(reqUrl, {
		name,
		password,
		mobile,
		email
	});

	if(response && response.status === 200) {
		toast.success("User registerd Successfully");
	}
	console.log(response.data)
}  
	catch (error) { 
	if(error.response && error.response.status === 409 ) {
		toast.error("user already exist");
	}	

	else{
		toast.error("an eror occured please try again")
	}
	console.log(error)
	}
}
	

export const loginUser = async ({email ,password}) => {
	try {
		const reqUrl = `${backendUrl}/login`;
		const response = await axios.post(reqUrl, {
			password,
			email,
		});
		console.log(response);
	} catch (error) {
		console.log(error);
		toast.error("something went Wrong")
	}
}


