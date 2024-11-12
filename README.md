# React Native Performance Workshop

This dummy app suffers from many performance issues, let's fix them together. 🔥

See the prerequisites below.

<img width="467" alt="image" src="https://github.com/user-attachments/assets/1658fded-d021-40fe-9b8b-0c3195636d48">

## Prerequisites

To make sure you get the best experience during the workshop

- Node 18+
- Have an Android real device or emulator set up
- Android Studio & XCode up to date
- Project installed (see below)
- Android Release build installed on Android device (see below)

Feel free to contact me on [Twitter](https://twitter.com/almouro), [BlueSky](https://bsky.app/profile/almouro.bsky.social) or [LinkedIn](https://www.linkedin.com/in/alexandremoureaux/) if you have any issues/questions before the workshop!

### Install the project

- `git clone` this project
- run `yarn` to install dependencies

Run on Android with:

```bash
npx expo run:android
```

Then press `a` to open the built app on your Android device.

Run on iOS with:

```bash
npx expo run:ios
```

Then press `i` to open the built app on your Android device.

### Install a release version of the Android app

```bash
cd android
./gradlew assembleRelease
adb install app/build/outputs/apk/release/app-release.apk
```
