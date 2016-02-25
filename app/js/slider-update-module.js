(function () {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 100, 13000 ],
      slide: function( event, ui ) {
        $( "#amount-first" ).val(ui.values[0]);
        $( "#amount-second" ).val(ui.values[1]);
      }
    });
    
    $( "#amount-first" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-second" ).val($( "#slider-range" ).slider( "values", 1 ));
    
    $("input#amount-first").change(function () {
        var value1 = $("input#amount-first").val();
        var value2 = $("input#amount-second").val();
            
            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $("input#amount-first").val(value1);
            }
            $("#slider-range").slider("values", 0, value1);
    });
    $("input#amount-second").change(function () {
        var value1 = $("input#amount-first").val();
        var value2 = $("input#amount-second").val();
            
            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $("input#amount-second").val(value2);                
            }
            $("#slider-range").slider("values", 1, value2);
    });
})();