class Tshirt {
    constructor(color,size,fabric,){
        this.color = color
        this.size = size
        this.fabric = fabric
        this.price 
    }
}


function createTshirt(color,size,fabric,arrayToStore,costArray) {
    tshirt = new Tshirt(color,size,fabric,arrayToStore)
    tshirt.price = costArray[fabric]
    arrayToStore.push(tshirt)
}


function randomProperty (obj) {
    let keys = Object.keys(obj)
    return keys[ keys.length * Math.random() << 0]
}


function randomTshirtGen (randomProperty1pool,randomProperty2pool,randomProperty3pool,arrayToStore,costArray) {
    let tshirt = createTshirt(randomProperty(randomProperty1pool), randomProperty(randomProperty2pool), randomProperty(randomProperty3pool),arrayToStore,costArray)
    }

function manyRandomTshirts (numberOfRandoms,randomProperty1pool,randomProperty2pool,randomProperty3pool,arrayToStore,costArray) {
    for(i = 0; i <= numberOfRandoms; i++) {
        randomTshirtGen(randomProperty1pool,randomProperty2pool,randomProperty3pool,arrayToStore,costArray)
    }
}



module.exports = { createTshirt, randomTshirtGen, manyRandomTshirts }