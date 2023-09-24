document.addEventListener('DOMContentLoaded', function () {
  const textInput1 = document.getElementById('textInput1');
  const textInput2 = document.getElementById('textInput2');
  const sendButton = document.getElementById('sendButton');

  sendButton.addEventListener('click', function () {
      const song1 = textInput1.value;
      const song2 = textInput2.value;

      data = { song1, song2 };

      // Send the texts to the backend
      fetch('https://68.233.117.135/api', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
          .then(response => response.json())
          .then(data => {
                console.log('Response from server:', data.songs);
                console.log(data.songs[0].song1);
                document.getElementById('song1').textContent = "Recommend 1: " + data.songs[0].song1 + " by " + data.artists[0].artist1;
                document.getElementById('song2').textContent = "Recommend 2: " + data.songs[1].song2 + " by " + data.artists[1].artist2;
                document.getElementById('song3').textContent = "Recommend 3: " + data.songs[2].song3 + " by " + data.artists[2].artist3;
                document.getElementById('song4').textContent = "Recommend 4: " + data.songs[3].song4 + " by " + data.artists[3].artist4;
                document.getElementById('song5').textContent = "Recommend 5: " + data.songs[4].song5 + " by " + data.artists[4].artist5;
                document.getElementById('song6').textContent = "Recommend 6: " + data.songs[5].song6 + " by " + data.artists[5].artist6;
                document.getElementById('song7').textContent = "Recommend 7: " + data.songs[6].song7 + " by " + data.artists[6].artist7;
                document.getElementById('song8').textContent = "Recommend 8: " + data.songs[7].song8 + " by " + data.artists[7].artist8;
                document.getElementById('song9').textContent = "Recommend 9: " + data.songs[8].song9 + " by " + data.artists[8].artist9;
                document.getElementById('song10').textContent = "Recommend 10: " + data.songs[9].song10 + " by " + data.artists[9].artist10;
                var songData = document.getElementById('songData');
                songData.classList.remove('hidden');


          })
          .catch(error => {
              console.error('Error:', error);
          });
  });
});

