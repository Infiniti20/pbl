import { getFirebaseAdmin } from '$lib/firebase/firebase-admin';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const db = getFirebaseAdmin().database();
	const posts: Post[] = [];
	let user: User = await (await db.ref(`/users/${params.slug}`).get()).val();
	let fullPostList = Object.keys(user.posts);

	for (let i = 0; i < Math.min(5, fullPostList.length); i++) {
		let postId = fullPostList[i];
		let post: Post = await (await db.ref(`/post/${postId}`).get()).val();
		posts.push(post);
	}
	if (user == null) {
		throw error(404, 'User Not Found');
	}
	console.log(posts)
	return {user,posts};
}
