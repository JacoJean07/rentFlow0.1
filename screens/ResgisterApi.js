
export async function saveUsers(userData) {

  try{
 const response =  await fetch('http://192.168.18.96:8080/api/auth/saveUser', {
    method: 'POST',    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    }, 
  })

       console.log('Solicitud al servidor:', JSON.stringify(userData));

  if (!response.ok) {
    const errorResponse = await response.json();
   throw new Error(`[!] Fallo la conexion: ${response.status}, ${errorResponse.message}`);
    
    
  }

  }catch(error){
    console.error('[-] Error al realizar la solicitud', error.message);
    
  }
     
  
};


