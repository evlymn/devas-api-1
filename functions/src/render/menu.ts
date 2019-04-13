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
        return `<li class="li"> ${doc.data().item}</li> `;
      });

      const html = `<h2>Menu</h2><ul>${arrLi.join("")}</ul>`;
      console.log("enviando menu ao client ");
      response.send(html);
    });
  }
);
  