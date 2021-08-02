<template>
	<div class="pagination">
        <div class="pagination-button"  v-if="page > 3" @click="onClick(1)">
            <font-awesome-icon :icon="['fas', 'angle-double-left']" size="lg" />
        </div>

        <div class="pagination-button left-arrow" v-if="page !== 1" @click="onClick(page - 1)">
            <font-awesome-icon :icon="['fas', 'chevron-left']" size="lg"/>
        </div>

        <div :class="'pagination-button ' + ((p === page) ? 'pagination-selected' : '')" v-for="p in pages" :key="p" @click="onClick(p)">
            {{ p }}
        </div>

        <div class="pagination-button right-arrow" v-if="page !== maxPage" @click="onClick(page + 1)">
            <font-awesome-icon :icon="['fas', 'chevron-right']" size="lg"/>
        </div>

        <div class="pagination-button"  v-if="page < maxPage-3" @click="onClick(maxPage)">
            <font-awesome-icon :icon="['fas', 'angle-double-right']" size="lg" />
        </div>
	</div>
</template>

<script>
	export default {
		name: 'Pagination',

        props: {
            page: Number,
            maxPage: Number,
            onChange: Function
        },

        methods: {
            onClick: function (p) {
                if (p !== this.page) {
                    this.onChange(p)
                }
            }
        },

        computed: {
            pages: function () {
                let result = [this.page - 2, this.page - 1, this.page, this.page + 1, this.page + 2]

                if (result[0] < 1) {
                    let r0 = (result[0] * -1) + 1
                    for(let i = 0; i < result.length; i++) {
                        result[i] += r0
                    }
                }

                if (result[result.length - 1] > this.maxPage) {
                    let r1 = (result[result.length - 1] - this.maxPage) + 1

                    for(let i = result.length - 1; i >= 0; i--) {
                        result[i] -= r1 - 1
                    }
                }

                return result;
            }
        }
	}
</script>

<style scoped>
    .pagination {
        margin-top: 20px;
    }

    .pagination-button {
        display: inline-block;
        cursor: pointer;
        padding: 8px 18px;
        border-radius: 10px;
        background-color: #333333;
        color: #ac8c65;
        font-size: 18px;
        margin-right: 7px;
    }

    .pagination-button:hover {
        background-color: #353535;
        text-decoration: underline;
    }

    .pagination-selected {
        background-color: #ac8c65;
        color: #333333;
    }

    .pagination-selected:hover {
        background-color: #ac8c65;
        color: #333333;
        text-decoration: none;
    }

    .left-arrow {
        margin-right: 30px;
    }

    .right-arrow {
        margin-left: 30px;
    }
</style>