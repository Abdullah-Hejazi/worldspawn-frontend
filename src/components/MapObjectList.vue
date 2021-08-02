<template>
	<div class="map-object">
        <div class="map-object-section">
            <div class="map-object-section-title clickable">
                {{ title }}
            </div>
            <div class="map-object-section-hint">
                Released: {{ date }}
            </div>
        </div>

        <div class="map-object-section">
            <div class="map-object-section-title clickable">
                Download PK3
            </div>
            <div class="map-object-section-hint">
                Size: {{ size }}
            </div>
            <div class="map-object-section-hint">
                Downloaded: {{ hits }} times
            </div>
        </div>

        <div class="map-object-section">
            <div class="map-object-section-title">
                Mod:
                <img width="18" :src="'/images/svg/' + mod + '.svg'" />
            </div>
            <div class="map-object-section-hint">
                <span class="clickable" v-for="physic in physics" :key="physic"> {{ physic }} &nbsp;</span>
            </div>
        </div>

        <div class="map-object-section">
            <div class="map-object-section-hint">
                Weapons:
                <img
                    v-for="weapon in weapons"
                    :key="weapon"
                    width="18"
                    :src="'/images/svg/' + weapon + '.svg'"
                    class="map-object-icon"
                />
            </div>
            <div class="map-object-section-hint">
                Items:
                <img
                    v-for="item in items"
                    :key="item"
                    width="18"
                    :src="'/images/svg/' + item + '.svg'"
                    class="map-object-icon"
                />
            </div>
            <div class="map-object-section-hint">
                Functions:
                <img
                    v-for="func in functions"
                    :key="func"
                    width="18"
                    :src="'/images/svg/' + func + '.svg'"
                    class="map-object-icon"
                />
            </div>
        </div>

        <div class="map-object-section">
            <div class="map-object-section-title">
                Rating
            </div>
            <div class="map-object-section-rating">
                <font-awesome-icon :icon="getStar(1)" size="lg" />
                <font-awesome-icon :icon="getStar(2)" size="lg" />
                <font-awesome-icon :icon="getStar(3)" size="lg" />
                <font-awesome-icon :icon="getStar(4)" size="lg" />
                <font-awesome-icon :icon="getStar(5)" size="lg" />
            </div>
        </div>

        <div class="map-object-section">
            <div class="map-object-section-title">
                Difficulty
            </div>
            <div class="map-object-difficulty">
                <img :src="'/images/difficulty/' + getDifficulty()" width="32" />
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
            difficulty: Number
        },

        methods: {
            getStar: function (index) {
                if (this.rating >= index) {
                    return ['fas', 'star']
                }

                if (index - this.rating > 0 && index - this.rating < 1) {
                    return ['fas', 'star-half-alt']
                }

                else {
                    return ['far', 'star']
                }
            },

            getDifficulty: function () {
                if (this.difficulty == 5) {
                    return 'skill5.png'
                }

                return 'skill' + this.difficulty + '.svg'
            }
        }
	}
</script>

<style scoped>
    .map-object {
        background-color: #212126;
        border: 1px rgba(176, 143, 103, 0.18) solid;
        padding: 10px 20px 10px 20px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .map-object-section-title {
        color: #b08f67;
        font-size: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }

    .map-object-section-hint {
        color: #79716b;
        font-size: 14px;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        text-decoration: underline;
    }

    .map-object-icon {
        margin-right: 4px;
    }

    .map-object-section-rating {
        color: #ffc326;
    }

    .map-object-difficulty {
        width: 32px;
        margin: 0 auto;
    }
</style>