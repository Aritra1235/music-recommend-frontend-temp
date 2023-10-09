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
                document.getElementById('songlink1').href = "https://open.spotify.com/track/" + data.ids[0].id1;
                document.getElementById('songlink2').href = "https://open.spotify.com/track/" + data.ids[1].id2;
                document.getElementById('songlink3').href = "https://open.spotify.com/track/" + data.ids[2].id3;
                document.getElementById('songlink4').href = "https://open.spotify.com/track/" + data.ids[3].id4;
                document.getElementById('songlink5').href = "https://open.spotify.com/track/" + data.ids[4].id5;
                document.getElementById('songlink6').href = "https://open.spotify.com/track/" + data.ids[5].id6;
                document.getElementById('songlink7').href = "https://open.spotify.com/track/" + data.ids[6].id7;
                document.getElementById('songlink8').href = "https://open.spotify.com/track/" + data.ids[7].id8;
                document.getElementById('songlink9').href = "https://open.spotify.com/track/" + data.ids[8].id9;
                document.getElementById('songlink10').href = "https://open.spotify.com/track/" + data.ids[9].id10;
                
                
                var songData = document.getElementById('songData');
                songData.classList.remove('hidden');


          })
          .catch(error => {
              console.error('Error:', error);
          });
  });
});

