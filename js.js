	$(document).ready(function(){
		var excuseSource=[
		{
			excuse: "I tried to cut my own hair and made a horrible mess of it, so I had to find a salon that was open and could fit me in to fix it.",
			note:""
	    },
	    {
	    	excuse:"My children locked me out of the house and wouldn’t let me in. I had to call a locksmith and get him to open the door, so I could retrieve the keys, get the children to school and then come to work.",
	    	note:"You should have kids"
	    },
	    {
	    	excuse:"I was late because there was police activity and they made us stay down in the house so I couldn't leave.",
	    	note:""
	    },
	    {
	    	excuse:"My dog burried my car keys.",
	    	note:""
	    }

	];
		

		$('#excuseButton').click(function(evt){
			//define the containers of the info we target
			var excuse = $('#excuseContainer p').text();
			var excuseGenius = $('#excuseGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a excuse and setting a limit
			var sourceLength = excuseSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new excuse
			for(i=0;i<=sourceLength;i+=1){
			var newexcuseText = excuseSource[randomNumber].excuse;
			var newexcuseGenius = excuseSource[randomNumber].note;
			//console.log(newexcuseText,newexcuseGenius);
      var timeAnimation = 500;
      var excuseContainer = $('#excuseContainer');
      //fade out animation with callback
      excuseContainer.fadeOut(timeAnimation, function(){
        excuseContainer.html('');
				excuseContainer.append('<p>'+newexcuseText+'</p>'+'<p id="excuseGenius">'+'								'+newexcuseGenius+'</p>');
        
        //fadein animation.
        excuseContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end excuseButton function
		
		
});//end document ready

