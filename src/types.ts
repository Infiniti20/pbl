interface User {
	firstName: string;
	lastName: string;
	sport: Sport;
	profileID: string;
	weight: number;
	height: number;
	class: number;
	bio: string;
	tags: Tags;
	posts: PostList;
	stats: Stats;
	awards: Awards;
}
type Tags = {
	[key in string]: boolean;
};
type PostList = {
	[id in string]: boolean;
};
enum Sport {
	Basketball,
	Hockey,
	Football,
	Soccer
}

interface Post {
	text: string;
	title: string;
	user: string;
	photoID: string | undefined;
	profile: string;
	date: number;
    comments:any
}
type Stats = {
	points: number;
	rebounds: number;
	assists: number;
	blocks: number;
	games: number;
};
type Awards = {
	[id in string]: Award;
};

type Award = {
	level: string;
	quantity: number;
	title: string;
};
