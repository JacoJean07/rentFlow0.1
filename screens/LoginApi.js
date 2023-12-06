
export async function loginUsers(userData) {
  try {
   const response = await fetch('http://192.168.0.128:8080/auth/login',{
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
       'Content-Type': 'application/json', 
        
      },
    })
      if (response.ok) {


      const responseToken = await response.json();
      console.log('Respueta del servidor:', responseToken);

      const token = responseToken?.token;

      return token;
    
    
  }

    const errorResponse = await response.json();

   throw new Error(`[!] Fallo la conexion: ${response.status}, ${errorResponse.message}`);
  } catch (error) {
    console.error('[-] Error al realizar la solicitud', error.message);
    throw error;
    
  } 
  
  
};
