const pg = require('pg');
const data = {
    user: 'postgres',
    password: 'pass',
    database: 'pinktowers',
    port: 5432,
};


const con = new pg.Client(data);
con.connect(err => {
    if (err) throw err;
    else {
        console.log("connected");
        addNewVisitor();
    }
});

function addNewVisitor() {
    const query = `
        INSERT INTO visitor(name,age,date,time,person_to_see,comments) VALUES ('joe',18,'18 may 2019','12:09','shaun','gsdhkf'); 
        
    `;
    con.query(query)
        .then(() => {
            console.log('visitor inserted successfully!');
            con.end(console.log('connection ended'));
        })
        .catch(err => console.log(err))
}

function listAllVisitors() {
    const query = `
        SELECT id,name FROM visitor; 
    `;
    con.query(query)
        .then(results => {
            const rows = results.rows;
            rows.map(row => {
                console.log(`visitor details: ${JSON.stringify(row)}`);
            });
        })
        .catch(err => {
            console.log(err);
        });
}

function deleteVisitor() {
    const query = `
    DELETE FROM visitor
    WHERE name = 'joe';
`;
    con
        .query(query)
        .then(result => {
            console.log('visitor deleted');

        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

function update() {
    const query = `
    UPDATE visitor
    SET comment = 'jill'  WHERE name='thando';
`;
    con
        .query(query)
        .then(() => {
            console.log('visiter details updated');

        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

function viewVisitor() {
    const query = `
        SELECT * FROM visitor WHERE id=1; 
    `;
    con.query(query)
        .then(results => {
            const rows = results.rows;
            rows.map(row => {
                console.log(`visitor selected: ${JSON.stringify(row)}`);
            });
        })
        .catch(err => {
            console.log(err);
        });
}

function deleteVisitor() {
    const query = `
    DELETE * FROM visitor;
`;
    con
        .query(query)
        .then(result => {
            console.log('visitors deleted');

        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}