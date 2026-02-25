import bcrypt from 'bcrypt';

const users = [
    {
        name:'Admin User',
        email:"admin@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'John Dpe',
        email:"john@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin:false
    },
    {
        name:'Keerthi Suresh',
        email:"keerthi.s@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin:false
    },
];

export default users;



