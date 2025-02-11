# Getting Started with React Native, TypeScript, NativeWindCSS, and Expo

## 1. Set Up Your Development Environment

Before you start, ensure you have the following installed:

- **Node.js LTS** (v16 or higher)
- **Expo CLI** (`npm install -g expo-cli`)
- **A code editor** (e.g., VS Code)

## 2. Create a New Expo Project

Run the following command to create a new Expo project with TypeScript:

```sh
npx create-expo-app MyApp
cd MyApp
```

## 3. Run Your App

Start the development server:

```sh
npx expo start
```

Scan the QR code with the Expo Go app on your phone, or open the app in an emulator.

## Benefits of This Stack

- **Cross-platform development**: Write once, run on both iOS and Android.
- **Type safety**: TypeScript ensures fewer runtime errors and better code quality.
- **Efficient styling**: NativeWindCSS simplifies styling with utility-first CSS.
- **Rapid development**: Expo’s tools and services speed up the development process.

Combining React Native, TypeScript, NativeWindCSS, and Expo provides a robust and efficient way to build modern mobile applications. Whether you’re a beginner or an experienced developer, this stack offers the tools and flexibility needed to create high-quality apps quickly. Start building your next mobile app today with this powerful combination! 🚀

---

## Setting Up and Testing Your Mobile Development Environment

### Objective

Mobile development demands more computational resources compared to web development. To ensure a smooth development experience, we will be using the Expo Framework for React Native, which simplifies mobile app development and testing.

To successfully complete this task, ensure you have the following:

- **Node.js LTS installed**
- **VS Code (our recommended IDE)**
- **macOS, Linux, or Windows**
- **Expo Go installed on your physical device (Android or iOS)**

These tools are essential for completing the upcoming projects efficiently.

---

## Why Expo Go?

Unlike web development, mobile development relies on device emulators to test applications. However, keeping up with the ever-evolving mobile ecosystem (e.g., iPhone 7 → iPhone 16 Pro Max, various Android devices) can be costly in terms of hardware requirements.

Expo Go provides a cost-effective solution by allowing you to test and run your React Native applications directly on your physical device, supporting both iOS and Android seamlessly.

### Steps to Install Expo Go

1. Visit the official Expo Go homepage: [Expo Go](https://expo.dev/go)
2. Select the latest SDK version.
3. Click on Install for your device:
   - **Android**: Install from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - **iOS**: Install from the [Apple App Store](https://apps.apple.com/app/expo-go/id982107779)
4. Open the Expo Go app on your device.
5. Create a new account or log in if you already have one.

### Documenting Your Setup Process

Ensure that you document your setup process and any challenges faced in this `README.md` file. This will help track your progress and troubleshoot any issues that arise during development.

---

## Challenges and Solutions

### Common Issues Faced During Installation

1. **Permission Errors (EPERM)**

   - Run the terminal as an administrator.
   - Try clearing the npm cache:
     ```sh
     npm cache clean --force
     ```
   - If issues persist, reinstall Node.js and ensure the correct version is used.

2. **Network Issues (ECONNRESET, Proxy Problems)**

   - Check your internet connection.
   - If behind a proxy, configure npm to use it:
     ```sh
     npm config set proxy http://your.proxy.com:8080
     npm config set https-proxy http://your.proxy.com:8080
     ```

3. **Expo Go App Not Detecting QR Code**
   - Ensure your phone and development machine are on the same network.
   - Restart the Expo development server and try again.

By keeping track of these issues and their resolutions, you can streamline your development process and minimize downtime.

---

## Repository Information

- **GitHub Repository**: `prodev-mobile-setup`
- **Directory**: `mobile-development-setup`
- **File**: `README.md`
