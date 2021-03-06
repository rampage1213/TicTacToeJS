import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import jsdom from 'jsdom'

chai.use(chaiAsPromised)
global.expect = chai.expect

const doc = jsdom.jsdom('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Tic Tac Toe</title><link rel="stylesheet" href="styles.css"></head><body><h1>Tic Tac Toe</h1><h2 id="winner"></h2><table><tbody><tr class="row1"><td class="one"><button type="button"></button></td><td class="two"><button type="button"></button></td><td><button type="button"></button></td></tr><tr class="row2"><td class="one"><button type="button"></button></td><td class="two"><button type="button"></button></td><td><button type="button"></button></td></tr><tr class="row3"><td class="one"><button type="button"></button></td><td class="two"><button type="button"></button></td><td><button type="button"></button></td></tr></tbody></table><h2 id="whos-turn">X\'s turn</h2><button type="button" id="clearBoard">Clear Board</button><button type="button" id="clearScores">Clear Scores</button><ul><li>X : <span id="X-holder">0</span></li><li>O : <span id="O-holder">0</span></li><li>Tie : <span id="ties-holder">0</span></li></ul><script type="text/javascript" src="bundle.js"></script></body></html>')
global.window = doc.defaultView
global.document = doc
