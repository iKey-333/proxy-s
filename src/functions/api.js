import axios from "axios";

export default async function api( url ) {

	let postman = await axios.get( 
			url
		).catch(error => {
			console.log( error.message )
            //e = error.response.data;
		});

	if ( postman.data ) {
		let response = postman.data;
		return response;
	}
    
    return null;
}
