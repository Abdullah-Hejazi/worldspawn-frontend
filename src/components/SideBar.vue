<template>
	<div class="nav-bar">
		<div v-for="button in buttons" :key="button.name">
			<router-link :to="button.url" active-class="nav-button-selected" class="nav-button">
				<font-awesome-icon :icon="['fas', button.icon]" size="2x" class="nav-icon" />
				<span class="nav-button-text">{{ button.name }}</span>
			</router-link>
		</div>

		<!--
			<a class="github-link" href="https://github.com/Abdullah-Hejazi/worldspawn-frontend" target="_blank">
				<font-awesome-icon :icon="['fas', 'code-branch']" size="2x" class="nav-icon" />
			</a>
		-->
	</div>
</template>

<script>
	export default {
		name: 'SideBar',

		data: function () {
			return {
				buttons: [
					{
						name: 'Maps',
						icon: 'map-signs',
						url: '/'
					},
					{
						name: 'Models',
						icon: 'hotel',
						url: '/models'
					},
					{
						name: 'Levels',
						icon: 'layer-group',
						url: '/level_design'
					},
					{
						name: 'Search',
						icon: 'search',
						url: '/search'
					},
					{
						name: 'Links',
						icon: 'link',
						url: '/links'
					},
					{
						name: 'Learn',
						icon: 'book-open',
						url: '/learn'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.nav-bar {
		width: 88px;
		height: 100%;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.32);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.nav-button {
		width: 100%;
		height: 89px;
		background-color: rgba(255, 255, 255, 0.03);
		color: #e8d3b8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-decoration: none;
		font-size: 16px;
		padding-top: 5px;
		padding-bottom: 5px;
	}

	.nav-button-selected {
		width: 100%;
		height: 89px;
		background-color: #b08f67;
		color: #261e13;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-decoration: none;
		font-size: 18px;
		padding-top: 5px;
		padding-bottom: 5px;
	}

	.nav-button:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.nav-button-selected:hover {
		background-color: #c4a177;
	}

	.nav-icon {
		margin-bottom: 5px;
	}

	.github-link {
		position: absolute;
		bottom: 7px;
		left: 30px;
		color: #b08f67;
	}

	.github-link:hover {
		color: #c9a477;
	}
</style>
