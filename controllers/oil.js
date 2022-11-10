var oil = require('../models/oil');
// List of all oils
exports.oil_list = function(req, res) {
    res.send('NOT IMPLEMENTED: oil list');
};
// for a specific oil.
exports.oil_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: oil detail: ' + req.params.id);
};
// Handle oil create on POST.
exports.oil_create_post = async function(req, res) {
    console.log(req.body)
    let document = new oil();
    document.Oil_Name = req.body.Oil_Name;
    document.Oil_Company = req.body.Oil_Company;
    document.Oil_cost = req.body.Oil_cost;
    document.Oil_Rating = req.body.Oil_Rating;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle oil delete form on DELETE.
exports.oil_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: oil delete DELETE ' + req.params.id);
};
// Handle oil update form on PUT.
exports.oil_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: oil update PUT' + req.params.id);
};
exports.oil_list = async function(req, res) {
    try{
        theoils = await oil.find();
        res.send(theoils);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// VIEWS
// Handle a show all view
exports.oil_view_all_Page = async function(req, res) {
    try{
        theoils = await oil.find();
        res.render('oil', { title: 'oil Search Results', results: theoils });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};