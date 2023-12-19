import serviceKey from '../../../admin-sdk.json';

//Import firebase admin SDK
import admin, { auth } from 'firebase-admin';

let firebaseAdmin: admin.app.App;
let serviceAccount = serviceKey as admin.ServiceAccount;

function getFirebaseAdmin(): admin.app.App {
	if (!firebaseAdmin) {
		if (admin.apps.length == 0) {
			firebaseAdmin = admin.initializeApp({
				credential: admin.credential.cert(serviceAccount),
				databaseURL: 'https://sports-2d6ed-default-rtdb.firebaseio.com/'
			});
		} else {
			firebaseAdmin = admin.apps[0]!;
		}
	}

	return firebaseAdmin;
}

export {getFirebaseAdmin}