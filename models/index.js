const models= ()=>{
    booksModel: require("./noSQL/books")
    authorsModel: require("./noSQL/authors")
    complainsModel: require("./noSQL/complains")
    reviewsModel: require("./noSQL/reviews")
    storageModel: require("./noSQL/storage")
    usersModel: require("./noSQL/users")
}

module.exports= models
