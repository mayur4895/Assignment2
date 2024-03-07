 
import axios from "axios"

 


 export async function getAllPosts(){
    try {
   
      const res = await axios.get('/api/task');
      console.log(res.data);
      
                
          
                
    } catch (error) {
      console.log(error)
     
    }  
  }