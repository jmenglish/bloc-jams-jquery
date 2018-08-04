{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('#album-artist').text(album.artist);
  $('#album-releaseInfo').text(album.releaseInfo);
}
