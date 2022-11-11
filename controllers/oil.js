var oil = require('../models/oil');
// List of all oils
exports.oil_list = function(req, res) {
    res.send('NOT IMPLEMENTED: oil list');
};
// for a specific oil.
exports.oil_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await oil.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

// Handle oil update form on PUT.
exports.oil_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await oil.findById( req.params.id)
        // Do updates of properties
        if(req.body.Oil_Name)
               toUpdate.Oil_Name = req.body.Oil_Name;
        if(req.body.Oil_Company) toUpdate.Oil_Company = req.body.Oil_Company;
        if(req.body.Oil_cost) toUpdate.Oil_cost = req.body.Oil_cost;
        if(req.body.Oil_Rating) toUpdate.Oil_Rating = req.body.Oil_Rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
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