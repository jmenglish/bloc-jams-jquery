{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
          </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
    `);
<<<<<<< HEAD
<<<<<<< HEAD

    song.element.on('click', event => {
      player.playPause(song);
    });

    $('#song-list').append(song.element);
=======
=======
>>>>>>> assignment-10-blocjams
     song.element.on('click', event => {
      player.playPause(song);
      $('button#play-pause').attr('playState', player.playState);
    });
     $('#song-list').append(song.element);
<<<<<<< HEAD
>>>>>>> checkpoint-10-blocjams
=======
>>>>>>> assignment-10-blocjams
  });
}
