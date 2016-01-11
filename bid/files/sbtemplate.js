


/*
** Add or Hide certain text wrap into HTML elements(like span. div, p etc) by selecting class and id
*/
    /*function to toggle visibility of class*/
            function toggle_visibility(classname) { $("."+classname).toggle(); }
    /*function to hide class*/
            function hide_visibility(classname) { $("."+classname).hide(); }
    /*function to show class*/
            function show_visibility(classname) { $("."+classname).show(); }
    /*function to hide individual div by id*/
            function hide_visibility(classname) { $("#"+classname).hide(); }
    /*function to show individual div by id*/       
            function show_visibility(classname) { $("#"+classname).show(); }

/*
** Select, change Bid Template
*/
// Default action for selecting Template at opening/initial stage.			
    $(document).ready(function (){
             
                $(".box").hide();
                $(".drupal").show();				
				$('input[name=bidcat]').val(['drupal']);
           
        });
		
// Select, change template
    $(document).ready(function(){
        $('input[type="radio"]').click(function(){
            if($(this).attr("value")=="drupal"){
                $(".box").hide();
                $(".drupal").show();
            }
            if($(this).attr("value")=="wordpress"){
                $(".box").hide();
                $(".wordpress").show();
            }
            if($(this).attr("value")=="common"){
                $(".box").hide();
                $(".common").show();
            }
        });
    });

// Select All text
    function select_all(el) {
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.select();
        }
    }