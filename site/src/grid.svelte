<script>
	export let name;
</script>

<main>
	<nav>
		
	</nav>
	<ul class="grid">
		<li>
			<h2>카드 1</h2>
			<p>...</p>
		</li>
		<li>
			<h2>카드 2</h2>
			<p>...</p>
		</li>
		<li>
			<h2>카드 3</h2>
			<p>...</p>
		</li>
		<li>
			<h2>카드 4</h2>
			<p>...</p>
		</li>
		<li>
			<h2>카드 5</h2>
			<p>...</p>
		</li>
	</ul>
</main>

<style>
	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}

	.grid li {
		border: 1px solid #666;
		padding: 10px;
	}
</style>