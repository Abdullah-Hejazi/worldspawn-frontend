<template>
	<div class="map-object">
        <div class="map-object-image-container" :style="'background-image: url(' + image + '); background-size: cover;'">
            <div class="placeholder"></div>
            <div class="map-object-image-bar">
                <img
                    v-for="weapon in weapons"
                    :key="weapon"
                    width="18"
                    :src="'/images/svg/' + weapon + '.svg'"
                    class="map-object-icon"
                />

                <img
                    v-for="item in items"
                    :key="item"
                    width="18"
                    :src="'/images/svg/' + item + '.svg'"
                    class="map-object-icon"
                />

                <img
                    v-for="func in functions"
                    :key="func"
                    width="18"
                    :src="'/images/svg/' + func + '.svg'"
                    class="map-object-icon"
                />
            </div>
        </div>

        <div class="map-object-data">
            <div class="map-object-data-title">
                {{ title }}
            </div>

            <div class="map-object-details">
                <span>
                    By: <span class="map-object-author"> {{ author }} </span>
                </span>

                <span> {{ date }}</span>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'MapObjectList',

        props: {
            title: String,
            date: String,
            pk3: String,
            size: String,
            hits: Number,
            mod: String,
            physics: Array,
            weapons: Array,
            items: Array,
            functions: Array,
            rating: Number,
            image: String,
            difficulty: Number,
            author: String
        }
	}
</script>

<style scoped>
    .map-object {
        display: inline-block;
        margin-bottom: 50px;
        margin-right: 50px;
    }

    .map-object-image-container {
        width: 260px;
        height: 194px;
        border-radius: 10px;
		-webkit-box-shadow: 3px 3px 17px 0px rgba(0, 0, 0, 0.55);
		-moz-box-shadow: 3px 3px 17px 0px rgba(0, 0, 0, 0.55);
		box-shadow: 3px 3px 17px 0px rgba(0, 0, 0, 0.55);
        display: flex;
        flex-direction: column;
    }

    .map-object-image-bar {
        background-color: rgba(0, 0, 0, 0.75);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 260px;
        margin-bottom: auto;
    }

    .placeholder {
        flex-grow: 1;
    }

    .map-object-icon {
        margin-right: 2px;
    }

    .map-object-data-title {
        color: #e3cfb4;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 260px;
        cursor: pointer;
    }

    .map-object-data-title:hover {
        text-decoration: underline;
    }

    .map-object-details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        color: #7e7e7e;
    }

    .map-object-author {
        color: #a99d8e;
        text-decoration: underline;
        cursor: pointer;
    }
</style>