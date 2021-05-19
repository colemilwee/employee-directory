import axios from 'axios'

async function componentDidMount(){
    try {
        const {data:response} = await axios.get("https://randomuser.me/api/?results=300") //use data destructuring to get data from the promise object
        return response
      }

      catch (error) {
        console.log(error);
      }
    }




  const users = async () => {
    let a = await componentDidMount()
    
    return a.results;
  }


  export default users;