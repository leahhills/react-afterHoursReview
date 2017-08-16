const products =require ('./data');

module.exports = {
    //getProducts
    getProducts:(req,res)=>{
        res.send(products.products)
    }
}