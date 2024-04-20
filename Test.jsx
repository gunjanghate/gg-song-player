import React from 'react';

const Test = () => {
    const playAudio = (fileName) => {
        console.log('Playing audio:', fileName);
        const audioPlayer = document.getElementById('audioPlayer');
        console.log('Audio player:', audioPlayer);
        
        const decodedFileName = decodeURIComponent(fileName);
        console.log('Decoded file name:', decodedFileName);
        
        audioPlayer.src = `/src/songs/${fileName}`;
        
        audioPlayer.play();
      };
      
      

  return (
    <div>
      <h2>Random Songs</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="#"
                onClick={() =>
                  playAudio('NEONI%20audio-%20Darkside%20(Lyrics).mp3')
                }
              >
                DarkSide-Neoni.mp3
              </a>
            </td>
            <td>Queen</td>
            <td>A Night at the Opera</td>
            <td>1975</td>
          </tr>
          <tr>
            <td>
              <a
                href="#"
                onClick={() => playAudio('Dandelions(PagalWorld).mp3')}
              >
                Dandelions-Ruth B.mp3
              </a>
            </td>
            <td>Eagles</td>
            <td>Hotel California</td>
            <td>1976</td>
          </tr>
          <tr>
            <td>
              <a href="#" onClick={() => playAudio('I Love You 3000.mp3')}>
                I Love You 3000-Stephanie Poetri.mp3
              </a>
            </td>
            <td>Eagles</td>
            <td>Hotel California</td>
            <td>1976</td>
          </tr>
          <tr>
            <td>
              <a href="#" onClick={() => playAudio('Christmas_Lights.mp3')}>
                Christmas Lights-Zach Seabaugh.mp3
              </a>
            </td>
            <td>Eagles</td>
            <td>Hotel California</td>
            <td>1976</td>
          </tr>
        </tbody>
      </table>

      <audio id="audioPlayer" controls loop>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Test;
