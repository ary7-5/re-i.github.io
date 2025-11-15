// music; if i can get any shit done

const fileArray = ["voice.mp3" , "getyourwish.mp3" , "mother.mp3" , "lightvelocity.mp3" , "idealandthereal.mp3"
        , "IJustThrewOutTheLoveOfMyDreams.mp3" , "m11.mp3" , "steponme.mp3" , "seether.mp3"];
        

setTimeout(choose, 5000)

function choose () {
   
        var src = document.getElementById("songsrc");

          var random = Math.floor(Math.random() * 9);            
                var filename = "";
                filename = fileArray[random];
                var song = "music/" + filename;
                random = random + 1

        if(random == 1) {
                var title = "voice (tsuchiya remix)";
                var artist = "atlus sound team";
        
        }  else if(random == 2) {
                 title = "get your wish";
                 artist = "porter robinson";                
        }
          else if(random == 3) {
                 title = "mother";
                 artist = "porter robinson";                
        }
          else if(random == 4) {
                 title = "light velocity ver. ii";
                 artist = "isamu ohira";                
        }
          else if(random == 5) {
                 title = "ideal and the real -end ver-";
                 artist = "shoji meguro";                
        }
          else if(random == 6) {
                 title = "i just threw out the love of my dreams";
                 artist = "weezer";                
        }
          else if(random == 7) {
                 title = "M11 re-arrange / re-mix";
                 artist = "arianne";                
        }
          else if(random == 8) {
                 title = "step on me";
                 artist = "the cardigans";                
        } 
          else if(random == 9) {
                 title = "seether";
                 artist = "veruca salt";                
        }

    src.innerHTML = '<audio controls="" loop=""><source type="audio/mpeg" src="' + song + '">Your browser does not support the audio element.</audio><br>'+
          '<b id="title" style="font-family: monospace;">title</b><br>' +
          '<b id="artist" style="font-weight: lighter; color: grey; font-style: italic; font-family: monospace;">artist</b>';
     
      var ttext = document.getElementById("title");
      var atext = document.getElementById("artist");

     ttext.innerText = title;
     atext.innerText = artist;
}
