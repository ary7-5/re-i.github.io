// music; if i can get any shit done

const fileArray = ["2-24 Voice (Atlus Tsuchiya Remix).mp3" , "03 - Porter Robinson - Get Your Wish.mp3" , "07 - Porter Robinson - Mother.mp3" , "17 - Light Velocity Ver.II.mp3" , "27. Ideal and the Real -end version-.mp3"
        , "I Just Threw Out The Love Of My Dreams.mp3" , "M11 re-arrange and re-mix_spotmp3.app.mp3" , "Step On Me_spotdown.app.mp3" , "SpotiMate.io - Seether - Veruca Salt.mp3"];
        

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

    src.innerHTML = '<source type="audio/mpeg" src="' + song + '">Your browser does not support the audio element.'
     
      var ttext = document.getElementById("title");
      var atext = document.getElementById("artist");

     ttext.innerText = title;
     atext.innerText = artist;
}
