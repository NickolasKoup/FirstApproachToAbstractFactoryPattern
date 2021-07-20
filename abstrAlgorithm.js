function factory (key,value,arrayName){
    let product = {}
    product[`${key}`] = value
    arrayName.push(product)
    return console.log(product), product
}




// function factory (key,value,type){
//     let product = {}
//     product[`${key}`] = value
//     arrayName.push(product)
//     return console.log(product), product
// }


// module.exports = { factory }
function propertyFactory (key,value,type) {
    for(i in key){
        type[`${key[i]}`] = value[i]
    }
    
}
//  propertyFactory (['Red', 'Green','Purple','Magenta'], ["RED", "GREEN","PURPLE","MAGENTA"],Color)



 module.exports = { factory,propertyFactory }