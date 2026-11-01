import type { CharacteristicValue } from "@homebridge/hap-nodejs";

import { Accessory, Categories, Characteristic, Service, uuid } from "@homebridge/hap-nodejs";

// optionally set a different storage location with code below. HAPStorage needs to be added to the list of imports above.
// HAPStorage.setCustomStoragePath("...");

const accessoryUuid = uuid.generate("hap.examples.light");
const accessory = new Accessory("Example Accessory Name", accessoryUuid);

const lightService = new Service.Lightbulb("Example Lightbulb");

let currentLightState = false; // on or off
let currentBrightnessLevel = 100;

// 'On' characteristic is required for the light service.
// onGet is called when HomeKit asks for the current value, onSet when HomeKit changes it.
lightService.getCharacteristic(Characteristic.On)
  .onGet(() => {
    console.log("Queried current light state: " + currentLightState);
    return currentLightState;
  })
  .onSet((value: CharacteristicValue) => {
    console.log("Setting light state to: " + value);
    currentLightState = value as boolean;
  });

// 'Brightness' characteristic is optional for the light service; 'getCharacteristic' will automatically add it to the service!
lightService.getCharacteristic(Characteristic.Brightness)
  .onGet(() => {
    console.log("Queried current brightness level: " + currentBrightnessLevel);
    return currentBrightnessLevel;
  })
  .onSet((value: CharacteristicValue) => {
    console.log("Setting brightness level to: " + value);
    currentBrightnessLevel = value as number;
  });

accessory.addService(lightService); // adding the service to the accessory

// once everything is set up, we publish the accessory. Publish should always be the last step!
await accessory.publish({
  username: "17:51:07:F4:BC:8A",
  pincode: "678-90-876",
  port: 47128,
  category: Categories.LIGHTBULB, // value here defines the symbol shown in the pairing screen
});

console.log("Accessory setup finished!");
