<template>
<div>
    <div v-for="book in books" v-bind:key="book.id">
        <div class="card horizontal">
            <div class="card-image">
                <img src="http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <p>
                    {{ book.title }}
                </p>
                </div>
                <div class="card-action">
                <a href="https://books.google.com/books/about/Harry_Potter_and_the_Cursed_Child_Parts.html?hl=&id=tcSMCwAAQBAJ" target="_blank">
                    Google
                </a>
                </div>
            </div>
        </div>
        <a class="btn-floating btn-medium waves-effect waves-light blue">
            <i class="material-icons">
                bookmark
            </i>
        </a>
        <a class="btn-floating btn-medium waves-effect waves-light green">
            <i class="material-icons">
                share
            </i>
        </a>
        <a class="btn-floating btn-medium waves-effect waves-light red">
            <i class="material-icons">
                delete
            </i>
        </a>
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
    name: 'Card',
    data() {
        return {
            books: [{
                    id: 0,
                    title: 'Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)',
                    authors: ["Joshua Spears", "Andy Milinokis"]
                },
                {
                    id: 1,
                    title: 'Test Two',
                    authors: []
                },
                {
                    id: 2,
                    title: 'Test Three',
                    authors: []
                },
                {
                    id: 3,
                    title: 'Test Four',
                    authors: []
                },{
                    id: 4,
                    title: 'Test One',
                    authors: ["Joshua Spears", "Andy Milinokis"]
                },
                {
                    id: 5,
                    title: 'Test Two',
                    authors: []
                },
                {
                    id: 6,
                    title: 'Test Three',
                    authors: []
                },
                {
                    id: 7,
                    title: 'Test Four',
                    authors: []
                },{
                    id: 8,
                    title: 'Test One',
                    authors: ["Joshua Spears", "Andy Milinokis"]
                },
                {
                    id: 9,
                    title: 'Test Two',
                    authors: []
                },
                {
                    id: 10,
                    title: 'Test Three',
                    authors: []
                },
                {
                    id: 11,
                    title: 'Test Four',
                    authors: []
                }
            ]
        }
    }
}
</script>
