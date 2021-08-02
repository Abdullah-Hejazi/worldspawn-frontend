<template>
	<div class="top-bar">
		<div class="logo">
			<router-link to="/">
				<img src="/images/logo.png" />
			</router-link>
		</div>

		<div class="search-bar">
			<div class="search-bar-container">
				<input type="text" class="search-input" placeholder="Search..." @keyup.enter="onSearch" v-model="search" />
				<font-awesome-icon :icon="['fas', 'search']" size="lg" class="search-icon" @click="onSearch" />
			</div>
		</div>

		<div class="upload-button" @click="onUpload">
			Upload a Map
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopBar',

		data: function () {
			return {
				search: ''
			}
		},

		methods: {
			onSearch: function () {
				if (this.search.length <= 0) {
					console.log('Please enter a map name')
					return
				}

				console.log('Searching for: ' + this.search)
			},

			onUpload: function () {
				console.log('Uploading map')
			}
		}
	}
</script>

<style scoped>
	.top-bar {
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		margin-top: 10px;
		padding-bottom: 10px;
	}

	.logo {
		flex-grow: 0;
	}

	.search-bar {
		flex-grow: 1;
		text-align: center;
	}

	.search-bar-container {
		display: inline-block;
		background-color: #212126;
		-webkit-box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
		-moz-box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
		box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
		border-radius: 5px;
	}

	.search-input {
		font-family: 'Cairo-Regular', sans-serif;
		max-width: 90%;
		width: 450px;
		height: 40px;
		border: none;
		background-color: rgba(0, 0, 0, 0);
		padding: 5px 10px;
		font-size: 18px;
		color: #b08f67;
	}

	.search-input:focus {
		outline: none;
	}

	.search-icon {
		color: #605955;
		cursor: pointer;
		margin-right: 8px;
	}

	.upload-button {
		background-color: #b08f67;
		color: #794120;
		flex-grow: 0;
		height: 40px;
		width: 139px;
		text-align: center;
		padding: 5px 10px;
		border-radius: 5px;
		-webkit-box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
		-moz-box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
		box-shadow: 3px 3px 17px 0px rgba(0,0,0,0.55);
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.upload-button:hover {
		background-color: #c4a075;
	}
</style>
