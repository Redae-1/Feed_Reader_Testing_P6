/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    "use strict";
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        

         it('all have URLs', function() {
            for(var z = 0; z < allFeeds.length; z++) {
                expect(allFeeds[z].url).toBeDefined();
                expect(allFeeds[z].url).not.toBe('');
            }
         });

       

         it('all have names', function() {
            for(var z = 0; z < allFeeds.length; z++) {
                expect(allFeeds[z].name).toBeDefined();
                expect(allFeeds[z].name).not.toBe('');
            }
         });
    });

   

    describe('The menu', function() {
        var icon;

        beforeEach(function() {
            icon = $('.menu-icon-link');
        });

        it('is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        it('appears when clicked and disappears when clicked again', function() {
            if ($("body").hasClass("menu-hidden")) {
                icon.click();

                expect($("body").hasClass("menu-hidden")).toBe(false);
            } 

            if (!$("body").hasClass("menu-hidden")) {
                icon.click();

                expect($("body").hasClass("menu-hidden")).toBe(true);
            }
        });
    });

   

    describe('Initial Entries', function() {
        var entries;

        beforeEach(function(done) {
            loadFeed(0, (function() {
                entries = $(".feed").html();
                done();
            }));

            
        });

        it('are present', function() {
            expect(entries).not.toBe(null);
        });
    });

   

    describe('New Feed Selection', function() {
        var entries;

        beforeEach(function(done) {
            loadFeed(1, (function() {
                entries = $(".feed").html();
                

            }));

            done();
        });

        it('content changes when a new feed is loaded', function(done) {
             expect($(".feed").html()).not.toEqual(entries);
            loadFeed(2, done);
        });
    });
}());
