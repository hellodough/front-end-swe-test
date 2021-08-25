/**
 * fetch wp-json updates and format the dates
 */
export async function fetchPosts() {
	const url = 'https://www.obama.org/wp-json/wp/v2/updates';
	const resp = await fetch(url);
	if (resp.ok) {
		const articles = await resp.json();
		return articles.map((article) => ({
			...article,
			date: new Date(article.date).toLocaleDateString(),
			modifiedDate: new Date(article.modified_gmt).toLocaleDateString()
		}));
	}
	return {
		status: resp.status,
		error: new Error(`Could not load ${url}`)
	};
}
