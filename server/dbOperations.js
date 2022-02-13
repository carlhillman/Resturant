const config = require('./dbConfig'),
sql = require('mssql')

const getDishes = async() => {
    try{
        let pool = await sql.connect(config);
        let dishes = pool.request().query('select * from dish')
    console.log(dishes)
    return dishes
    }
    catch(err)
    {
        console.dir(err)
    }
}

module.exports = {
    getDishes
}