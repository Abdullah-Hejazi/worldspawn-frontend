<template>
	<div>
		<MapList :maps="maps" />
	</div>
</template>

<script>
	import MapList from '../components/MapList.vue'

	export default {
		name: 'Home',

		components: {
			MapList
		},

		data: function () {
			return {
                maps: [
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    },
                    {
                        title: 'hgb-speed-1',
                        date: '2021-07-30',
                        pk3: 'hgb-speed-1.pk3',
                        size: '3.64 MB',
                        hits: 41,
                        mod: 'defrag',
                        physics: ['CPM', 'VQ3'],
                        weapons: ['grenade', 'plasma', 'rocket'],
                        items: ['haste', 'battlesuit'],
                        functions: ['slick', 'fog', 'timer'],
                        rating: 2.5,
                        image: 'https://ws.q3df.org/images/levelshots/512x384/u1p_neon.jpg?fallback=1',
                        difficulty: 5,
                        author: "Abdullah Hejazi"
                    }
                ]
			}
		}
	}
</script>
