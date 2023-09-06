describe('Intro Screen Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have intro screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show register screen after tap', async () => {
    await element(by.id('register')).tap();
    await expect(element(by.text('Add your details below to set\n up your account'))).toBeVisible();
  });

  it('should show login screen after tap', async () => {
    await element(by.id('login')).tap();
    await expect(element(by.text('Welcome Back!'))).toBeVisible();
  });
});
 