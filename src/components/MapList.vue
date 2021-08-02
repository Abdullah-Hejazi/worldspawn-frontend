<template>
	<div>
		<div class="map-list-header">
            <div class="map-list-header-buttons">
                <div class="map-list-view-button" @click="listView = false">
                    <font-awesome-icon :icon="['fas', 'th']" size="lg" />
                </div>

                <div class="map-list-view-button" @click="listView = true">
                    <font-awesome-icon :icon="['fas', 'list']" size="lg" />
                </div>
            </div>

            <div class="map-list-header-title">
                Latest Maps
            </div>
        </div>

        <div class="map-list-body">
            <div v-if="listView">
                <MapObjectList
                    v-for="map in maps"
                    :key="map.title"
                    :title="map.title"
                    :date="map.date"
                    :pk3="map.pk3"
                    :size="map.size"
                    :hits="map.hits"
                    :mod="map.mod"
                    :physics="map.physics"
                    :weapons="map.weapons"
                    :items="map.items"
                    :functions="map.functions"
                    :rating="map.rating"
                    :difficulty="map.difficulty"
                />
            </div>

            <div v-else class="map-list-grid-view">
                <MapObjectGrid
                    v-for="map in maps"
                    :key="map.title"
                    :title="map.title"
                    :date="map.date"
                    :pk3="map.pk3"
                    :size="map.size"
                    :hits="map.hits"
                    :mod="map.mod"
                    :image="map.image"
                    :physics="map.physics"
                    :weapons="map.weapons"
                    :items="map.items"
                    :functions="map.functions"
                    :rating="map.rating"
                    :difficulty="map.difficulty"
                    :author="map.author"
                />
            </div>
        </div>

        <div class="map-list-pagination">
            <Pagination :page="currentPage" :maxPage="maxPage" :onChange="onChangePage" />
        </div>
	</div>
</template>

<script>
    import MapObjectList from '../components/MapObjectList.vue'
    import MapObjectGrid from '../components/MapObjectGrid.vue'
    import Pagination from '../components/Pagination.vue'

	export default {
		name: 'MapList',

        components: {
            MapObjectList,
            MapObjectGrid,
            Pagination
        },

        props: {
            maps: Array,
        },

        data: function () {
            return {
                listView: false,
                currentPage: 1,
                maxPage: 866
            }
        },

        methods: {
            onChangePage: function (page) {
                this.currentPage = page
            }
        }
	}
</script>

<style scoped>
    .map-list-header {
        display: flex;
        align-items: center;
    }

    .map-list-header-buttons {
        display: flex;
        flex-grow: 0;
    }

    .map-list-header-title {
        text-align: center;
        flex-grow: 1;
        font-family: 'Cairo-Black', sans-serif;
        text-decoration: underline;
        font-size: 36px;
        margin-right: 88px;
    }

    .map-list-view-button {
        background-color: #333333;
        color: #b08f67;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-right: 5px;
    }

    .map-list-view-button:hover {
        background-color: #464646;
    }

    .map-list-body {
        margin-top: 20px;
    }

    .map-list-grid-view {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .map-list-pagination {
        display: flex;
        justify-content: center;
        margin-right: 88px;
    }
</style>