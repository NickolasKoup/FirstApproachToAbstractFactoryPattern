function randomTshirtGen () {
    let tshirt = new Tshirt(randomProperty(myColors), randomProperty(mySizes), randomProperty(myFabrics))

}

function randomProperty (obj) {
    let keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]]
}





// var randomProperty = function (obj) {
//     var keys = Object.keys(obj);
//     return obj[keys[ keys.length * Math.random() << 0]];
// };

module.exports = { randomTshirtGen }
