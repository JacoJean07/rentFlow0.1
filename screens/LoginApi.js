
export async function loginUsers(userData) {
  const apiKey = 'AIzaSyBCsfi3P1StMwI2mE3uXONcBDf8guw6mbM';
  const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
  try {
   const response = await fetch(signInUrl,{
      method: 'POST',
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        returnSecureToken: true,
      }),
      headers: {
       'Content-Type': 'application/json', 
        
      },
    })

    console.log('Solicitud al servidor:', JSON.stringify({
  email: userData.email,
  password: userData.password,
  returnSecureToken: true,
}));
      if (response.ok) {


      const responseToken = await response.json();
      console.log('Respueta del servidor:', responseToken);

      const token = responseToken?.idToken;

      if (!token) {
        throw new Error('[-] Error Respueta del servidor sin token');
      }

      return token;
    
    
  }

    const errorResponse = await response.json();

   throw new Error(`[!] Fallo la conexion: ${response.status}, ${errorResponse.message}`);
  } catch (error) {
    console.error('[-] Error al realizar la solicitud', error.message);
    throw error;
    
  } 
  
  
};
