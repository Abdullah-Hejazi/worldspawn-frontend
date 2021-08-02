<template>
	<SideBar />
	<div class="main-page">
		<div class="main-body">
			<TopBar />
			<router-view class="page-content" />
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
	@font-face {
		font-family: 'Cairo-Regular';
		src: url('/fonts/Cairo-Regular.ttf');
	}

	@font-face {
		font-family: 'Cairo-Black';
		src: url('/fonts/Cairo-Black.ttf');
	}

	body {
		font-family: 'Cairo-Regular', sans-serif;
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

	.page-content {
		padding: 20px;
	}
</style>
