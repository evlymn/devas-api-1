import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";
const corsHandler = cors({ origin: true });

admin.initializeApp(functions.config().firebase);

export const renderizarMenu = functions.https.onRequest(
  async (request, response) => {
    corsHandler(request, response, async () => {
      const menu = await admin
        .firestore()
        .collection("menu")
        .get();
      const arrLi = menu.docs.map(doc => {
        return `<li> ${doc.data().item}</li> `;
      });
      //class="li"
      const html = `<h3>Menu</h3><ul>${arrLi.join("")}</ul>`;
      console.log("enviando menu ao client ");
      response.send(html);
    });
  }
);
  