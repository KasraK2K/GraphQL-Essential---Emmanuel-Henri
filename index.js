import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => { res.send("<h1 style='color:pink; text-align:center;margin:400px'>GraphQL is AWSOME ...</h1>"); });

const root = { friend: () => {
    return {
        "id": 2,
        "firstName": 'Kaveh',
        "lastName": 'Karami',
        "gender": 'male',
        "language": 'persian',
        "email": 'Kaveh_K2K@yahoo.com'
    };
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

let port = 8080;
app.listen(port, () => {
    console.log(`graphql IDE is running at http://localhost:${port}/graphql`);
});