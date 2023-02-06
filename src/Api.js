import { app } from "./firebaseConfig";
import { getFirestore, doc, setDoc, getDocs, addDoc, updateDoc, collection, query, arrayUnion, onSnapshot } from "firebase/firestore";

const db = getFirestore(app);

const usersRef = collection(db, "users");
const q = query(usersRef);

export default {
    addUser: async (user) => {
        await setDoc(doc(db, "users", user.id), {
            name: user.name,
            avatar: user.avatar,
        });
    },
    getContactList: async (userId) => {
        let list = [];

        let results = await getDocs(q);
        results.forEach(doc => {
            let data = doc.data();
            if(doc.id !== userId) {
                list.push({
                    id: doc.id,
                    name: data.name,
                    avatar: data.avatar
                });
            }
        });

        return list;
    },
    addNewChat: async (user, user2) => {
        let newChat = await addDoc(collection(db, "chats"), {
            messages: [],
            users: [user.id, user2.id]
        }); 

        const userRef = doc(db, "users", user.id);
        await updateDoc(userRef, {
            chats: arrayUnion({
                chatId: newChat.id,
                title: user2.name,
                image: user2.avatar,
                with: user2.id
            })
        });

        const user2Ref = doc(db, "users", user2.id);
        await updateDoc(user2Ref, {
            chats: arrayUnion({
                chatId: newChat.id,
                title: user.name,
                image: user.avatar,
                with: user.id
            })
        });
    },
    onChatList: (userId, setChatList) => {
        const userRef = doc(db, "users", userId);

        return onSnapshot(doc(userRef), (doc) => {
            if(doc.exists) {
                let data = doc.data();
                if(data.chats) {
                    setChatList(data.chats)
                }
            }
        });
    }
};