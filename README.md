# @digital-wafa/logger
![npm version](https://img.shields.io/npm/v/@digital-wafa/logger)
![build](https://img.shields.io/travis/com/digital-wafa/logger/master)
![codecov](https://img.shields.io/codecov/c/github/digital-wafa/logger/master)
![types](https://img.shields.io/npm/types/typescript)

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
