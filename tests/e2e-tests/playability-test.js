//can be cleaned up i think 
describe('e2e testing', () => {
  let xHolder = element(by.id('X-holder'))
  let oHolder = element(by.id('O-holder'))
  let tiesHolder = element(by.id('ties-holder'))
  let winner = element(by.id('winner'))

  beforeEach(function() {
    browser.ignoreSynchronization = true
    browser.get('https://rampage1213.github.io/TicTacToeJS/')
  })

  it('should play a whole game where X wins / verifies win / clears board', () => {
    element(by.css('.row1 > td:nth-child(1) > button')).click()
    element(by.css('.row2 > td:nth-child(1) > button')).click()
    element(by.css('.row1 > td:nth-child(2) > button')).click()
    element(by.css('.row1 > td:nth-child(3) > button')).click()
    element(by.css('.row2 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(3) > button')).click()
    browser.sleep(500)
    expect(winner.getText()).to.eventually.equal('X Wins!')
    expect(xHolder.getText()).to.eventually.equal('1')
    element(by.buttonText('Clear Board')).click()
    browser.sleep(500)
  })

  it('should play a whole game where O wins / verifies win / clears board', () => {
    element(by.css('.row1 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(3) > button')).click()
    element(by.css('.row2 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(1) > button')).click()
    element(by.css('.row2 > td:nth-child(3) > button')).click()
    element(by.css('.row2 > td:nth-child(1) > button')).click()
    element(by.css('.row1 > td:nth-child(3) > button')).click()
    browser.sleep(500)
    expect(winner.getText()).to.eventually.equal('O Wins!')
    expect(oHolder.getText()).to.eventually.equal('1')
    element(by.buttonText('Clear Board')).click()
    browser.sleep(500)
  })

  it('should play a game that ties / verifies tie / clears scores / verifies scores are cleared', () => {
    element(by.css('.row1 > td:nth-child(1) > button')).click()
    element(by.css('.row2 > td:nth-child(1) > button')).click()
    element(by.css('.row3 > td:nth-child(1) > button')).click()
    element(by.css('.row1 > td:nth-child(3) > button')).click()
    element(by.css('.row2 > td:nth-child(3) > button')).click()
    element(by.css('.row3 > td:nth-child(3) > button')).click()
    element(by.css('.row1 > td:nth-child(2) > button')).click()
    element(by.css('.row2 > td:nth-child(2) > button')).click()
    element(by.css('.row3 > td:nth-child(2) > button')).click()
    browser.sleep(500)
    expect(winner.getText()).to.eventually.equal('Tie!')
    expect(tiesHolder.getText()).to.eventually.equal('1')
    element(by.buttonText('Clear Scores')).click()
    browser.sleep(500)
    expect(tiesHolder.getText()).to.eventually.equal('0')
  })
})