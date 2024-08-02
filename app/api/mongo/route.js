import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

    


// Replace the uri string with your connection string.
const uri = "mongodb+srv://mrcoderindia:80128012@cluster.9lpgjr4.mongodb.net/";
const client = new MongoClient(uri); 
  try {
    const database = client.db('harsh');
    const movies = database.collection('stock');
    // Query for a movie that has the title 'Back to the Future'
    const query = {  };
    const movie = await movies.find(query).toArray();
    console.log(movie);
    return NextResponse.json({"a": 34, movie})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  } 

}