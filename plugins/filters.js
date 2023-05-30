import Vue from 'vue'
import moment from "moment";

Vue.filter('shortenText', (text, maxlength = 300) => {
    const finalCharacters = text.length > maxlength ? '...' : ''
    return text.substring(0, maxlength) + finalCharacters

})

Vue.filter('formatDate', (date, type = 'LL') => {
    if (!date) {
        return ''
    } else {
        return moment(date).format(type)
    }
})