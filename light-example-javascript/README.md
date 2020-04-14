# light-example-javascript

Accessory exposing a `Lightbulb` service with `On` and `Brightness` characteristics.  
The default pairing code is set to `678-90-876` and runs on port `47129`.

## Running example

Run the following command to install all necessary dependencies:  
```
npm install
```

When the command is finished you can start the application by executing:    
```
node src/light.js
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
