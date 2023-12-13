import axios from "axios";

export default async function postman( url, data ) {

    const host = `https://ap-pss.net/pss-ext/`;

	let headers =  {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

	let postmanResponse = await axios.post( 
			`${host}${url}`,
			data, 
			{ 
				headers: headers
			}
		).catch(error => {
			console.log( error.message )
		});

	if (!postmanResponse || postmanResponse == undefined) {
		console.log('postman und')
		
		/*chrome.runtime.sendMessage({
			cmd: "ext-clear-proxy"
		});*/
		
		// let response = await postman(url, data);
		// console.log('rr: ', response)
		// return response;

		return false;
	}

	if ( postmanResponse.data ) {
		let response = postmanResponse.data;
		return response;
	}

	return null;
}
