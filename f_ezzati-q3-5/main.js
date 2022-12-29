function active(index) {
    let element = document.getElementById('tabList').children
    let panel = document.getElementById('panel').children
    console.log(index)
    let len = element.length
    for(let i=0;i<len;i++){
        element[i].classList.remove("activeTab");
        panel[i].classList.remove("activePanel");

    }
    element[index].classList.add("activeTab");
    panel[index].classList.add("activePanel");

}
