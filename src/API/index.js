import axios from 'axios';

const API = (method , url , params) =>{
	var api = axios({
		  method: method,
		  url: url,
		  data: params,
		});
	return api;
}
export default API