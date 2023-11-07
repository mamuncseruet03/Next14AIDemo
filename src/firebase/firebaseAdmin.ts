import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

var serviceAccount = require("../../generateme-90b08-firebase-adminsdk-y40hb-ac32c6229d.json");

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDB = admin.firestore();

export { adminDB };
