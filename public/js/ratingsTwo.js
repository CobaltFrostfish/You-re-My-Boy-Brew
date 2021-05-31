const ratingFormHandler = async function (event) {
	event.preventDefault();

	const stars = document.querySelector('#rating_five').value.trim();
	console.log(stars);

	const review_id = document.querySelector('.new-rating-form').dataset.reviewid;
	console.log(review_id);

	const comment = document.querySelector('#rating_description').value.trim();
	console.log(comment);

	if (stars && comment) {
		await fetch('/api/ratings', {
			method: 'POST',
			body: JSON.stringify({
				stars,
				review_id,
				comment,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};

document
	.querySelector('.new-rating-form')
	.addEventListener('submit', ratingFormHandler);