import axios from "axios"
import { toast } from "react-toastify";


const backendUrl = 'https://localhost:3001/api/v1/auth';

 export const registerUser = async ({email , password , mobile , name }) => { 
	try {
		// debugger;
	const reqUrl = `${backendUrl}/regiter`;
	
	const response = await axios.post(reqUrl, {
		name,
		password,
		mobile,
		email
	});

	console.log(response)
}  
	catch (error) { 
	console.log(error)
	toast.error ("something went Wrong !");
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


