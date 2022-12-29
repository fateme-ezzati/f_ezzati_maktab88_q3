function typing() {
    let element = document.getElementById('_input')
    let val = element.value.replace(/[.-]/g, '_')
    console.log(element.value)
    element.value = val
   

}


