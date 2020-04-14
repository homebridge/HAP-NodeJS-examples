# light-example-typescript

Accessory exposing a `Lightbulb` service with `On` and `Brightness` characteristics.  
The default pairing code is set to `678-90-876` and runs on port `47128`.

## Running

Run the following command to install all necessary dependencies:  
```
npm install
```

As this example is written in Typescript it must be converted to Javascript before it can be executed.  
This can be done using the Typescript compiler (`tsc`) included in this example.

To compile the project you can run a scrip defined in the `package.json` like the following:  
```
npm run build
```

After that step the compiled Javascript files are located in the `./lib` directory.  
Now you can execute the following to run the application:
```
node lib/light.js
```

If you don't want to always run `npm run build` to recompile your Typescript files, you can also 
compile Typescript on the fly when executing like the following:
```
ts-node src/light.ts
```

Now you can navigate into the Home App and add the accessory to your Home with the provided setup code.

Horray you managed to add your first custom HomeKit accessory!

## Building upon the example

To get you started with HAP-NodeJS development, try to modify the provided example.
  
As defined by the HomeKit Accessory Protocol (HAP) specification, the `Lightbulb` service has three
additional optional characteristics: `Hue` and `Saturation`, to provide coloring functionality, or 
`ColorTemperature`, to change the temperature of a white bulb.

Try adding one of those characteristics and play around with it in the Home App.  
Additionally, you can check out different types of services and their set of characteristics and 
explore how they react in the Home App.  
Don't forget to run `npm run build`, if you do not run the Typescript code directly as described above.
