<template>
	<SideBar />
	<div class="main-page">
		<div class="main-body">
			<TopBar />
		</div>
	</div>
</template>

<script>
	import SideBar from './components/SideBar.vue'
	import TopBar from './components/TopBar.vue'

	export default {
		name: 'App',

		components: {
			SideBar,
			TopBar
		}
	}
</script>

<style>
	body {
		margin: 0px;
		padding: 0px;
		background-color: #212226;
		color: #b08f67;
	}

	.main-page {
		background: url('/images/bg-image.png');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		min-height: 100vh;
		background-size: cover;
		display: flex;
		justify-content: center;
		margin-left: 88px;
	}

	.main-body {
		width: 100%;
		margin-left: 40px;
		margin-right: 40px;
	}
</style>
