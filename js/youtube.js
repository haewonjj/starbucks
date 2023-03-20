 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
    videoId: 'ee973zMi0Cs',//영상 재생할 유튜브 아이디
    playerVars:{
        autoplay:true,//자동재생 유무
        loop:true,//반복재생 유무
        playList:['MIqRghRCBTQ','ee973zMi0Cs']//유튜브 반복재생
     },
     events:{
        onReady:function(event){
            event.target.mute()//음소거
        }
     }
   });
 }
 