import firebase_app from "@/firebase/config";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
    try {
        // Initialize Firestore Instance
        const db = getFirestore(firebase_app);

        // Get post document from Firestore
        const postRef = doc(db, "posts", "gcGQzvnVrU2t1SK0guEt");
        const postDoc = await getDoc(postRef);

        if (postDoc.exists()) {
            console.log(postDoc.data());
            const postData = postDoc.data();
            return NextResponse.json(postData, { status: 200 });
        } else {
            return NextResponse.json({
                message: "Post not found",
                status: 404
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server error", status: 500 });
    }
}
