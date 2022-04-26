import 'dotenv/config'
import express from 'express'
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';



const app = express()
const port = process.env.PORT || 5000;



// middleware 

app.use(cors())

app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.hprqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object

// });

const run = async () => {
    try {
        await client.connect();

        console.log("db connected");
        const serviceCollection = client.db("JWTgeniousCar").collection("JWTservice");
        const orderCollection = client.db("JWTgeniousCar").collection("JWTorder");

        app.get('/service', async (req, res) => {


            const query = {}
            const cursor = serviceCollection.find(query)

            const services = await cursor.toArray()
            res.send(services)
        })


        app.get(`/service/:id`, async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }

            const service = await serviceCollection.findOne(query)
            res.send(service)
        })

        // post

        app.post(`/service`, async (req, res) => {

            const newService = req.body
            const result = await serviceCollection.insertOne(newService)

            res.send(result)
        })

        // delete
        // DELETE
        app.delete('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await serviceCollection.deleteOne(query);
            res.send(result);
        });


        // order collection api

        app.post("/order", async (req, res) => {
            const order = req.body
            console.log(order);
            const result = await orderCollection.insertOne(order)
            res.send(result)
        });
        app.get('/order', async (req, res) => {


            const query = {}
            const cursor = orderCollection.find(query)

            const services = await cursor.toArray()
            res.send(services)
        })


        // const users = { name: 'mahi', email: 'mahi@gmail.com' }
        // const result = await usercollection.insertOne(users)
        // console.log(`inserted with the _id: ${result.insertedId}`)

    }


    finally {
        // await client.close();
    }

}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send(` running my geneus car server`)

});


app.listen(port, () => {
    console.log("Listening to port", port)
})

