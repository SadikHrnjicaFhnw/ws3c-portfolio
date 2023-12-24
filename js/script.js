/*******************************************************************************************************************************/
/*****Globals*******************************************************************************************************************/
/*******************************************************************************************************************************/
var i;
var mobileNavigation;
var mobileNavigationOpen;
var mobileNavigationClose;
var mobileNavigationStatus;
var hauptnavigation;



/*******************************************************************************************************************************/
/*****Verbindungen**************************************************************************************************************/
/*******************************************************************************************************************************/
mobileNavigation = document.querySelector('.mobile-navigation');
mobileNavigationOpen = document.querySelector('.mobile-navigation span.open');
mobileNavigationClose = document.querySelector('.mobile-navigation span.close');
hauptnavigation = document.querySelector('nav#hauptnavigation ul');



/*******************************************************************************************************************************/
/*****Grundeinstellungen********************************************************************************************************/
/*******************************************************************************************************************************/
mobileNavigationStatus = false;



/******************************************************************************************************************************/
/*****Events*******************************************************************************************************************/
/******************************************************************************************************************************/
mobileNavigationOpen.addEventListener('click', toggleNavigation);
mobileNavigationClose.addEventListener('click', toggleNavigation);



/******************************************************************************************************************************/
/*****Funktionen***************************************************************************************************************/
/******************************************************************************************************************************/
function toggleNavigation() {

    mobileNavigation.removeEventListener('click', toggleNavigation);

    if(mobileNavigationStatus == false) {
        $(hauptnavigation).slideDown(400);
        hauptnavigation.style.display = "flex";
        mobileNavigationStatus = true;
        mobileNavigationOpen.style.display = "none";
        mobileNavigationClose.style.display = "block";
    }
    else {
        $(hauptnavigation).slideUp(400);
        mobileNavigationStatus = false;
        mobileNavigationOpen.style.display = "block";
        mobileNavigationClose.style.display = "none";
    }

    var timer = setTimeout(function(){
        mobileNavigation.addEventListener('click', toggleNavigation);
    }, 400);

}





/******************************************************************************************************************************/
/*****Spezielle Funktionen*****************************************************************************************************/
/******************************************************************************************************************************/

$(window).load(function() {


});


$(window).scroll(function() {


});


$(window).resize(function() {


});