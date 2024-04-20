import React from "react";

const Songfirst = () => {
  const playAudio = (fileName) => {
    console.log("Playing audio:", fileName);
    const audioPlayer = document.getElementById("audioPlayer");
    console.log("Audio player:", audioPlayer);

    const decodedFileName = decodeURIComponent(fileName);
    console.log("Decoded file name:", decodedFileName);

    audioPlayer.src = `/src/songs/${fileName}`;

    audioPlayer.play();
  };
  return (
    <div>
       
      <a
        href="#"
        onClick={() => playAudio("NEONI%20audio-%20Darkside%20(Lyrics).mp3")}
      >
        DarkSide-Neoni.mp3
      </a> <br />
      <audio id="audioPlayer" controls loop>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Songfirst;
