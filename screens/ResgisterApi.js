
export async function saveUsers(userData) {
  try{
 const response =  await fetch('http://192.168.0.128:8080/auth/register', {
    method: 'POST',    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    }, 
  })

  if (!response.ok) {
    const errorResponse = await response.json();
   throw new Error(`[!] Fallo la conexion: ${response.status}, ${errorResponse.message}`);
    
    
  }

  }catch(error){
    console.error('[-] Error al realizar la solicitud', error.message);
    
  }
     
  
};


