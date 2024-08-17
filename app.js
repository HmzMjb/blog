// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWN8A1iKaOim2HG7I2xZGrRwsbweI7z9A",
    authDomain: "hackathon-blog-site.firebaseapp.com",
    databaseURL: "https://hackathon-blog-site-default-rtdb.firebaseio.com",
    projectId: "hackathon-blog-site",
    storageBucket: "hackathon-blog-site.appspot.com",
    messagingSenderId: "290859748016",
    appId: "1:290859748016:web:803cdeeaf6209a57d7c975",
    measurementId: "G-NTERD3PF8Y"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
window.logout = () => {
    signOut(auth).then(() => {
        alert("Signout successful")
        window.location.replace("/Signin/Signin.html")
      }).catch((error) => {
        alert(error)
      });
}
let image = document.getElementById("image")
let title = document.getElementById("title")
let summary = document.getElementById("summary")
let link = document.getElementById("link")
let category = document.getElementById("category")

let posts = [
    {
        image: image.value,
        title: title.value,
        summary: summary.value,
        link: link.value,
        category: category.value,
    }
]

const postsContainer = document.getElementById("posts-container");
            postsContainer.innerHTML = "";

            posts.forEach(posts => {
                const postCard = `
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="${posts.image}" alt="Post Image" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2">${posts.title}</h3>
                            <p class="text-gray-600 mb-4">${posts.summary}</p>
                            <div class="flex justify-between items-center">
                                <a href="${posts.link}" class="text-indigo-500 hover:underline">Read More</a>
                                <span class="text-gray-400 text-sm">Category: ${posts.category}</span>
                            </div>
                        </div>
                    </div>
                `;
                postsContainer.innerHTML += postCard;
            });