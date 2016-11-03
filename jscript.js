$(document).ready( function() {
	var spotifyApi = "https://api.spotify.com/v1/albums/?ids=17EFF25Ee9kK5QgPgd4bv5,1xXSEeYg8T9UFaphdP9FtP,6R6Xy2gwyTO6GS1Cs4K1cI,4N0nmK7gWxKZvRwTv02FKs,7cJyN85qjzHZBjeo9LRry8,0mu1FtVZK5mUrYT9FmxtIo";
	var getAlbumInfo = function (albumData) {
		console.log(albumData);
		var albumHTML = '<ul>';
		$.each(albumData.albums, function (i, eachAlbum) {
			albumHTML += '<li class="albums"><a href="#">';
			albumHTML += '<img src="'+ eachAlbum.images[0].url + '"  alt="' + eachAlbum.name +  ' <br>by<br>  '  + eachAlbum.artists[0].name + '"></a></li>';
		}); //end loop
		albumHTML += '</ul>';
		$('#main-gallery').html(albumHTML);

		
		
		$('img').click( function () {
			var boxHTML = '<div class="lightbox">';
			boxHTML += '<img src="' + $(this).attr("src") + '" class="lightBoxImg">';
			boxHTML += '<p class = lightBoxText>' + $(this).attr("alt") + '</p>';
			boxHTML += '<p id="close">X</p></div>';
		
			$('#main-gallery').append(boxHTML);

			$('#close').click( function () {
				$('.lightbox').remove();
			});

		}); //end lightbox

		
	};	

	$.getJSON(spotifyApi, getAlbumInfo);

		


}); //end ready 






