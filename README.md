# Test Automation Data - Front

## Purpose
This is an example project of how we can isolate test data sources in a module for test automation, so it can be reused by different test automation projects.
 
## Use 
First of all, import the following dependencies in your package.json:

   ```
    "tadf": "1.0.0" 
   ```

Import testData and start using the different data inside:

   ```
   import {testData} from "tadf"

   class testDataUseExample {
     printValue() {
    console.log(testData.invalidUser.email)
     }
    }

   ```

## Example Project  
Feel free to download the following example project, to understand how to set it up: https://github.com/therussiankid92/taif-example-cucumber-wdio

