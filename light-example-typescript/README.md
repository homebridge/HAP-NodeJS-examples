# light-example-typescript

Accessory exposing a `Lightbulb` service with `On` and `Brightness` characteristics.  
The default pairing code is set to `678-90-876` and runs on port `47128`.

## Requirements

- [Node.js](https://nodejs.org) `v22.12.0` or later, `v24` or `v26`
- This example uses [HAP-NodeJS](https://github.com/homebridge/hap-nodejs) `v2.3.0` or later (the `@homebridge/hap-nodejs` package)

## Running

Run the following command to install all necessary dependencies:  
```
npm install
```

As this example is written in TypeScript it must be converted to JavaScript before it can be executed.  
This can be done using the TypeScript compiler (`tsc`) included in this example:  
```
npm run build
```

After that step the compiled JavaScript files are located in the `./lib` directory.  
Now you can execute the following to run the application:
```
npm start
```

If you don't want to always run `npm run build` to recompile your TypeScript files, you can also 
run the TypeScript file directly with [tsx](https://github.com/privatenumber/tsx):
```
npm run dev
```

Now you can navigate into the Home App and add the accessory to your Home with the provided setup code.

Hooray, you managed to add your first custom HomeKit accessory!

## Building upon the example

To get you started with HAP-NodeJS development, try to modify the provided example.
  
As defined by the HomeKit Accessory Protocol (HAP) specification, the `Lightbulb` service has three
additional optional characteristics: `Hue` and `Saturation`, to provide coloring functionality, or 
`ColorTemperature`, to change the temperature of a white bulb.

Try adding one of those characteristics and play around with it in the Home App.  
Additionally, you can check out different types of services and their set of characteristics and 
explore how they react in the Home App. The [HAP-NodeJS documentation](https://developers.homebridge.io/hap-nodejs/) 
lists every service and characteristic.  
Don't forget to run `npm run build`, if you do not run the TypeScript code directly as described above.
