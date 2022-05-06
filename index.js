const mainBtn = document.querySelector('#btn')
const countClicksNode = document.querySelector('#clicks-count')


let countClicks = 1


getLocalstorageData()


mainBtn.addEventListener('click', () => {
    changeCountClicks(++countClicks)
})

function changeCountClicks (count) {
    countClicksNode.textContent = count
    localStorage.setItem('clicks', count)
}

function getLocalstorageData() {
    if (localStorage.getItem('clicks')) {
        console.log(+localStorage.getItem('clicks'))
        countClicks = +localStorage.getItem('clicks')
        console.log(countClicks)
        changeCountClicks(countClicks)
    }
}