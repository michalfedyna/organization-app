import {device} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should run and take screenshot', async () => {
    await device.takeScreenshot('screenshot.png');
  });
});
