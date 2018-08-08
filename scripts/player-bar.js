{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  $('button#next').on('click', function() {
    if (player.playState !== "playing") { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

}
=======
=======
>>>>>>> checkpoint-11-blocjams
=======
>>>>>>> assignment-11-blocjams
   $('button#next').on('click', function() {
    if (player.playState !== "playing") { return; }
     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }
     const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
<<<<<<< HEAD
=======

>>>>>>> assignment-11-blocjams
  $('button#previous').on('click', function() {
   if (player.playState !== "playing") { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
   const nextSongIndex = currentSongIndex - 1;
   if (nextSongIndex >= album.songs.length) { return; }
    const nextSong = album.songs[nextSongIndex];
   player.playPause(nextSong);
 });
<<<<<<< HEAD
<<<<<<< HEAD
 }
>>>>>>> assignment-10-blocjams
=======
=======
>>>>>>> assignment-11-blocjams

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

<<<<<<< HEAD
=======

  $('#volume-control input').on('input', function (event) {
      player.setVolume(event.target.value);
  });

>>>>>>> assignment-11-blocjams
  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
<<<<<<< HEAD
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
  }, 1000);

 }
>>>>>>> checkpoint-11-blocjams
=======
    $('#time-control .current-time').text( currentTime);
    $('#time-control input').val(percent);
    $('#time-control .total-time').text( duration);
  }, 1000);


 }
>>>>>>> assignment-11-blocjams
