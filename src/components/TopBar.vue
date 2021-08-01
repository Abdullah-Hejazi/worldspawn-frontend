<template>
	<div class="top-bar">
		<div class="logo">
			<img src="/images/logo.png" />
		</div>

		<div class="search-bar">
			<div></div>
			<input type="text" class="search-input" placeholder="Search..." />
		</div>

		<div class="upload-button">
			Button
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopBar'
	}
</script>

<style scoped>
	.top-bar {
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.logo {
		flex-grow: 0;
	}

	.search-bar {
		flex-grow: 1;
		text-align: center;
	}

	.search-input {
		max-width: 90%;
		width: 500px;
		height: 40px;
		border: none;
		border-radius: 5px;
		background-color: #212126;
		padding: 5px 32px;
		font-size: 18px;
		color: #b08f67;
		-webkit-box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
		-moz-box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
		box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
	}

	.search-input:focus {
		outline: none;
	}

	.upload-button {
		width: 100px;
		flex-grow: 0;
	}
</style>
