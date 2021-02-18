Array.prototype.shuffle = function() {
    var arrlength = this.length, i, temp;
    if ( arrlength == 0 ) return this;
    while ( --arrlength ) {
       i = Math.floor( Math.random() * ( arrlength + 1 ) );
       temp = this[arrlength];
       this[arrlength] = this[i];
       this[i] = temp;
    }
    return this;
}

const createShuffleCards = (type) => {
    let array = [1,2,3,4,5,6,7,8,9]

    if (type === 'shuffle') {
        array.shuffle()
    }

    let currenvalue = array.map(ele => {
        return `<div class='card${ele}'><div>${ele}</div></div>`
    })

    let finalCardvalue = currenvalue.join(' ')

    let cardContainerElement = document.querySelector('#cardContainer')
    cardContainerElement.innerHTML = finalCardvalue
}

window.addEventListener("load", () => {
    createShuffleCards('sort')
    let sortButton = document.querySelector('#sortButton')
    let shuffleButton = document.querySelector('#shuffleButton')
    sortButton.addEventListener("click", () => {createShuffleCards('sort')})
    shuffleButton.addEventListener("click", () => {createShuffleCards('shuffle')})
})




