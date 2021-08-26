export async function fetchPost(id) {
	const url = `https://www.obama.org/wp-json/wp/v2/updates/${id}`;
	const resp = await fetch(url);
	if (resp.ok) {
		const article = await resp.json();
		return {
			...article,
			date: new Date(article.date).toLocaleDateString(),
			modifiedDate: new Date(article.modified_gmt).toLocaleDateString()
		};
	}
	return {
		status: resp.status,
		error: new Error(`Could not load ${url}`)
	};
}
