import {
  Accessory,
  Categories,
  Characteristic,
  CharacteristicEventTypes,
  CharacteristicGetCallback,
  CharacteristicSetCallback,
  CharacteristicValue,
  Service,
  uuid
} from "hap-nodejs";

// optionally set a different storage location with code below. HAPStorage needs to be added to the list of imports above.
// HAPStorage.setCustomStoragePath("...");

const accessoryUuid = uuid.generate("hap.examples.light");
const accessory = new Accessory("Example Accessory Name", accessoryUuid);

const lightService = new Service.Lightbulb("Example Lightbulb");

let currentLightState = false; // on or off
let currentBrightnessLevel = 100;


// 'On' characteristic is required for the light service
const onCharacteristic = lightService.getCharacteristic(Characteristic.On)!;
// 'Brightness' characteristic is optional for the light service; 'getCharacteristic' will automatically add it to the service!
const brightnessCharacteristic = lightService.getCharacteristic(Characteristic.Brightness)!;


// with the 'on' function we can add event handlers for different events, mainly the 'get' and 'set' event
onCharacteristic.on(CharacteristicEventTypes.GET, (callback: CharacteristicGetCallback) => {
  console.log("Queried current light state: " + currentLightState);
  callback(undefined, currentLightState);
});
onCharacteristic.on(CharacteristicEventTypes.SET, (value: CharacteristicValue, callback: CharacteristicSetCallback) => {
  console.log("Setting light state to: " + value);
  currentLightState = value as boolean;
  callback();
});


brightnessCharacteristic.on(CharacteristicEventTypes.GET, (callback: CharacteristicGetCallback) => {
  console.log("Queried current brightness level: " + currentBrightnessLevel);
  callback(undefined, currentBrightnessLevel);
});
brightnessCharacteristic.on(CharacteristicEventTypes.SET, (value: CharacteristicValue, callback: CharacteristicSetCallback) => {
  console.log("Setting brightness level to: " + value);
  currentBrightnessLevel = value as number;
  callback();
});


accessory.addService(lightService); // adding the service to the accessory

// once everything is set up, we publish the accessory. Publish should always be the last step!
accessory.publish({
  username: "17:51:07:F4:BC:8A",
  pincode: "678-90-876",
  port: 47128,
  category: Categories.LIGHTBULB, // value here defines the symbol shown in the pairing screen
});

console.log("Accessory setup finished!");
