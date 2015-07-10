# Esprima Test Setup

This is a small demo repo w/ the test harness I think we could add to esprima

### What does it do

#### Karma Runner   
  Karma has phantomJs for node environments and chrome/firefox for web environments 

#### Mocha / Chai / Sinon test framework   
  Mocha uses a bdd setup w/ chai assertions and sinon stubs  
  Mocha has a pretty test reporter  

#### Karma html2js preprocessor  
  The preprocessor can process json files or any other format and add them as strings to `window.__html__` check test  


### What are the next steps

+ Add karma config to esprima
+ Update config to read fixtures
+ update test scripts  to read from the in memory fixtures
