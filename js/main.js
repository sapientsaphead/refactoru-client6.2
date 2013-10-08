$(document).ready(function() {
    

	//HTML RENDERING
    var insertProfile = function(arr){
        var profileEl = $('<div class="container"></div>');
        var nameEl = $('<div class="dataEl"><span class="title">My name is:<br></span><p class="pname">{0}</p></div>'.supplant(arr));
        var bioEl = $('<div class="dataEl"><span class="title">Short bio:<br></span><p class="pbio">{1}</p></div>'.supplant(arr));
        var booksEl = $('<div class="dataEl"><span class="title">My favorite books are:<br></span><p class="pfavebooks">{2}</p></div>'.supplant(arr));
        var libsEl = $('<div class="dataEl"><span class="title">My favorite JS libraries are:<br></span><p class="pfavejslibs">{3}</p></div>'.supplant(arr));

    
        var inputText = $('<input type="text" class="form-control">');
        var saveButton = $('<button type"button" class="save btn btn-block btn-primary">✓</button>');

        profileEl.append(nameEl);
        profileEl.append(bioEl);
        profileEl.append(booksEl);
        profileEl.append(libsEl);

        Boolean(myName) === false ? "" : $('.display-profile').append(profileEl);
        $('.dataEl').append('<div class="inline-editor hide"></div>'); 
        $('.inline-editor').append(inputText);
        $('.inline-editor').append(saveButton);  
   };

	//EVENT HANDLERS


    $('.add-profile').on('click', function() {
    	$('.profile-form').toggle(function (){
    		$('.profile-form').addClass("active");
    		$('.profile-form').removeClass("active");
    	}); 
    });

    var myName;
    var myBio;
    var myFaveBooks;
    var myFaveJSLibs;
   

    $('.profile-page').on('click', '.submit', function(){

    	myName = $('#name').val();
    	myBio = $('#bio').val();
    	myFaveBooks = $('#fave-books').val();
    	myFaveJSLibs = $('#fave-jslibs').val();

    	$('.profile-form').toggle(function (){
    		$('.profile-form').removeClass("active");
    	}); 
    	 var profileArray = [myName, myBio, myFaveBooks, myFaveJSLibs];
    	insertProfile(profileArray);
    });

    $('.display-profile').on('click', 'p', function(){
    	$(this).addClass("hide");

        $(this).closest('.dataEl').find('.inline-editor').removeClass("hide");
    	
    });

    $('.display-profile').on('click', '.save', function(){
        $(this).closest('.dataEl').find('.inline-editor').removeClass("hide");
        
        // console.log(this);
        //     var newinput = $(input, this).text();
        //     $('p', this).replaceWith(newinput);
        });
   	

}); //end of document ready function