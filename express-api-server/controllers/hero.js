// <------------------------------------------- MODEL IMPORT ----------------------------->

// <------------------------------------------- POST ROUTE-------------------------------->
// #1
// HTTP GET -

const handleGet = async (req, res) => {
    res.send("hello, friend")
}

// <--------------------------------------------EXPORTS ---------------------------------->

module.exports = {
    handleGet
}