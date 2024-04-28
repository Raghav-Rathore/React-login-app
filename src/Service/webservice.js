import axios from "axios";
class Webservice{
    getapiurlcall(url){
        return axios.get(url)
    }
    postapicall(url,data){
        return axios.post(url,data)
    }
}
export default new Webservice()