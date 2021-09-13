function pdfMap() {
    console.log('入口')
let a = []
    let box = document.getElementById('export_content')
    let imgE
    let shelf = document.getElementById("shelf").value
    let shelfB = document.getElementById("shelfB").value
    let shelfE = document.getElementById("shelfE").value
    let floorB = document.getElementById("floorB").value
    let floorE = document.getElementById("floorE").value
    let gridB = document.getElementById("gridB").value
    let gridE = document.getElementById("gridE").value
    a.push(shelfB,shelfE,floorB,floorE,gridB,gridE)
    let col = 0
    for (let i = a[0]; i <= a[1]; i ++){
        for (let j = a[2]; j <= a[3]; j++) {
            for (let x = a[4]; x <= a[5]; x++) {
                imgE = document.createElement('img')
                imgE.setAttribute('class',`imgcode`)
                imgE.setAttribute('id',`imgcode${col}`)
                box.appendChild(imgE)
                JsBarcode(`#imgcode${col}`, `${shelf}${buLing(i)}${buLing(j)}${buLing(x)}`,{height:70,fontOptions:'bold'})
                col+=1
            }
        }
    }
}


function buLing(n){
    return n>9?n:"0"+n;
  }