
# Banking App

## Installation

```bash
  npm install 
```
## Start

```bash
  npm start 
```
    
## Login Credentials
- sahas - 1111 
- yesh - 4444
- piyush - 3333
- gaurav - 2222

## issue
- open project folder in vscode
- open AppReducer.js 
- uncomment that 3 lines
- now log in with above Credentials and try to transfer money.

you will see error that realted to undefined. why this?
- i had created global state for takerindex 
so i can take that index and use it anywhere.
in card.js you will see i am setting takerindex but its not setting.
and i am getting error. because takerindex is still undefined. 
i actually dont know how to solve this.

sometimes it get set and apps work fine but 
most of the times it giver error.