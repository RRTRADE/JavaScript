const accountId=53245
let accountEmail="Rajiv@gmail.com"
var accountPassword="12345"
accountCity="Delhi"
let accountState

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// accountId=122225 // This will throw an error because accountId is a constant and cannot be reassigned.
accountEmail="Rajiv123@gmail.com"
accountPassword="123456"
accountCity="Mumbai"
accountState="Maharashtra"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])