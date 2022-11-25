import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB
interface IProduct {
    name: string;
    imgUrl: string;
    type: string;
    category: string;
    ingredients: string;
    description: string;
    price: number;
    createdAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    ingredients: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, required: true },
});

// 3. Create a Model
const Product = model<IProduct>('Product', productSchema);

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb://localhost:27017/test')
        .then(() => {
            console.log('Connected to MongoDB!');
        })
        .catch(err => console.log(err));
}
