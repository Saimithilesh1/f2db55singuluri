var oil = require('../models/oil');

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
// Handle oil delete on DELETE.

exports.oil_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await oil.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.oil_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await oil.findById( req.query.id)
    res.render('oildetail',
   { title: 'oil Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for creating a oil.
// No body, no in path parameter, no query.
// Does not need to be async
exports.oil_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('oilcreate', { title: 'oil Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a costume.
// query provides the id
exports.oil_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await oil.findById(req.query.id)
    res.render('oilupdate', { title: 'oil Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query 
exports.oil_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await oil.findById(req.query.id) 
        res.render('oildelete', { title: 'oil Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 