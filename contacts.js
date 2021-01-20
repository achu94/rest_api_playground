const fs = require('fs');
const ContactData = require('./data/data.json');
const data = ContactData.contacts.slice();
let id = data[data.length - 1].id;

const context = ContactData;

const add_contact = (Cname, Cmail) => {
    if(!Cname || !Cmail){
        return;
    }

    id = id ? id : 0;
    id++;

    data.push({name : Cname, email : Cmail, id : id});
    ContactData.contacts = data;
    fs.writeFile('./data/data.json', JSON.stringify(ContactData), (err) => {
        if(err){
            console.log('error', + err);
            return;
        }
    });
}

const edit_contact = () => {
    return context;
}

const remove_contact = () => {
    return context;
}
const read_all = () => {
    return context;
}

module.exports = {
    add_contact,
    edit_contact,
    remove_contact,
    read_all
}