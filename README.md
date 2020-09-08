# @digital-wafa/logger

it's a sample library to log to the console only when your programs are running in dev or test environment


***

## Installation
```
npm i @digital-wafa/logger
```


## Usage
```javascript
import Logger from '@digital-wafa/logger'

Logger.log(Logger.Level.INFO, "an info log")
Logger.log(Logger.Level.WARN, "a warning log")
Logger.log(Logger.Level.ERROR, "an error log")
Logger.log(Logger.Level.LOG, "a normal log")

```
