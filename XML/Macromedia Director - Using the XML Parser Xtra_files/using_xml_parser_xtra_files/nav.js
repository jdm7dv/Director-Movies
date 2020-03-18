var do_drop = (parseInt(navigator.appVersion) >= 4) &&
	(navigator.appName.indexOf("Microsoft Internet Explorer") != -1) &&
	(navigator.appVersion.indexOf("Win") != -1);



function MM2K_onLoad() {
	// Preload the rollovers in the top nav.
	MM_preloadImages('/uber/nav/images/over_products.gif','/uber/nav/images/over_support.gif','/uber/nav/images/over_solution.gif','/uber/nav/images/tile_lower_over.gif','/uber/nav/images/over_partners.gif','/uber/nav/images/over_services.gif','/uber/nav/images/over_showcase.gif','/uber/nav/images/over_store.gif','/uber/nav/images/over_company.gif','/uber/nav/images/over_solutions.gif','/uber/nav/images/over_download.gif','/uber/nav/images/over_jobs.gif','/uber/nav/images/over_membership.gif');
	if (do_drop) {
		MM_preloadImages('/uber/nav/images/m/over_aria.gif','/uber/nav/images/m/over_authorware.gif','/uber/nav/images/m/over_coursebuilder.gif','/uber/nav/images/m/over_director.gif','/uber/nav/images/m/over_dreamweaver.gif','/uber/nav/images/m/over_ultradev.gif','/uber/nav/images/m/over_drumbeat.gif','/uber/nav/images/m/over_fireworks.gif','/uber/nav/images/m/over_flash.gif','/uber/nav/images/m/over_freehand.gif','/uber/nav/images/m/over_fontographer.gif','/uber/nav/images/m/over_generator.gif','/uber/nav/images/m/over_likeminds.gif','/uber/nav/images/m/over_players.gif','/uber/nav/images/m/over_register.gif','/uber/nav/images/m/over_soundedit.gif','/uber/nav/images/m/over_xtras.gif','/uber/nav/images/m/over_more.gif','/uber/nav/images/m/over_web_players.gif','/uber/nav/images/m/over_likeminds_e.gif','/uber/nav/images/m/over_sw_player.gif','/uber/nav/images/m/over_f_player.gif'); 
	}
}

var MM2K_nLayerTimeoutID = null;

function MM2K_overLayer() {
	if (!do_drop)
		return;

	if ( MM2K_nLayerTimeoutID )
		clearTimeout(MM2K_nLayerTimeoutID);
	MM2K_nLayerTimeoutID = null;
}

function MM2K_outLayer() {
	if (!do_drop)
		return;
	if ( MM2K_nLayerTimeoutID )
		clearTimeout(MM2K_nLayerTimeoutID);
	MM2K_nLayerTimeoutID = setTimeout('MM2K_showHideLayers(\'products_unt\',\'\',\'hide\',\'support_unt\',\'\',\'hide\')', 1);
}

var MM2K_nButtonTimeoutID = null;

function MM2K_overButton(sJS) {
	if (!do_drop)
		return;
	if ( MM2K_nButtonTimeoutID )
		clearTimeout(MM2K_nButtonTimeoutID);
	MM2K_nButtonTimeoutID = setTimeout(sJS, 130);
}

function MM2K_outButton() {
	if (!do_drop)
		return;

	if ( MM2K_nButtonTimeoutID )
		clearTimeout(MM2K_nButtonTimeoutID);
	MM2K_nButtonTimeoutID = null;
}

function MM2K_hideElement(sElementID, oDOMLayer)  {
	var nIndex;
	var oDOMElement;
	var nLeft;
	var nTop;
	var oDOMParent;

	if ( !document.all )
		return true;

	var nX = oDOMLayer.style.top;
	nX = parseInt(nX.substring(0, nX.length - 2));
	var nY = oDOMLayer.style.left;
	nY = parseInt(nY.substring(0, nY.length - 2));

	for (nIndex = 0; nIndex < document.all.tags(sElementID).length; nIndex++) {
		oDOMElement = document.all.tags(sElementID)[nIndex];
		if (( sElementID == 'OBJECT' ) && ( oDOMElement.codeBase.indexOf('/flash/') != -1))
			continue;
		if (( !oDOMElement ) || ( !oDOMElement.offsetParent))
			continue;
		nLeft = oDOMElement.offsetLeft;
		nTop = oDOMElement.offsetTop;
		oDOMParent = oDOMElement.offsetParent;
		while ( oDOMParent.tagName.toUpperCase() != 'BODY') {
			nLeft += oDOMParent.offsetLeft;
			nTop += oDOMParent.offsetTop;
			oDOMParent = oDOMParent.offsetParent;
		}
		// Adjust the element's offsetTop relative to the dropdown menu
		nTop = nTop - nX;

		if ( nY > (nLeft + oDOMElement.offsetWidth) || nLeft > (nY + oDOMLayer.offsetWidth))
			;
		else if ( nTop > oDOMLayer.offsetHeight )
			;
		else
			oDOMElement.style.visibility = 'hidden';
	}
}

function MM2K_showElement(sElementID) {
	var nIndex;
	var oDOMElement;

	if ( !document.all )
		return true;

	for (nIndex = 0; nIndex < document.all.tags(sElementID).length; nIndex++) {
		oDOMElement = document.all.tags(sElementID)[nIndex];
		if (( !oDOMElement ) || ( !oDOMElement.offsetParent))
			continue;
		oDOMElement.style.visibility = '';
	}
}

// Standard MM JavaScript
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM2K_showHideLayers() { // based off v3.0 MM_showHideLayers
	var i,p,v,obj,args=MM2K_showHideLayers.arguments;
	var oDOMLayer;
	if ( !do_drop )
		return;
	for (i=0; i<(args.length-2); i+=3)
		if ( (obj=MM_findObj(args[i]))!=null ) {
			v=args[i+2];
			oDOMLayer = obj;
			if (obj.style) {
				obj=obj.style;
				v=(v=='show')?'visible':(v='hide')?'hidden':v;
			}
			if ( v=='visible' ) {
 				MM2K_hideElement('SELECT', oDOMLayer);
				MM2K_hideElement('OBJECT', oDOMLayer);
			} else {
				MM2K_showElement('SELECT');
				MM2K_showElement('OBJECT');
			}
			obj.visibility=v;
		}
}

MM2K_loaded = true;
