const express = require('express');
const path = require('path');
const app = express();

// const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

const reqFilter = (req, res, next) => {
    // console.log('reqFilter');
    if (!req.query.age) {
        res.send("Please provide age");
    }
    else if (req.query.age<18)
    {
        res.send("You cannot access  this page")
    }
    else {
        next();
    }
}

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
})

app.get('/users', (req, res) => {
    res.send("Welcome to Users Page");
})


// app.set('view engine', 'ejs');

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/profile', (req, res) => {
//     const users = {
//         name: 'asma',
//         email: 'asma@gmail.com',
//         city: 'Karachi',
//         skills: ['JavaScript', 'C#', 'React JS', 'Node JS']
//     }
//     res.render('profile', { users });
// })

// app.get('/login', (req, res) => {
//     res.render('login')
// })

// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/help', (req, res) => {
//     res.sendFile(`${publicPath}/help.html`)
// })


// app.get('', (req, res) => {
//     // console.log("Data sent by browser", req.query.name)
//     res.send(`<h1>hello , this is Home page</h1>
//         <a href="/about" />Go to About page</a>
//         `);
// });

// app.get('/about', (req, res) => {
//     // res.send("hello , this is About page");
//     res.send(`
//             <input type="text" placeholder="User name" value="${req.query.name}" />
//             <button>Click me</button>
//             <a href="/" />Go to Home page</a>
//         `)
// });

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name: "asma",
//             email: "asma@gmail.com"
//         },
//         {
//             name: "asma ghafoor",
//             email: "asma@gmail.com"
//         }
//     ]);
// });

// app.get('/contact', (req, res) => {
//     res.send("hello , this is Contact page");
// });

app.listen(5000);