import firebase_app from "@/firebase/config";
import type { NextApiResponse, NextApiRequest } from 'next';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { NextResponse } from "next/server";

interface Post {
    title: string,
    content: string,
    author: string,
    author_id: number,
    created_at: Date,
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
    try {
        // Initialize Firestore Instance
        const db = getFirestore(firebase_app);

        // Add post to Firestore
        const newPost: Post = {
            title: "My new post",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "John Doe",
            author_id: 1,
            created_at: new Date()
        };
        const postsCollection = collection(db, 'posts');
        const newPostRef = await addDoc(postsCollection, newPost);
        console.log("New post added with ID: ", newPostRef.id);

        return NextResponse.json({ message: 'Post added successfully', status: 201});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error adding post", status: 500 });
    }
}