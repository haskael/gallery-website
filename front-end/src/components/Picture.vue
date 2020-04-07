<template>
    <div class="Picuture">
        <img>
        <p>Picture Name:</p>
        <P>Collection Name:</P>
        <button>Change Name</button>
        <button>Delete</button>
    </div>
</template>

<script>
export default {
    name: "Name",
    props: {
        picName: '',
        collectionName: '',
        picid: ''
    },
    methods: {
        getPicInfo(picId) {

        },
        changeName() {

        },
        deletePic() {

        },
        seePicture() {

        }
    },
    created: {

    }
}
</script>