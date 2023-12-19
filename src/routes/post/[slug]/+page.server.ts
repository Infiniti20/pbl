import { getFirebaseAdmin } from '$lib/firebase/firebase-admin';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const db = getFirebaseAdmin().database();
	let posts: Post[] = await (await (await db.ref(`/post`)).get()).val()
	console.log(posts);
	posts = Object.values(posts).sort((a, b) => b.date - a.date);
	return posts[parseInt(params.slug)];
}
