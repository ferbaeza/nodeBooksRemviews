const models= ()=>{
    booksModel: require("./noSQL/books")
    complainsModel: require("./noSQL/complains")
    reviewsModel: require("./noSQL/reviews")
    storageModel: require("./noSQL/storage")
    usersModel: require("./noSQL/users")
}

module.exports= models