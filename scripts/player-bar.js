{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });
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
   $('button#next').on('click', function() {
    if (player.playState !== "playing") { return; }
     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }
     const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
  $('button#previous').on('click', function() {
   if (player.playState !== "playing") { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
   const nextSongIndex = currentSongIndex - 1;
   if (nextSongIndex >= album.songs.length) { return; }
    const nextSong = album.songs[nextSongIndex];
   player.playPause(nextSong);
 });
 }
>>>>>>> assignment-10-blocjams
