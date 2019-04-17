import * as functions from "firebase-functions";
import * as cors from "cors";
const corsHandler = cors({ origin: true });

export const renderizarTopo = functions.https.onRequest((request, response) => {
  corsHandler(request, response, () => {
    //<img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png">
    const html = `
    <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png">
    <h2>Microsserviços no Firebase</h2>`;
    response.send(html);
  });
});
