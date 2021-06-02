describe('Baltic EPA Test', function()
{
    it('Verify Title of the page', function()
    {
        cy.visit('http://localhost:3000/player.php')
        cy.title().should('eq','Media player')
    })
    it('Create a playlist', () => {
        // Create a playlist 
        // Add song to playlist 
        // Select playlist and check the contents of playlist
        cy.get('#create-playlist').type("Auto test")
        cy.get('#save-new-playlist').click()
        cy.get('body > div > div.main > div.table-container > form > div > select').select('22')
        cy.get('#playlist-selector').select('7')
        cy.get('#playlist-selector-submit').click()
        cy.contains("Alex Playlist")
    })
})