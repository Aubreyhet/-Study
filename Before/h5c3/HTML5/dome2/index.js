let generateInput = document.querySelector("#generateInput").addEventListener('click',function(){
    let arr = []
    let shelf = document.getElementById("shelf").value
    let shelfB = document.getElementById("shelfB").value
    let shelfE = document.getElementById("shelfE").value
    let floorB = document.getElementById("floorB").value
    let floorE = document.getElementById("floorE").value
    let gridB = document.getElementById("gridB").value
    let gridE = document.getElementById("gridE").value
    arr.push(shelfB,shelfE,floorB,floorE,gridB,gridE)
    generate(shelf,arr)
},false)
function generate(k,a){
    for (let i = a[0]; i <= a[1]; i ++){
        for (let j = a[2]; j <= a[3]; j++) {
            for (let x = a[4]; x <= a[5]; x++) {
                console.log(`${k}${buLing(i)}${buLing(j)}${buLing(x)}`)
            }
        }
    }
}
function buLing(n){
    return n>9?n:"0"+n;
  }