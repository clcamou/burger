//import the ORM to create functions that will interact with the databse 

let orm = require("../config/orm.js");

let burger = {
    all: function(callback) {
        orm.all("burgers", function(res){
            callback(res);
        });
    },
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(res){
            callback(res);
        });
    }, 
    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(res){
            callback(res);
        });
    }, 
    delete: function(condition, callback) {
        orm.delete("burgers", condition, function(res){
            callback(res);
        });
    }
};

//export the databse functions 
module.exports = burger;