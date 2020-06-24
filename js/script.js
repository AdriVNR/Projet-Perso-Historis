if (typeof jQuery != 'undefined') {
	console.log(typeof jQuery);
}


// jQuery('.menu').on('click', function(){
// 	jQuery('.slidetoggle').slideToggle(1000);
// });


// jQuery('.menu').on('click', function(){
// 	console.log('test')
// 	const blocknone = jQuery(this).next().css('display');

// 	if (blocknone == 'none'){
// 		jQuery('.cache').css('display','none');
// 		jQuery(this).next().css('display','block');
// 	} else {
// 		jQuery('.cache').css('display','none');
// 		jQuery(this).next().css('display','none');
// 	}
// });



jQuery('.st').on('click', function(){
	jQuery(this).next().slideToggle(600);

	
});




