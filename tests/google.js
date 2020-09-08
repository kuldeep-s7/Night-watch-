module.exports = {
       '@tags' : ['google'],
        'Google advanced search : Elon Musk'(browser){
        const mainQuery ='Elon Musk';
        
        const page = browser.page.googleAdvancedSearch();
        
        page
        .navigate()
        .setQuery(mainQuery)
        .selectFilter('@languageDropdown','lang_it')
        .selectFilter('@lastUpdateDropdown','m')
        .search();

        browser
        .assert.urlContains('as_q=Elon+Musk','Params: Query is Elon Musk')
        .assert.urlContains('lr=lang_it','Params: Language is Italian')
        .assert.urlContains('as_qdr=m','Params: Time period is past month');

        const resultsPageLastUpdateSelector = '[aria-label = "Past month"]';
        const resulsPageQuerySelector = `#searchform input[name = "q"][value= "${mainQuery}"]`;
        const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
       
        
        browser.assert.visible(resulsPageQuerySelector, 'UI : Elon Musk is set in the query input');
        browser.assert.containsText(resultsPageLastUpdateSelector,"Past month","UI : Last update is set to last month");

        browser.assert.containsText(resultsPageLanguageSelector,'Search Italian pages','UI : Language is set to italian');
       
        browser.saveScreenshot('tests_output/google.png')
    }
   
}