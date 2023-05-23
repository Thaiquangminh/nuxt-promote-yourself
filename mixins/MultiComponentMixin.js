export default {
    methods: {
        handleUpdatePage(value, field) {
            this.$store.dispatch('instructor/instructorCourse/updatePageInput', {value, field})
        }
    }
}