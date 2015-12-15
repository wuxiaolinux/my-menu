$(function() {
	$('.tj_menu_click').on('click', function() {
		openMenu(this);
	});

	$('.fun_leaf').on('click', function() {
		openFun(this);
	})
});

function openMenu(obj) {
	var status = $(obj).attr('status');
	if(status == 'menu_close') {
		$(obj).next('.tj_menu_ul').show(200);
		$(obj).children('.glyphicon').removeClass('glyphicon-folder-close').addClass('glyphicon-folder-open');
		$(obj).attr('status', 'menu_open');
	} else {
		$(obj).next('.tj_menu_ul').hide(200);
		$(obj).children('.glyphicon').removeClass('glyphicon-folder-open').addClass('glyphicon-folder-close');
		$(obj).attr('status', 'menu_close');
	}
}

function openFun(obj) {
	alert('打开功能啦！');
}
