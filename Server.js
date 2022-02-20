const express = require('express')
const {ApolloServer, gql} = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolver')
const mongoose = require("mongoose");


async function startServer() {
    const app = express();
    const appolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await appolloServer.start();
    appolloServer.applyMiddleware({app});
    app.use((req, res) => {
        res.send(`Hello from Express Apollo server`);
    });
    await mongoose.connect(`mongodb+srv://nafis:nafis123@cluster0.jklsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

    app.listen(4000,()=>console.log(`running on 4000`))
}

startServer();