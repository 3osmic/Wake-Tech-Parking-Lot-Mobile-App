# Wake Park Software Installation Guide

The following installation guide navigates the user through running our project, Wake Park. Overall your system will need two external applications other than your usual code editor which include two applications named Android Studio, and Expo Go. 

## Table of Contents:
1. System Requirements
2. Download the installer
3. Installing the software
4. Launching the software
5. Uninstalling the software
6. Troubleshooting
7. Contact information

### System Requirements
The System Requirements for running all the Wake Park applications are below 

**Windows**
- Microsoft® Windows® 7/8/10 (64-bit)
- 4 GB RAM minimum, 8 GB RAM recommended
- 2 GB of available disk space minimum, 4 GB recommended (500 MB for IDE + 1.5 GB for Android SDK and emulator system image)
- 1280 x 800 minimum screen resolution
- Microsoft® DirectX® 9 or higher with the latest updates
- JDK 8 (included with Android Studio for Windows) or higher

**macOS**
- macOS® 10.10 (Yosemite) or higher, up to macOS 12.x (Monterey)
- 4 GB RAM minimum, 8 GB RAM recommended
- 2 GB of available disk space minimum, 4 GB recommended (500 MB for IDE + 1.5 GB for Android SDK and emulator system image)
- 1280 x 800 minimum screen resolution
- Oracle® Java Development Kit (JDK) 8

**Linux**
- GNOME or KDE desktop
- Tested on Ubuntu® 14.04 LTS, 16.04 LTS, and 18.04 LTS (64-bit)
- 4 GB RAM minimum, 8 GB RAM recommended
- 2 GB of available disk space minimum, 4 GB recommended (500 MB for IDE + 1.5 GB for Android SDK and emulator system image)
- 1280 x 800 minimum screen resolution
- Oracle® Java Development Kit (JDK) 8 or OpenJDK™ 11

### Download The Software Installer
Our app runs on a multitude of different softwares listed below. The links are also provided to be able to download and install them.

**VISUAL STUDIO CODE**

    How to Install:
    - Navigate to the visual studio code website: 

    https://code.visualstudio.com/download
    
    Depending on your operating system, you can choose one of the following options.

![VS_Code](image-1.png)

**EMULATOR**

    How to Install:
    - Navigate to the android studio website:

    https://developer.android.com/studio

    Our team used android, but there are tutorials out there on how to use ios.

![Emulator_Website](image-2.png)

    The video link on how to install the android emulator from android studio:

    https://www.youtube.com/watch?v=ZGIU5aIRi9M&t=228s

**EXPO GO**

    You can either download the android studio (android emulator) or download the expo go app on your phone to run the app.

    How to Install:
    - Navigate to either the app store of google play store and install "Expo"

![Google_Play_Store](image-3.png)
![App_Store](image-4.png)

**NODE.JS**

    How to Install:
    - Navigate to the NodeJS website and download the software:

    https://nodejs.org/en/download

![Node_JS](image-5.png)

**REACT NATIVE**

    Here is the website to help you set up your react native environment:

    https://reactnative.dev/docs/environment-setup

![React_Native](image-6.png)

    Here is also a youtube video describing how to set up the react native development environment:

    https://www.youtube.com/watch?v=oorfevovPWw

### Installing the Software

1. Download the WakePark app from GitHub
    - Download the project from the GitHub page at https://github.com/3osmic/WakePark
    - Create a folder where you would like the application to be located.
    - Extract the download zip into your desired project location.

![one](image-7.png)

2. Install Node.js
    - Download the latest version at https://nodejs.org/en/download, and ensure that you select the correct version for your operating system.
    - Run the downloaded installer.
    - Follow the installation setup.
    - When asked about optional tools to compile native modules, you do not need to select the checkbox.
![two](image-8.png)
    - Proceed throughout the rest of the installer until it is finished.
    - You may run “node -v” in your terminal to ensure node.js is properly installed, as this command should return your current node.js version.

![three](image-9.png)

3. Install Expo on your phone
    - Visit either the Google Play store or Apple App Store and search for the Expo app.
    - After finding the app, select to download.
    - Wait for the download to finish and you should now have access to the Expo app on your device.
    
4. Install Android Studio on your computer
    - If you prefer accessing our app on your computer, you can download Android Studio and run the app on an emulator.  Ensure that you have the system requirements to meet the demands of Android Studio here: https://developer.android.com/studio/run/emulator#requirements 
    - Download Android Studio from here: https://developer.android.com/studio 
![four](image-10.png)
    - After your download is complete, launch the installer and follow the instructions and make any configurations you wish.
    - Once it is finished installing, you may choose to launch Android Studio.

5. Setup an Android emulator
    - Open up the WakePark app directory as Android Studio Project.
    - Search for the device manager tab, mine is on right side, but the location may be different based on your version.
    - From the device manager tab, select the plus to create a virtual device.
![five](image-11.png)
    - You can choose just about any hardware option, but it is recommended you choose Medium Phone.
![six](image-12.png)
    - After that, it is recommended that choose UpsideDownCake for your system image to run the WakePark App.  It will take time for you to download this system image.
![seven](image-13.png)
    - Finally, provide a name for your emulator and select finish.

### Launching the Software
Once you have everything installed, to launch the app you’ll need to:

1. Navigate to the extracted project folder in your file explorer and click the **File** tab at the top left of the window and choose **Open in Windows Powershell**.
    - Note: if you have trouble with the following steps, run windows powershell as an administrator

![eight](image-14.png)

2. Next, run the command **npm install**.

![nine](image-15.png)

3. Then run the command npm start and scan the QR code with your mobile device or press a on your keyboard if you are using the emulator.

![ten](image-16.png)

4. Then you should be in the app.

### Uninstalling the Software
- In order to uninstall the app all you need to do is navigate to the extracted project folder and delete it.

### Troubleshooting

**Common Installation Issues**

If you encounter problems during the installation of the WakePark app, follow these steps to resolve common issues:

#### Problem 1: Cannot Download the App
1. Error messages saying "Unable to Download" or "Download Failed."
2. Download does not start or gets stuck.

#### Solutions:
1. **Check Network Connection:**
    - Ensure your device is connected to a stable internet connection. Switch between Wi-Fi and mobile data to check if the issue is related to a specific network.

2. **Check Storage Space:**
    - Ensure your device has sufficient storage space for the app. Clear out unnecessary files or apps to make room.

3. **Restart Your Device:**
    - Sometimes, simply restarting your device can resolve underlying issues that affect app downloads.

#### Problem 2: Installation Stalls or Freezes
1. Installation progress bar does not move for an extended time.
2. The app begins to install but does not complete.

#### Solutions:
1. **Force Stop the App Store:**
    - On iOS, double-tap the Home button and swipe up on the App Store to close it. On Android, go to Settings > Apps > App Store > Force Stop.
 
2. **Clear Cache (Android Only):**
    - Go to Settings > Apps > Google Play Store > Storage > Clear Cache.

3. **Restart Installation:**
    - After performing the above steps, try reinstalling the app from the App Store or Google Play Store.

#### Problem 3: App Won't Open After Installation
1. The app crashes immediately after opening.
2. The app does not respond after tapping the icon.

#### Solutions:
1. **Check for Updates:**
    - Ensure that your device's operating system and the app are up to date. Developers often release updates to fix bugs that cause crashing.

2. **Reinstall the App:**
    - Uninstall the app, then reinstall it from the App Store or Google Play Store. This can fix corrupted installations.

3. **Contact Support:**
    - If problems persist, contact WakePark support for further assistance. Provide details about the issue and any error messages you've seen.

#### Problem 4: Error Messages During Installation
1. Receiving specific error codes or messages during the installation process.

#### Solutions:
1. **Search for Error Codes:**
     - Use a search engine to look up specific error codes or messages you receive for detailed troubleshooting steps.

2. **Update Device Software:**
    - Install any available updates for your device’s operating system, as some apps require the latest version to function properly.

3. **Consult the FAQ or Support:**
    - Check the WakePark app FAQ for any known issues with solutions or contact support directly for help.

### Contact and Support
For additional support, please do not hesitate to contact any of the following developers:

**Team Lead:** aylewis@my.waketech.edu

**Team Member:** dlingle@my.waketech.edu

**Team Member:** smukherjee2@my.waketech.edu

**Team Member:** srotich@my.waketech.edu

**Team Member:** znjones@my.waketech.edu

**Team Member:** ymshettia@my.waketech.edu

#### Software Support Resources

**VS Code:** https://code.visualstudio.com/

**Emulator (Android Studio):** https://developer.android.com/studio

**React Native Framework:** https://reactnative.dev/

**Expo Go:** 
- https://expo.dev/go
- https://docs.expo.dev/get-started/expo-go/

**Node.js:** https://nodejs.org/en; https://nodejs.org/docs/latest/api/
