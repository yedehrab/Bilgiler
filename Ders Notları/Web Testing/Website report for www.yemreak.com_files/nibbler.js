$.fn.setCursorPosition = function(position){
    if(this.length == 0) return this;
    return $(this).setSelection(position, position);
}

$.fn.setSelection = function(selectionStart, selectionEnd) {
    if(this.length == 0) return this;
    input = this[0];

    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }

    return this;
}

$.fn.focusEnd = function(){
    this.setCursorPosition(this.val().length);
    return this;
}

urlInputText = new Array();
imageSelectors = new Array();

var locked = false;
var statusBucket = "";
var currentpercent = 0;
var startprogress = 30;
var lastprogval = 0;
var samecount = 0;
var errmsg = false;
var retest = false;
var normTestId = "";
var focussed = false;
var focussedkw = false;


var currenttab = "";

var tables = new Array();

function loader()
{
    $('#report').each(setupReport);
    $('#inputOverlay').each(setupHome);
}

function setupHome()
{
    previousText = $("#url").val();
    if(previousText == "http://")
    {
        elem = $("#url").focus().focus(focusHide).click(hideOverlay).keypress(hideOverlay).keyup(pasteAndHideOverlay).bind('input paste', pasteAndHideOverlay).blur(showOverlay).get(0);
        doSetCaretPosition(elem, $(elem).val().length);
        $("#inputOverlay").show().html("<p>"+strings['Enter web address and click test.']+"</p>").click(hideOverlayandFocus);
    }
    $('.searchinfo').after('<p id="sacontainer" class="addkeywords"><a href="#" id="searchanalysis"><span>Add keywords for extra search analysis (optional)</span></a></p>');
    $('#searchanalysis').click(function(){
        $('.searchinfo').slideToggle();
        if($('#sacontainer.addkeywords').length == 1)
        {
            $('.addkeywords').removeClass('addkeywords').addClass('nokeywords');
        } else {
            $('.nokeywords').removeClass('nokeywords').addClass('addkeywords');
        }

        return false;
    });

    elem = $("#keywords").focus().focus(focusHideKw).click(hideOverlayKw).keypress(hideOverlayKw).keyup(pasteAndHideOverlayKw).bind('input paste', pasteAndHideOverlayKw).blur(showOverlayKw).get(0);
    $("#keywordsOverlay").hide().html("<p>e.g. bakery, fresh bread</p>").click(hideOverlayandFocusKw);

    if($('#keywords').val() == "")
    {
        $('.searchinfo').hide();
        $("#keywordsOverlay").show()
    }
}

function googleMapsAdd()
{
    var errors = [];
    $("#modalErrorResponse").hide("slow");

    var formData = {
        'name' 				: $('#googleName').val(),
        'number' 			: $('#googleNumber').val(),
        'category'          : $('#googleCategory').val(),
        'website'           : $('#googleWebsite').val(),
        'num'               : $('#googleNum').val(),
        'line1'             : $('#googleLine1').val(),
        'line2'             : $('#googleLine2').val(),
        'postcode'          : $('#googlePostcode').val(),
        'country'           : $('#googleCountry').val()
    };

    if(!formData.name.length)
    {
        errors.push("Please add a name for the Business/Site.");
    }

    if(!formData.category.length)
    {
        errors.push("Please specify a category that your business/site is in.");
    }

    if(!formData.website.length)
    {
        errors.push("Please add a valid website URL.");
    }

    if(!formData.num.length)
    {
        errors.push("Please add a valid property name/number.");
    }

    if(!formData.line1.length || !formData.line2.length)
    {
        errors.push("Please add a valid address.");
    }

    if(formData.postcode.length < 5 || formData.postcode.length > 8)
    {
        errors.push("Please add a valid postcode/zip code.");
    }

    if(!formData.country.length)
    {
        errors.push("Please add a valid country.");
    }

    if(formData.number.indexOf("+") != 0)
    {
        errors.push("Please add the country code at the start of the contact number field.");
    }

    if(formData.number.length < 10 || formData.number.length > 20)
    {
        errors.push("This number is either too short or too long.");
    }

    var allErrors = "<ul>";
    errors.forEach(function(entry) {
        allErrors += "<li>"+entry+"</li>";
    });
    allErrors += "</ul>";

    if(errors.length)
    {
        $("#modalErrorResponse").html(allErrors).show("slow");
    }
    else
    {
        $.ajax({
            type: "POST",
            url: "/mapsadd",
            data: formData,
            success: function(msg) {
                switch(msg)
                {
                    case "Success":
                    {
                        $('#googleModal').modal('hide');
                        window.alert("Request sent to Google for approval, please try running a report again shortly.");
                        break;
                    }
                    case "Invalid_Fields":
                    {
                        $("#modalErrorResponse").html("You have invalid fields in your request.").show("slow");
                        break;
                    }
                    case "Failed":
                    {
                        $("#modalErrorResponse").html("Request Failed. Check your fields and try again later.").show("slow");
                        break;
                    }
                    case "Failed_LatLng":
                    {
                        $("#modalErrorResponse").html("Request Failed. Check your fields and try again later.").show("slow");
                        break;
                    }
                    case "Failed_Curl":
                    {
                        $("#modalErrorResponse").html("Request Failed. Check your fields and try again later.").show("slow");
                        break;
                    }
                    case "Could_Not_Add":
                    {
                        $("#modalErrorResponse").html("Could not add to Google Maps, please try again later.").show("slow");
                        break;
                    }
                    default:
                    {
                        $("#modalErrorResponse").html("Could not add to Google Maps, please try again later.").show("slow");
                        break;
                    }
                }

            },
            error: function(err) {
                $("#modalErrorResponse").html("There was an error adding this entry, please try again shortly.").show("slow");
            },
            dataType: 'html'
        });
    }
}

function hideOverlayandFocus()
{
    elem = $("#url").focus().get(0);
    doSetCaretPosition(elem, $(elem).val().length);
}

function hideOverlayandFocusKw()
{
    elem = $("#keywords").focus().get(0);
    doSetCaretPosition(elem, $(elem).val().length);
}

function focusHide()
{
    if(focussed)
    {
        hideOverlay();
    } else {
        focussed = true;
    }
}

function focusHideKw()
{
    if(focussedkw)
    {
        hideOverlayKw();
    } else {
        focussedkw = true;
    }
}

function doSetCaretPosition (oField, iCaretPos) {

    // IE Support
    if (isIE() && document.selection) {
        // Set focus on the element
        oField.focus ();

        // Create empty selection range
        var oSel = document.selection.createRange ();

        // Move selection start and end to 0 position
        oSel.moveStart ('character', -oField.value.length);

        // Move selection start and end to desired position
        oSel.moveStart ('character', iCaretPos);
        oSel.moveEnd ('character', 0);
        oSel.select ();
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0') {
        oField.selectionStart = iCaretPos;
        oField.selectionEnd = iCaretPos;
        oField.focus ();
    }
    else {}
}

function pasteAndHideOverlay()
{
    hideOverlay();
    currentText = $("#url").val();
    //alert("Firing paste and hide.");
    //alert(currentText.substr(0, 14));
    if(currentText.substr(0, 14) == "http://http://")
    {
        $("#url").val(currentText.substr(7, currentText.length-7));
    }
    previousText = currentText;
}

function hideOverlay()
{
    $("#inputOverlay").fadeOut(300);
}

function showOverlay()
{
    if($("#url").val() == "http://")
    {
        $("#inputOverlay").fadeIn(300);
    }
}

function pasteAndHideOverlayKw()
{
    hideOverlayKw();
}

function hideOverlayKw()
{
    $("#keywordsOverlay").fadeOut(300);
}

function showOverlayKw()
{
    if($("#keywords").val() == "")
    {
        $("#keywordsOverlay").fadeIn(300);
    }
}

function setupHelp()
{
	$('.report-help-link a').click(doHelp);
}

function doHelp()
{
	$.ajax({
		  url: $(this).attr("href"),
		  context: this,
		  success: function(data){
			$(this).parent().after('<div class="report-help-popup"><div class="report-help-popup-inner">'+data+'<p class="closehelp"><a href="#"><span>'+strings['Close help']+'</span></a></p></div></div>');
			$(this).parent().siblings('.report-help-popup').find('.closehelp a').click(closeHelp);
			$(this).parent().siblings('.report-help-popup').slideDown(400, function(){ $.waypoints('refresh'); });
		  }
		});
	$(this).unbind();
	$(this).click(switchHelp);
	return false;
}

function closeHelp()
{
	$(this).parents('.report-help-popup').slideToggle(400, function(){ $.waypoints('refresh'); });
	return false;
}

function switchHelp()
{
	$(this).parent().siblings('.report-help-popup').slideToggle(400, function(){ $.waypoints('refresh'); });
	return false;
}

function changeReportTab()
{
    currenttab = $(this).attr('href');
    nohash = currenttab.replace("#", "");
    scrollToAnchor(nohash);
    $(this).blur();
    return false;
}

var selectedReportTab = "";

function checkDynamicImages()
{
    $('.image-dynamic-load').each(function() {
        idfield = $(this).attr("id").replace("p_", "");
        $(this).after('<img id="'+idfield+'" style="display: none;" src="'+$(this).attr('data-src')+'" alt="'+$(this).attr('data-alt')+'" width="'+$(this).attr('data-width')+'" height="'+$(this).attr('data-height')+'" class="'+$(this).attr('class')+'" />');
        $(this).siblings('#'+idfield).load(function(){
            $(this).show();
            $(this).removeClass('image-dynamic-load');
            $('#p_'+$(this).attr("id")).remove();
        });
        $(this).siblings('#'+idfield).error(function(){
            $(this).remove();
        });
    });

    if($('.image-dynamic-load').size() > 0)
    {
        setTimeout(checkDynamicImages, 6000);
    }
}

function setupReport()
{
    setTimeout(checkDynamicImages, 3000);



    $('.report-controls-print').click(function(){

            window.print();
            return false;
    });
    $('#report-navigation #Nav_summary').addClass('selectedoption');
    setupSummaries();


    $('#report-navigation li a').click(changeReportTab).each(function(){
        if($(this).attr("href") == selectedReportTab)
        {
            $(this).parent().addClass('selectedoption');
        }
    });
    $('.reportablink').click(changeReportTab);

    $('#recommendations ul li a').click(changeReportTab);


    $('#report .report-tab').each(function(){
        $(this).waypoint(function(direction) {
            if(direction == "down")
            {
                sel = $(this).attr('id');
            } else {
                sel = $(this).prev().attr('id')
            }
            $('#report-navigation li').removeClass('selectedoption');
            if($('#report-navigation #Nav_'+sel).length != 1)
            {
                sel = "summary";
            }
            $('#report-navigation #Nav_'+sel).addClass('selectedoption');
        }, { offset: '10%' });
    });

	makeTables();
	$('.report-tab ul ul').each(function()
	{
		$(this).before(' <span class="report-showsolution link-expand">'+strings['Show recommendations']+'</a>');
		$(this).parent().find('.report-showsolution').click(expandPoint);
		$(this).hide();
	});
	setupHelp();

    $('.report-controls-pdf').click(downloadPDF)
}

function downloadPDF()
{
    _gaq.push(['_trackEvent', 'Report', $(this).attr('id'), $('#report-header h1 a').html()]);
}

function scrollToAnchor(aid){
    var aTag = $("#"+aid);
    $('html,body').animate({scrollTop: aTag.offset().top -30},800, "swing");
}

function setupSummaries()
{
    $('.summary .summarycontribs').each(function()
    {
        $(this).hide().before(' <p><a href="#" class="contributorslink smalllink link-expand">'+strings['See contributing tests']+'</a></p>');
        $(this).parent().find('a.contributorslink').click(function(){
            if($(this).hasClass('link-expand'))
            {
                $(this).html(strings['Hide contributing tests']);
                $(this).removeClass('link-expand');
                $(this).addClass('link-collapse');
            } else {
                $(this).html(strings['See contributing tests']);
                $(this).removeClass('link-collapse');
                $(this).addClass('link-expand');
            }
           $(this).parent().parent().find('.summarycontribs').slideToggle(400, function(){ $.waypoints('refresh'); });
           $(this).blur();
           return false;
        });
    })
}

function expandDatatable()
{
	if($(this).hasClass('link-expand'))
	{
		$(this).siblings('.datatable').slideDown(400, function(){ $.waypoints('refresh'); });
		$(this).html(strings['Close recommendations']);
		$(this).removeClass('link-expand');
		$(this).addClass('link-collapse');
	} else {
		$(this).siblings('.datatable').slideUp(400, function(){ $.waypoints('refresh'); });
		$(this).html(strings['Show recommendations']);
		$(this).removeClass('link-collapse');
		$(this).addClass('link-expand');
	}
}

function expandPoint()
{
    if($(this).hasClass('link-expand'))
    {
        $(this).siblings('ul').slideDown(400, function(){ $.waypoints('refresh'); });
        $(this).html(strings['Close recommendations']);
        $(this).removeClass('link-expand');
        $(this).addClass('link-collapse');
    } else {
        $(this).siblings('ul').slideUp(400, function(){ $.waypoints('refresh'); });
        $(this).html(strings['Show recommendations']);
        $(this).removeClass('link-collapse');
        $(this).addClass('link-expand');
    }
}

function expandRecommendations()
{
	$(this).parent().children('li ul').parent().each(hideRecommendations);
	$(this).unbind('click').click(hideRecommendations).children('ul').slideDown(400, function(){ $.waypoints('refresh'); });
	$(this).animate({backgroundColor: '#EEEEEE'});
	$(this).children('.report-showsolution').html(strings['Hide solution']);
	return false;
}
function hideRecommendations()
{
	$(this).unbind('click').click(expandRecommendations).children('ul').slideUp(400, function(){ $.waypoints('refresh'); });
	$(this).animate({backgroundColor: '#FFFFFF'});
	$(this).children('.report-showsolution').html(strings['Show solution']);
}

function makeTables()
{
	$(".multiUrl").each(
		function(i)
		{
			conts = $(this).html();
			urls = conts.split(",");
			newcontent = "";
			for(x = 0; x < urls.length; x++)
			{
				if(x != 0)
				{
					newcontent = newcontent + "<br />";
				}
				newcontent = newcontent + "<a class=\"url\" href=\"" +urls[x]+ "\">"+shortenURL(urls[x])+"</a>";
			}
			$(this).html(newcontent);
		}
	);
	
	$(".data").each(function(i)
    {
        id = $(this).attr("id");
        parnt2 = id;
        var autoshow = $("#l"+id).hasClass('autoshow');

        tables[tables.length] = new Array(id, parnt2, makeTable(id, autoshow));
    });

}

function makeTable(tableId, autoShow)
{
	//Get the headers from the table
	hdrs = $("#"+tableId+" thead tr td").get();
	myColumnDefs = new Array();

	myDataSource = new YAHOO.util.DataSource(YAHOO.util.Dom.get(tableId));
	myDataSource.responseType = YAHOO.util.DataSource.TYPE_HTMLTABLE;
	myDataSource.responseSchema = new Object();
	myDataSource.responseSchema.fields = new Array();
	sortBy = "";
	len = hdrs.length;

	for(var i = 0; i < len; i++)
	{
		hdr = hdrs[i];
		cntnt = $(hdr).html();
		if(tableId != "testsTable")
		{
			myColumnDefs[i] = {
				key:cntnt,
				label:cntnt,
				sortable:true
			};
		}
		else {
			myColumnDefs[i] = {
				key:cntnt,
				label:cntnt,
				sortable:false
			};
		}
		myDataSource.responseSchema.fields[i] = {
			key:cntnt
		};
		if(i == hdrs.length -1)
		{
			sortBy = cntnt;
		}
	}

	if(tableId != "testsTable")
	{
		var pag = new YAHOO.widget.Paginator(
		{
			rowsPerPage: 10
		}
		);
		oConfigs = {
			paginator: pag
		};
	}
	else
	{
		oConfigs = {};
	}

	myDataTable = new YAHOO.widget.DataView("c"+tableId, myColumnDefs, myDataSource, oConfigs);

	myDataTable.subscribe('renderEvent', function () {


	});

    if($("#t"+tableId).parents('.solution').length == 0 && !autoShow)
    {
        titleText = $("#t"+tableId).hide().html();
        $("#l"+tableId).html("<a id=\"sh"+tableId+"\" class=\"link-expand\" href=\"#\" onclick=\"return switchTable('"+tableId+"', '"+titleText+"');\">"+titleText+"</a>");
        $("#c"+tableId).hide();
    }

	return myDataTable;
}

function switchTable(tableId)
{
    if($("#sh"+tableId).hasClass("link-expand"))
    {
        $("#sh"+tableId).removeClass("link-expand").addClass("link-collapse").blur();
    } else {
        $("#sh"+tableId).removeClass("link-collapse").addClass("link-expand").blur();
    }

    $("#c"+tableId).slideToggle("slow");
    return false;
}

function shortenURL(url)
{
    //return url;
    myregexp = new RegExp(/(https?):\/\/([-\w\.]+)+(:\d+)?(\/(([\w\/_\-\.]*)(\?\S+)?)?)?/gi);
    matches = myregexp.exec(url);
    prefix = ".../";
    thisurl = $("#reporturl").attr("href");

    if(matches != null)
    {

	if(thisurl == matches[1] + "://" +  matches[2])
	{
	    prefix = "/";
	} else {
	    prefix = matches[2] + "/";
	}

	if(matches[7] != null)
	{
	    paramstring = matches[7];
	} else {
	    paramstring = "";
	}
	if(matches[6] != null)
	{
	    pathstring = matches[6];
	} else {
	    pathstring = "";
	}
	newstr = prefix + pathstring + paramstring;
	if(newstr.length == 0)
	{
	    return url;
	}
	if(newstr.length <= 30)
	{
	    return newstr;// + "1";
	}

	if(pathstring.substr(pathstring.length-1, 1) == "/")
	{
	    //oldpathstring = pathstring;
	    pathstring = pathstring.substr(0, pathstring.length-1);
	    //$(".summary").html(oldpathstring + ", " +pathstring);
	}

	newparamstring = firstandlast(paramstring, "&");
	newpathstring = firstandlast(pathstring, "/");

	newstr = prefix + newpathstring +  newparamstring;
	if(newstr.length <= 40)
	{
	    return newstr;// + "2";
	}

	newparamstring = justlast(paramstring, "&");
	newpathstring = justlast(pathstring, "/");

	newstr = prefix + newpathstring +  newparamstring;
	return newstr;// + "3";

    }
}

function firstandlast(string, seperator)
{
    parts = string.split(seperator);

    if(parts.length >= 3)
    {
	return parts[0]+seperator+"..."+seperator+parts[parts.length-1];
    } else {
	return string;
    }
}

function justlast(string, seperator)
{
    parts = string.split(seperator);

    if(parts.length >= 3)
    {
	return "..."+seperator+parts[parts.length-1];
    } else {
	return string;
    }
}

function trimHttp()
{
    currentText = $(this).val();
    if(currentText.substr(0, 14) == "http://http://")
    {
		$(this).val(currentText.substr(7, currentText.length-7));
    }
    urlInputText[$(this).attr("id")] = currentText;
}

function isIE7()
{
    return ie7;
}
function isIE()
{
  return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
}

function clickRetest()
{
  $( ".retest" ).addClass( "retest--animate" );
}

function clickTest()
{
  $( ".testbox" ).addClass( "animate--fadeOutRight" );
}

$(document).ready(loader);