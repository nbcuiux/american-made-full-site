/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
 /* eslint-env browser */
 (function() {
 	'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
      	/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      	)
      );

  if ('serviceWorker' in navigator &&
  	(window.location.protocol === 'https:' || isLocalhost)) {
  	navigator.serviceWorker.register('service-worker.js')
  .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
          	switch (installingWorker.state) {
          		case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

                case 'redundant':
                throw new Error('The installing ' +
                	'service worker became redundant.');

                default:
                // Ignore
              }
            };
          }
        };
      }).catch(function(e) {
       console.error('Error during service worker registration:', e);
     });
    }

    $(function () { 

      var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave'
        }
      });

      var slides = document.querySelectorAll("section.panel--scrolling");
      var headlines = document.querySelectorAll("section.panel--scrolling  h1");

      for (var i = 0; i < slides.length; i++) {
        var selector = 'a[href$=' + slides[i].getAttribute('id') + ']';
          new ScrollMagic.Scene({
            triggerElement: slides[i],
          })
          .setPin(slides[i])
          .addIndicators() 
          .addTo(controller);
      }

      // var controller1 = new ScrollMagic.Controller({container: "#story"});

      // var content = document.querySelectorAll("#story .content");

      // for (var i = 0; i < content.length; i++) {
      //   new ScrollMagic.Scene({triggerElement: content[i]})
      //   .addTo(controller1)
      //   .addIndicators() 
      //   .setPin(content[i]);
      // }

      $('.section--background-video').each(function() {
        $(this).get(0).play();
      });

    // $(document).on("click", "a[href^='#']", function (e) {
    //   $('.page').addClass('page--transitioning');
    //   var id = $(this).attr("href");
    //   setTimeout(function() {
    //     window.location.hash = id;
    //     controller.scrollTo(id);
    //   }, 300);

    //   setTimeout(function() {
    //     $('.page').removeClass('page--transitioning');
    //   }, 1200);
    //   e.preventDefault();
    // });

    menuItems.click(function(e){
      var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      controller.scrollTo(href);
      $('.page').addClass('page--transitioning');
      setTimeout(function() {
        $('.page').removeClass('page--transitioning');
      }, 1200);
      window.location.hash = href;
      // $('html, body').stop().animate({ 
      //     scrollTop: offsetTop
      // }, 0);
      e.preventDefault();
    });

  });
  })();



  var lastId;
  topMenu = $("#mainNav");
  topMenuHeight = topMenu.outerHeight()+1;
 // All list items
 menuItems = topMenu.find("a");
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
   if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation


// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
     lastId = id;
       // Set/remove active class
       menuItems
       .parent().removeClass("active")
       .end().filter("[href='#"+id+"']").parent().addClass("active");
     }                   
   });
