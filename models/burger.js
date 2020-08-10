var orm = require ("../config/orm")

var burger = {

    selectAll: (cb) => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        })
    },
    
    updateOne: (ColVals, condition, cb) =>{
        orm.updateOne("burgers", ColVals, condition, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;