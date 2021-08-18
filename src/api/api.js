import axios from "axios";

const getAllPosts = async() => {
  try {
    let response = await axios.get('https://6115304aaec65d0017e9dd40.mockapi.io/api/posts')

    //setListOfPosts(response.data)
    return response.data
   
  }
  catch {
    console.log('Error')
  }
}

export default getAllPosts;