$( document ).ready(function() {
    $("#title").text(params.title);
    // click event on day element
    $(".day").on( "click", function( event ) {
      //get the element
      var element = $(event.target);
      //get today date
      var date = new Date();
      var today_day = date.getDate();
      var today_month =  date.getMonth();
  
      // get day number with text number
      var day_request = Number(element.text());
      // month request, the month of your advent calendar
      // 0 => january, 11 => december
      var month_request = params.month;
  
      // test if your not too early
      var show_months = true;
      var show_day = false; 
      if(today_month != month_request){
          show_months = false;
      } else {
        if(day_request <= today_day ){
          show_day = true;
        }
      }
      
      if (day_request == 2 || day_request == 14 || day_request == 16 || day_request == 21) {
        playJingleBells();
      }
  
      if (day_request == 8) {
        playElPrimo();
      }
  
      if (day_request == 11) {
        playSkibidi();
      }
  
      if (day_request == 5) {
        playGotaga();
      }
  
      if (day_request == 12) {
        playFelizNavidad();
      }
  
      if (day_request == 13) {
        playTuAsPeur();
      }
  
      if (day_request == 17) {
        playBounce();
      }
  
      if (day_request == 18) {
        playTrain();
      }
  
      if (day_request == 23) {
        playHopak();
      }
    
  
  
      // show modal
      if(show_day && show_months){
        // load data from md file with day number
        $.get(params.data_folder+day_request+".md", function( data ) {
          // create converter md to html
          var converter = new showdown.Converter();
          // convert md data into html
          var html = converter.makeHtml(data);
          // put the html in div element
          $(".day-content").html(html)
          // open modal
          $("#day-modal").modal({
              size: 'large',
              fadeDuration: 200,
              fadeDelay: 0.30,
          });
        },'text');
      } else {
        // if too early
        $("#no-day-modal").modal({
            fadeDuration: 200
        });
      }
    });
  
  });
  