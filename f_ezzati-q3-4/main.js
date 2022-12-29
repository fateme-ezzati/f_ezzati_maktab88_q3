function typing() {
    let element = document.getElementById('_input')
    element = element.value.toUpperCase()
    let search_len = element.length
    console.log('val:', element,search_len)
    let list = document.getElementById('list').children
    let len = list.length
    let txtValue
    for (let i = 0; i < len; i++) {
        if (list[i].textContent || list[i].innerText) {
            // console.log('test', list[i].innerHTML)
            txtValue = list[i].innerHTML
            txtValue = txtValue.slice(0,search_len)
            console.log('seach',txtValue)

            if (txtValue.toUpperCase().indexOf(element) > -1) {
                list[i].style.cssText = `display:flex`
            } else {
                list[i].style.cssText = `display:none`
            }

        }

    }

}
