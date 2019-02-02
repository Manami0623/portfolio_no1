$(function(){
	$("#toplogo").textillate({
	  loop: true,
	  // フェードイン時のアニメーション
	  in: {
	    effect: 'flash',
	    delay: 100,
	    shuffle: true
	  },
	  // フェードアウト時のアニメーション
	  out: {
	  	effect: 'fadeOutRightBig',
	    delay: 50,
	    reverse: true
	  }
	});
})
