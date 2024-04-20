// // async function main(){
// //     let a = await fetch("/songs/song.html")
// //     let resp = await a.text();
// //     console.log(resp)
// //     let div = document.createElement("div")
// //     div.innerHTML= resp;
// //     console.log(div.innerHTML);
// //     let as = div.getElementsByTagName("a")
// //     // console.log(as)
// //     let songs=[]
// //     for (let index = 0; index < as.length; index++) {
// //         const element = as[index];
// //         if(element.href.endsWith(".mp3")) // Corrected from element.a to element.href
// //             songs.push(element.href);   
// //     }
// //     console.log(songs)
// // }


// // // function playAudio(fileName) {
// // //   var audioPlayer = document.getElementById('audioPlayer');
// // //   audioPlayer.src = fileName;
// // //   audioPlayer.play();
// // // }

// // // export default playAudio
// /////////////////////////////////////////////////
// async function main() {
//     try {
//         // Fetch HTML content
//         let response = await fetch("/songs/song.html");
//         let htmlContent = await response.text();

//         // Parse HTML content into a DOM structure
//         let parser = new DOMParser();
//         let htmlDoc = parser.parseFromString(htmlContent, "text/html");

//         // Extract script tags
//         let scriptTags = htmlDoc.querySelectorAll("script");

//         // Execute scripts
//         scriptTags.forEach(scriptTag => {
//             let newScript = document.createElement("script");

//             // Set src attribute or textContent
//             if (scriptTag.src) {
//                 newScript.src = scriptTag.src;
//             } else {
//                 newScript.textContent = scriptTag.textContent;
//             }

//             // Append the new script element to the document's head or body
//             document.head.appendChild(newScript);
//         });

//         // Now you can continue with your logic, such as extracting anchor tags and processing them
//         let a = await fetch("/songs/song.html")
//         let resp = await a.text();
//         console.log(resp)
//         let div = document.createElement("div")
//         div.innerHTML= resp;
//         // console.log(div.innerHTML);
//         let as = div.getElementsByTagName("a")
//         // console.log(as)
//         let songs=[]
//         for (let index = 0; index < as.length; index++) {
//             const element = as[index];
//             if(element.href.endsWith(".mp3")) // Corrected from element.a to element.href
//                 songs.push(element.href);   
//         }
//         console.log(songs)
//     } catch (error) {
//         console.error("Error fetching or processing HTML content:", error);
//     }
// }

// main();







// main();
{/* <audio id="player" src="vincent.mp3"></audio>
<div> 
  <button onclick="document.getElementById('player').play()">Play</button> 
  <button onclick="document.getElementById('player').pause()">Pause</button> 
  <button onclick="document.getElementById('player').volume += 0.1">Vol +</button> 
  <button onclick="document.getElementById('player').volume -= 0.1">Vol -</button> 
</div> */}