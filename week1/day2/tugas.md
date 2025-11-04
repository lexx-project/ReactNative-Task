1. Konsep Dasar React Native sebagai framework cross-platform adalah untuk membangun aplikasi mobile menggunakan JavaScript dan React. Perbedaan Utama dengan react untuk web adalah React Native menggunakan komponen asli (native components) daripada elemen HTML, sehingga aplikasi yang dibuat dapat berjalan secara native di perangkat iOS dan Android. Peran New Archtitecture di react native v0.80 adalah untuk meningkatkan performa, modularitas, dan interoperabilitas antara JavaScript dan kode native melalui penggunaan JSI (JavaScript Interface) dan TurboModules.dan hal itu memengaruhi performa aplikasi mobile karena dapat mengurangi overhead komunikasi antara JavaScript dan kode native, sehingga aplikasi menjadi lebih responsif dan efisien.

2. React Native CLI dan Expo dari segi arsitektur dan proses build memiliki perbedaan signifikan :
   Keuntungan :

   - React Native CLI memberikan kontrol penuh atas konfigurasi proyek, memungkinkan pengembang untuk menyesuaikan aspek aplikasi.
   - Expo menyediakan lingkungan pengembangan yang lebih sederhana dengan banyak fitur bawaan, seperti hot reloading dan akses mudah ke API perangkat keras.
     Kerugian :
   - React Native CLI memerlukan lebih banyak konfigurasi awal dan pengaturan lingkungan yang kompleks.
   - Expo memiliki keterbatasan dalam hal akses ke beberapa fitur native dan ukuran aplikasi yang lebih besar karena bundling semua fitur.
     Contoh Skenario Proyek di mana akan memilih salah satu di atas :
   - Jika proyek memerlukan akses mendalam ke fitur native atau kustomisasi tinggi, React Native CLI lebih cocok.
   - Jika proyek lebih fokus pada pengembangan cepat dan prototyping, Expo adalah pilihan yang lebih baik.
     Alasannya adalah karena Expo memungkinkan pengembang untuk memulai dengan cepat tanpa harus mengatur banyak konfigurasi, sementara React Native CLI memberikan fleksibilitas yang lebih besar untuk proyek yang kompleks.

3. SKD Platform (Android-35) dan Build Tools (35.0.0) dan platform tools masing masing diperlukan karena SDK Platform menyediakan API dan pustaka yang diperlukan untuk mengembangkan aplikasi Android, sedangkan Build Tools berisi alat-alat yang digunakan untuk membangun, menguji, dan mengemas aplikasi. Platform Tools menyediakan utilitas tambahan seperti adb (Android Debug Bridge) yang penting untuk pengembangan dan debugging aplikasi di perangkat Android.
   contoh bagaimana ketidakhadiran salah satu komponen tersebut dapat menyebabkan masalah saat menjalankan proyek pertama di vscode : Jika SDK Platform tidak ada, VS Code tidak akan dapat mengkompilasi kode karena tidak menemukan API yang diperlukan. Jika Build Tools tidak ada, proses build akan gagal karena tidak ada alat untuk mengemas aplikasi. Jika Platform Tools tidak ada, Anda tidak dapat menggunakan adb untuk menginstal atau men-debug aplikasi di perangkat fisik atau emulator.

4. Prasyarat umum setup React Native CLI v0.80 :
   -Node Js : digunakan untuk menjalankan JavaScript di luar browser dan mengelola paket melalui npm atau yarn.
   -Watchman : alat yang memantau perubahan file di sistem file, membantu dalam pengembangan dengan hot reloading.
   Yarn : manajer paket alternatif untuk npm yang lebih cepat dan efisien dalam mengelola dependensi proyek.

Masing masing diperlukan untuk menjembatani JavaScript ke Native Runtime Karena Node.js memungkinkan eksekusi JavaScript, Watchman membantu dalam deteksi perubahan kode untuk memperbarui aplikasi secara real-time, dan Yarn mengelola dependensi yang diperlukan untuk menjalankan aplikasi React Native dengan lancar.

5. Struktur folder utama dalam proyek React Native CLI:

   - `android/`: Folder ini berisi kode sumber native untuk aplikasi Android. Di dalamnya terdapat file-file konfigurasi Gradle, manifest Android, dan kode Java/Kotlin yang diperlukan untuk menjalankan aplikasi di platform Android.

     - Fungsi: Mengelola semua aspek spesifik Android dari aplikasi, termasuk izin, konfigurasi build, dan integrasi dengan fitur-fitur native Android.

   - `ios/`: Folder ini berisi kode sumber native untuk aplikasi iOS. Di dalamnya terdapat file-file konfigurasi Xcode, Info.plist, dan kode Objective-C/Swift yang diperlukan untuk menjalankan aplikasi di platform iOS.

     - Fungsi: Mengelola semua aspek spesifik iOS dari aplikasi, termasuk izin, konfigurasi build, dan integrasi dengan fitur-fitur native iOS.

   - `App.js`: Ini adalah file JavaScript utama yang menjadi titik masuk aplikasi React Native. Di sinilah komponen-komponen UI utama didefinisikan dan diatur.

     - Fungsi: Berisi komponen root aplikasi, tempat Anda mulai membangun UI dan logika aplikasi menggunakan React.

   - `metro.config.js`: File konfigurasi untuk Metro, bundler JavaScript yang digunakan oleh React Native. Metro bertanggung jawab untuk mengkompilasi kode JavaScript Anda dan aset lainnya menjadi satu atau beberapa bundel yang dapat dimuat oleh aplikasi native.
     - Fungsi: Mengatur bagaimana Metro memproses file, termasuk resolusi modul, transformasi kode, dan penanganan aset.

   Bagaimana struktur ini mendukung pengembangan cross-platform:
   Struktur ini memungkinkan pengembang untuk menulis sebagian besar kode aplikasi dalam JavaScript (di luar folder `android/` dan `ios/`), yang kemudian dapat digunakan kembali di kedua platform. Folder `android/` dan `ios/` menyediakan tempat untuk kode dan konfigurasi spesifik platform yang tidak dapat diimplementasikan dengan JavaScript murni, seperti integrasi dengan modul native atau penyesuaian UI yang sangat spesifik untuk platform tersebut. Ini adalah inti dari pendekatan cross-platform React Native.

   Bagaimana struktur ini mendukung navigasi di VS Code:
   VS Code memiliki integrasi yang baik dengan struktur proyek React Native. Anda dapat dengan mudah menavigasi antar file JavaScript, file native (Java/Kotlin, Objective-C/Swift), dan file konfigurasi. Fitur seperti "Go to Definition", "Find All References", dan pencarian global sangat membantu dalam memahami dan memodifikasi kode di seluruh proyek. Ekstensi VS Code untuk React Native juga menyediakan fitur-fitur seperti debugging, autokomplet, dan linting yang bekerja dengan baik di seluruh struktur proyek ini, memungkinkan pengalaman pengembangan yang mulus.
