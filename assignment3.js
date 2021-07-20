const myColors = {}
const mySizes = {}
const myFabrics = {}
const myFabricsCosts = {}
const myTshirts = []

const propfactory = require('./abstrAlgorithm.js').propertyFactory
const createTshirt = require('./tshirtFactory').createTshirt
const randomTshirtGen = require('./tshirtFactory').randomTshirtGen
const manyRandomTshirts = require('./tshirtFactory').manyRandomTshirts

propfactory(["Red", "Green", "Black"], ["RED", "GREEN", "BLACK"], myColors)
propfactory(["XS", "S", "M", "L"], ["XS", "S", "M", "L"], mySizes)
propfactory(["Wool", "Cotton", "Polyester"], ["WOOL", "COTTON", "POLYESTER"], myFabrics)
propfactory(["Wool", "Cotton", "Polyester"], [0.8, 0.95, 0.99], myFabricsCosts)
createTshirt("Red","S","Wool",myTshirts,myFabricsCosts)
randomTshirtGen(myColors,mySizes,myFabrics,myTshirts,myFabricsCosts)
// manyRandomTshirts(40,myColors,mySizes,myFabrics,myTshirts,myFabricsCosts)
manyRandomTshirts(30,myColors,mySizes,myFabrics,myTshirts,myFabricsCosts)

// console.log(myColors)
// console.log(mySizes)
// console.log(myFabrics)
// console.log(myFabricsCosts)
console.log(myTshirts)








