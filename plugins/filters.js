import Vue from 'vue'

Vue.filter('shortenText', (text, maxlength = 300) => {
    const finalCharacters = text.length > maxlength ? '...' : ''
    return text.substring(0, maxlength) + finalCharacters

})