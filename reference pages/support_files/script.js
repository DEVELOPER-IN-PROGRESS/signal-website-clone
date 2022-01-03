// CHANGE the beta version for 'desktopBetaVersion' on each beta release
var desktopBetaVersion = '5.27.0-beta.3'

// Signal Desktop Beta link redirect
// for beta page: https://support.signal.org/hc/articles/360007318471-Signal-Beta
var desktopBetaWindowsLink = 'https://updates.signal.org/desktop/signal-desktop-beta-win-' + desktopBetaVersion + '.exe'
var desktopBetaMacLink = 'https://updates.signal.org/desktop/signal-desktop-beta-mac-universal-' + desktopBetaVersion + '.dmg' 
if (window.location.search === "?download-beta-mac") {
  window.location.assign(desktopBetaMacLink);
}
else if (window.location.search === "?download-beta-windows") {
  window.location.assign(desktopBetaWindowsLink);
}


// Same domain redirects for very old support pages
// These old pages may have links on old GH issues, social, or mailing lists
var redirectList = {
    '213190487' : '115005547088',        //Android delay in receiving notifications
    '360007059152' : '360007320551',     //linked devices internal page link
    '360004241771' : '360007320551',     //linked desktop
    '360004191492' : '360007059212',     //updated general
    '360004235751' : '360007059212',     //updated android
    '360004235031' : '360007059212',     //updated ios
    '360004066371' : '360007059412',     //gdpr
    '360003929372' : '360007317471',     //view all media
    '360003543351' : '360007059752',     //conversation history
    '360002304351' : '360007059572',     //screen lock ios
    '360001890291' : '360007059752',     //restore messages
    '360001842431' : '360007059792',     //registration lock
    '115001879131' : '360007059812',     //read receipts ios
    '115001879111' : '360007059812',     //read receipts android
    '115001558972' : '360007318111',     //travel
    '115001434171' : '360007059952',     //profile android
    '115001110511' : '360007059952',     //profile ios
    '115000269532' : '360007318471',     //join beta
    '115005925767' : '360007318591',     //debug log
    '115005922007' : '360007060072',     //block ios
    '115005909988' : '360008216551',     //get started ios
    '115005909948' : '360007318691',     //register iphone
    '115005547088' : '360007318711',     //notifications android
    '115005546448' : '360007318751',     //register troubleshooting android
    '115005336867' : '360007060212',     //message tutorial android
    '115005335227' : '360007318691',     //register android
    '115005333267' : '360007318911',     //private insecure tutorial android
    '115005329547' : '360008216551',     //get started android
    '115004925487' : '360007319011',     //contacts edit ios
    '115005104688' : '360007319011',     //contacts edit android
    '115002866567' : '360007060492',     //call tutorial android
    '115002977308' : '360007060492',     //call tutorial ios
    '229676507' : '360007318591',        //debug log ios
    '219377827' : '360007060592',        //invite
    '218912447' : '360007318911',        //private insecure tutorial
    '218906507' : '360007318911',        //find out if contact is on signal
    '217524107' : '360007320391',        //are notifications private
    '216786548' : '360007319251',        //dual sim
    '216785538' : '360007060632',        //safety number
    '217169117' : '360007319311',        //where are groups
    '216567598' : '360007319331',        //group chat tutorial
    '216770567' : '360007318591',        //crash android
    '216479567' : '360007060672',        //call troubleshooting
    '215563627' : '360007060712',        //group leave android
    '214870548' : '360007060712',        //group leave ios
    '214622088' : '360007060592',        //invite
    '214410738' : '360007321171',        //sms ios
    '215077857' : '360007059212',        //what is desktop
    '215073067' : '360007318691',        //what phone number
    '215051457' : '360007319731',        //use at work
    '214160088' : '360007061192',        //unregister delete account
    '214583227' : '360007319791',        //latest news blog
    '214457067' : '360008216551',        //download instructions
    '214206877' : '360007319831',        //cost
    '212940158' : '360007319831',        //donate
    '115001110451' : '360007459591',     //profile
    '214507138' : '360008216551',        //install desktop
    '115000267971' : '360007060632',     //safety number
    '215075157' : '360007060212',        //message tutorial desktop
    '213134287' : '360007319831',        //help
    '212477068' : '360007061352',        //email
    '212476148' : '360007060212',        //message tutorial ios
    '360003906531' : '360007059212',     //update desktop
    '115005596847' : '360007318751',     //verification sms
    '213133427' : '360007320051',        //other os
    '360003220171' : '360007320091',     //hide menu bar
    '115005045728' : '360007061452',     //security send number to contacts
    '213853118' : '360007319331',        //group chat tutorial ios
    '360002296932' : '360007320191',     //old desktop shortcuts
    '214785937' : '360007320211',        //mms issues
    '115002574192' : '360008216551',     //old desktop revert
    '213802968' : '360007061492',        //does contact need signal
    '213697218' : '360007320291',        //tcp udp ports
    '115002571371' : '360007320431',     //new desktop import
    '212477768' : '360007320391',        //security is it private
    '115002502511' : '360007320431',     //new desktop migrate
    '213913258' : '360009303072',        //offline
    '214461697' : '360007320491',        //delete messages android
    '213134097' : '360007320391',        //security snooping
    '213240927' : '360007320551',        //multiple devices
    '213134107' : '360007060632',        //verify contact
    '218514998' : '360007319011',        //update contact desktop
    '212742268' : '360007320751',        //delivery read status
    '213134237' : '360007320771',        //disappearing messages
    '360002646011' : '360007320791',     //security report vulnerability
    '212476798' : '360007062012',        //new number tutorial
    '218551897' : '360007060212',        //desktop feature tutorial
    '213913358' : '360007320551',        //multiple devices
    '212535538' : '360007320751',        //delivery read status
    '212535548' : '360007321171',        //insecure sms how to
    '213190487' : '360007318711',        //notifications delay
    '212476188' : '360007320491',        //delete messages ios
    '213190527' : '360007320951',        //change color
    '212535818' : '360007062012',        //new phone tutorial
    '213133077' : '360007062172',        //permissions ios
    '216459787' : '360007321111',        //unlink desktop
    '212535828' : '360007059752',        //import export android
    '213190627' : '360007061192',        //unregister delete account android
    '212535838' : '360007318591',        //debug log android
    '214515938' : '360007321171',        //mms desktop
    '212535858' : '360007062172',        //permissions android
    '215188737' : '360007318591',        //debug log desktop
    '212535868' : '360007059572',        //screen lock android
    '212535898' : '360007060072',        //block android
    '214582088' : '360007321231',        //archive
    '212535908' : '360007062452',        //lost stolen phone
    '213191027' : '360007059572',        //screenshot
    '213980898' : '360007318691',        //google voice number 
    '360016466812' : '360007320951',	   //colors redesign page archived
    '360046317752' : '360007319331',     //new vs legacy group page archived
    '360055710212' : '360007320951'      //wallpaper archived to merge with colors
}

//Redirect to valid page (from list above), to the beta page 
//or to en-us if locale specific page is not available
var redirectBoolean = false;
$.get(window.location.href).done(function() {
  // console.info('This page works successfully.')
}).fail(function() {
  //check if page is in the list of redirects listed above
  for (var redirectPage in redirectList){
    if (window.location.href.indexOf(redirectPage) !== -1){
      window.location.replace('https://support.signal.org/hc/articles/' + redirectList[redirectPage]);
      redirectBoolean = true;
      break;
    }
  }
  //additional redirects
  if (!redirectBoolean){
    //support redirect of https://support.signal.org/beta to the real beta support page 
    //this is displayed in Desktop's yellow banner for troubleshooting beta updates
    if (window.location.pathname.split('/')[1] === 'beta'){
      window.location.replace('https://support.signal.org/hc/articles/360007318471')
    }
    //if the locale specific page is not available, then redirect to english
    locale = window.location.pathname.split('/')[2]
    if (locale){ 
      window.location.replace(window.location.href.replace(locale, 'en-us'));
      redirectBoolean = true; //added when locale variable is not a locale i.e articles, sections, categories, etc
    }
  }
})


//populate dropdown for platform url on the contact us page
$(document).ready(function () {
  // console.info('location: ', location)
  
  // avoid undefined errors for split
  if (location.search){
    var ticketForm = location.search.split('?')[1];
    //now split up the params in ticketForm
    var params = ticketForm.split('&');
    // console.info( {location, ticketForm, params} )
    
    for (var i=0; i < params.length; i++){
      // console.log(params[i].split('=')[0], params[i].split('=')[1]);
      if(params[i] == 'desktop') {
        platform = 'platform_desktop'
        subject = 'Signal Desktop Support Request'
        $('#request_subject').val(subject);
        $('#request_custom_fields_360003516391').val(platform).closest('.nesty-input').text(platform);
    	}
      if(params[i] == 'chat_refreshed') {
        category = 'filter_chat_refreshed'
        $('#request_category').val(category);
        $('#request_custom_fields_360003492412').val(category).closest('.nesty-input').text(platform);
        // console.info(category)
        subject = 'Signal Desktop Support Request - Chat Refreshed'
        $('#request_subject').val(subject);
      }
  	}
	}
  
  //Set the subject for consistency and a better end user experience
  //otherwise the first two lines in the description become the subject
  $('.form-field.string.optional.request_subject').hide(); // Hide subject 
	$('.form-field.string.required.request_subject').hide(); // Hide subject 
  $('#request_custom_fields_360003492412').change(function () {
    var category = $(this).val();
    if(category == 'filter_registration'){
      $('#request_subject').val('Signal Support Response - Registration');
    }
    else if(category == 'install_help'){
      $('#request_subject').val('Signal Support Response - Install or Update Help');
    }
    else if(category == 'filter_account_transfer'){
      $('#request_subject').val('Signal Support Response - Account Transfer');
    }
    else if(category == 'bug_report'){
      $('#request_subject').val('Signal Support Response - Potential Issue');
    }
    else if(category == 'feature'){
      $('#request_subject').val('Signal Support Response - Features');
    }
    else if(category == 'question'){
      $('#request_subject').val('Signal Support Response - Question');
    }
    else if(category == 'feedback'){
      $('#request_subject').val('Signal Support Response - Feedback');
    }
    else if(category == 'filter_pin'){
      $('#request_subject').val('Signal Support Response - PIN Feature');
    }
    else if(category == 'filter_chat_refreshed'){
      $('#request_subject').val('Signal Support Response - Chat Refreshed');
    }
    else if(category == 'filter_payments'){
      $('#request_subject').val('Signal Support Response - Payments');
    }
    else if(category == 'filter_subscriber'){
      $('#request_subject').val('Signal Support Response - Subscription (Sustainers & Signal Boost)');
    }
    else if(category == 'filter_other'){
      $('#request_subject').val('Signal Support Response - Other');
    }
    else{
      $('#request_subject').val('Signal Support Response - General');
    }
    // console.info(category)
    // $('#request_description').val(
    //    $('#request_system_fields_28505618').val() + $('#request_custom_fields_1260828512430').val()
    // ); //test ADDING debug log to description
    //console.log($('#request_description').val())
  });
});


document.addEventListener('DOMContentLoaded', function() {
  function closest (element, selector) {
    if (Element.prototype.closest) {
      return element.closest(selector);
    }
    do {
      if (Element.prototype.matches && element.matches(selector)
        || Element.prototype.msMatchesSelector && element.msMatchesSelector(selector)
        || Element.prototype.webkitMatchesSelector && element.webkitMatchesSelector(selector)) {
        return element;
      }
      element = element.parentElement || element.parentNode;
    } while (element !== null && element.nodeType === 1);
    return null;
  }
    

  // social share popups
  Array.prototype.forEach.call(document.querySelectorAll('.share a'), function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(this.href, '', 'height = 500, width = 500');
    });
  });

  // In some cases we should preserve focus after page reload
  function saveFocus() {
    var activeElementId = document.activeElement.getAttribute('id');
    sessionStorage.setItem('returnFocusTo', '#' + activeElementId);
  }
  var returnFocusTo = sessionStorage.getItem('returnFocusTo');
  if (returnFocusTo) {
    sessionStorage.removeItem('returnFocusTo');
    var returnFocusToEl = document.querySelector(returnFocusTo);
    returnFocusToEl && returnFocusToEl.focus && returnFocusToEl.focus();
  }

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var commentContainerTextarea = document.querySelector('.comment-container textarea'),
    commentContainerFormControls = document.querySelector('.comment-form-controls, .comment-ccs');

  if (commentContainerTextarea) {
    commentContainerTextarea.addEventListener('focus', function focusCommentContainerTextarea() {
      commentContainerFormControls.style.display = 'block';
      commentContainerTextarea.removeEventListener('focus', focusCommentContainerTextarea);
    });

    if (commentContainerTextarea.value !== '') {
      commentContainerFormControls.style.display = 'block';
    }
  }

  // Expand Request comment form when Add to conversation is clicked
  var showRequestCommentContainerTrigger = document.querySelector('.request-container .comment-container .comment-show-container'),
    requestCommentFields = document.querySelectorAll('.request-container .comment-container .comment-fields'),
    requestCommentSubmit = document.querySelector('.request-container .comment-container .request-submit-comment');

  if (showRequestCommentContainerTrigger) {
    showRequestCommentContainerTrigger.addEventListener('click', function() {
      showRequestCommentContainerTrigger.style.display = 'none';
      Array.prototype.forEach.call(requestCommentFields, function(e) { e.style.display = 'block'; });
      requestCommentSubmit.style.display = 'inline-block';

      if (commentContainerTextarea) {
        commentContainerTextarea.focus();
      }
    });
  }

  // Mark as solved button
  var requestMarkAsSolvedButton = document.querySelector('.request-container .mark-as-solved:not([data-disabled])'),
    requestMarkAsSolvedCheckbox = document.querySelector('.request-container .comment-container input[type=checkbox]'),
    requestCommentSubmitButton = document.querySelector('.request-container .comment-container input[type=submit]');

  if (requestMarkAsSolvedButton) {
    requestMarkAsSolvedButton.addEventListener('click', function () {
      requestMarkAsSolvedCheckbox.setAttribute('checked', true);
      requestCommentSubmitButton.disabled = true;
      this.setAttribute('data-disabled', true);
      // Element.closest is not supported in IE11
      closest(this, 'form').submit();
    });
  }

  // Change Mark as solved text according to whether comment is filled
  var requestCommentTextarea = document.querySelector('.request-container .comment-container textarea');

  if (requestCommentTextarea) {
    requestCommentTextarea.addEventListener('input', function() {
      if (requestCommentTextarea.value === '') {
        if (requestMarkAsSolvedButton) {
          requestMarkAsSolvedButton.innerText = requestMarkAsSolvedButton.getAttribute('data-solve-translation');
        }
        requestCommentSubmitButton.disabled = true;
      } else {
        if (requestMarkAsSolvedButton) {
          requestMarkAsSolvedButton.innerText = requestMarkAsSolvedButton.getAttribute('data-solve-and-submit-translation');
        }
        requestCommentSubmitButton.disabled = false;
      }
    });
  }

  // Disable submit button if textarea is empty
  if (requestCommentTextarea && requestCommentTextarea.value === '') {
    requestCommentSubmitButton.disabled = true;
  }

  // Submit requests filter form on status or organization change in the request list page
  Array.prototype.forEach.call(document.querySelectorAll('#request-status-select, #request-organization-select'), function(el) {
    el.addEventListener('change', function(e) {
      e.stopPropagation();
      saveFocus();
      closest(this, 'form').submit();
    });
  });

  // Submit requests filter form on search in the request list page
  var quickSearch = document.querySelector('#quick-search');
  quickSearch && quickSearch.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) { // Enter key
      e.stopPropagation();
      saveFocus();
      closest(this, 'form').submit();
    }
  });

  function toggleNavigation(toggleElement) {
    var menu = document.getElementById('user-nav');
    var isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !isExpanded);
    toggleElement.setAttribute('aria-expanded', !isExpanded);
  }

  var burgerMenu = document.querySelector('.header .icon-menu');
  var userMenu = document.querySelector('#user-nav');

  burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleNavigation(this);
  });
  
  // This was needed on iOS safari in the past before updating the copenhagen template
  // burgerMenu.addEventListener('touch', function(e) {
  //   e.stopPropagation();
  //   toggleNavigation(this);
  // });

  burgerMenu.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) { // Enter key
      e.stopPropagation();
      toggleNavigation(this);
    }
  });

  userMenu.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) { // Escape key
      e.stopPropagation();
      this.setAttribute('aria-expanded', false);
      burgerMenu.setAttribute('aria-expanded', false);
    }
  });

  if (userMenu.children.length === 0) {
    burgerMenu.style.display = 'none';
  }

  // Submit organization form in the request page
  var requestOrganisationSelect = document.querySelector('#request-organization select');

  if (requestOrganisationSelect) {
    requestOrganisationSelect.addEventListener('change', function() {
      closest(this, 'form').submit();
    });
  }

  // Toggles expanded aria to collapsible elements
  Array.prototype.forEach.call(document.querySelectorAll('.collapsible-nav, .collapsible-sidebar'), function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // If a section has more than 6 subsections, we collapse the list, and show a trigger to display them all
  const seeAllTrigger = document.querySelector('#see-all-sections-trigger');
  const subsectionsList = document.querySelector('.section-list');

  if (subsectionsList && subsectionsList.children.length > 6) {
    seeAllTrigger.setAttribute('aria-hidden', false);

    seeAllTrigger.addEventListener('click', function(e) {
      subsectionsList.classList.remove('section-list--collapsed');
      seeAllTrigger.parentNode.removeChild(seeAllTrigger);
    });
  }
});