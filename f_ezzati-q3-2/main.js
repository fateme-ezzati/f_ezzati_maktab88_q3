function progress() {
    let element = document.getElementById('progress')
    let element_width = element.style.width
    element_width = element_width.replace("%", '')
    let element_new_width = Number(element_width) + 10
    console.log(element_new_width,element_width)
    if (element_new_width < 101) {
        element.style.cssText = `
        width: ${Number(element_new_width)}%;
         `
        let title = document.getElementById('title')
        title.innerText = `${element_new_width} %`
    }

}
