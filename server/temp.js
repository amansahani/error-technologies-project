const axios = require('axios');
const caller= ( async() =>{

    try {
        const response = await axios.post('https://node-mobile.onrender.com/auth/login', {
          email: "raman@gmail.com",
          password: "raman",
        });
    
        const { token } = response.data;
        console.log(token);
    
        return token; // Assuming the server responds with a token
      } catch (error) {
            console.log("failed to parse");
        return "failed" 
        // Handle login failure
      }
})()
