<template>
    <div class="main">
        <div class="search">
            <center>
                <input 
                class="searchbar"
                type="text" 
                placeholder="Search articles, authors, and issues" 
                v-model="rawQuery" />
            </center>
        </div>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            rawQuery: '',
        }
    }
}

</script>

<style scoped>
.main {
    margin: 0%;
}
.search {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 10vh;
    background-color: blue;
    /* justify-items: center; */
}
.searchbar {
    width: 75vw;
    border: 2px black solid;
}
</style>
