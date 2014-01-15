$(function() {

    //DEFAULT
    $("section.spanish").hide()

    //SWITCH LANGUAGES
    $("nav > a").on("click", function (event) {
      event.preventDefault();
      $("section").hide();
      $("section."+this.className).show();
  
      document.title = document.title.substring(0,24) + " " + this.className;
    });

    //PLAY SOUND
    $("section > a").on("click", function (event) {
      event.preventDefault();
      accent = this.className;
  
      words = $("input").val();
  
      if (words == ""){
        alert("put something")
      }
      else {
        $(this.firstChild).attr("src", "http://translate.google.com/translate_tts?tl="+accent+"&q="+words)
        this.firstChild.play()
      };

    });
});