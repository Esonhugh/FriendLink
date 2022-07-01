<script>
	export let name;
	import CardContainer from "./component/cardContainer.svelte";
	let cards_data, filter;
	async function get_site_data() {
		const res = await fetch('friends.json')
		const text = await res.json()
		if (res.ok) {
			localStorage.setItem("conf", text)
			cards_data = text
			return text
		} else {
			throw new Error(text)
		}
	}
</script>

<main>
	<h1>{name}</h1>
	<p>If you wanna change Link with me. Please Pull Request the <a src="https://github.com/Esonhugh/FriendLink">FriendLink Project</a></p>
	<hr />
	{#await get_site_data() }
		<pre>Loading... datas</pre>
	{:then text}
		<CardContainer {cards_data} />
	{:catch e}
		<pre>{e}</pre>
	{/await}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 250px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>