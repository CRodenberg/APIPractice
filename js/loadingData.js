var vidArr = ["E1RThwKXMlo","X68JQiRAvM8","-8iNgYA49aQ","LQwXlCrqyis","eZHI16HfidQ"];
 function testMultiple(vidIdArr, pNum){
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      window.onYouTubeIframeAPIReady = function() {
      	for(var i = 0; i <= 4; i++){
	      	var temp = 'player' + i;
		       	player = new YT.Player(temp, {
		          height: '110',
		          width: '196',
		          videoId: vidIdArr[i],
		          events: {
		            'onReady': onPlayerReady,
		            'onStateChange': onPlayerStateChange
		          }
		        });
	    }
       }
      // 4. The API will call this function when the video player is ready.
		  function onPlayerReady(event) {
        
      }

      // 4. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
     }
     return;
	}
	testMultiple(vidArr, 1);