# prodev-mobile-app-0x00

## Project Setup

This project is an Expo application initialized using the latest Expo Router template.

### Steps to Scaffold the Project

1. **Navigate to the Project Directory:**
   ```sh
   cd prodev-mobile-setup
   ```
2. **Initialize a new Expo project:**
   ```sh
   npx create-expo-app@latest .
   ```
3. **Modify the Home Screen:**
   - Open `app/(tabs)/index.tsx`
   - Locate the default text `Welcome!`
   - Change it to:
     ```tsx
     <Text>First App Created</Text>
     ```
4. **Start the Expo development server:**
   ```sh
   npx expo start
   ```
5. **Run the app on a device:**
   - **For Android:** Scan the QR code using the **Expo Go** app.
   - **For iOS:** Scan the QR code using the **Camera app**.

## Resetting the Project

To reset the project and move existing files to `/app-example` instead of deleting them, run:

```sh
npm run reset-project
```

### What Happens During Reset:

- The script moves existing files into `/app-example`, including:
  - `/app` → `/app-example/app`
  - `/components` → `/app-example/components`
  - `/hooks` → `/app-example/hooks`
  - `/constants` → `/app-example/constants`
  - `/scripts` → `/app-example/scripts`
- A **new `/app` directory** is created with fresh files:
  - `app/index.tsx`
  - `app/_layout.tsx`
- The project is now in a clean state while preserving old files for reference.

### Issues Encountered and Solutions

#### 1. **Android SDK Not Found**

- Installed Android Studio and set `ANDROID_HOME` and `PATH` environment variables.

#### 2. **Permission Issues When Resetting the Project**

- Ran the terminal as an Administrator.
- Closed any active Expo or VS Code instances to free up file access.

## Next Steps After Reset

1. **Start the development server again:**
   ```sh
   npx expo start
   ```
2. **Modify `app/index.tsx`** to update the home screen text again.

This README documents the setup process, project structure, and solutions to encountered issues. 🚀
