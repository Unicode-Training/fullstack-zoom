// const getNewToken = async () => {
//     const refreshToken = localStorage.getItem('refreshToken');
//     if (!refreshToken) {
//         return;
//     }
//     const response = await fetch(`${BASE_URL}/auth/refresh`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ refreshToken })
//     });
//     if (!response.ok) {
//         return;
//     }
//     return response.json();
// }