import { getFirebaseAdmin } from '$lib/firebase/firebase-admin';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const db = getFirebaseAdmin().database();
	const posts: Post[] = await(await db.ref(`/post`).get()).val();
	console.log(posts);
	return  {posts};
}
