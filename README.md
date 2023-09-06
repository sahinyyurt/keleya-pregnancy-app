# Keleya Pregnancy App 

### Installation

Install all packages run;
```bash
$ yarn
```
Install pods for iOS;
```bash
$ yarn run pod-install
```

Install e2e testing dependencies;
```bash
$ yarn global add detox-cli
$ brew tap wix/brew
$ brew install applesimutils
```

### Run

Run metro bundler;
```bash
$ yarn start
```

Run iOS simulator;
```bash
$ yarn run ios
```
Run Android simulator;
```bash
$ yarn run android
```

Run e2e Tests;
```bash
$ yarn run test:build
$ yarn run test
```





