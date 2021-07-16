module.exports = (app: any) => {

    const Middleware = require('../Middleware/Validator');
    const Controller = require('../Controller/Controller');

    //insert Product
    app.post('/insert', Middleware.Validate, Controller.insertProduct);

    //to display product
    app.get('/display', Controller.listProduct);

    //to get product profit
    app.get('/display_profit', Controller.showProfit);

    //to remove Product
    app.delete('/removeProduct/:id', Controller.removeProduct);

    //if invalid url passed
    app.get('*', Controller.NotFound);
}