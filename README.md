<h1 align="center">
  🎓 Educertify
</h1>
<h4 align="center">Revolutionizing Certificate Creation and Management</h4>
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#showcase">Showcase</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#support">Support</a>
</p>
<p align="center">
  <img src="screenshots/1.png" alt="Educertify Demo">
</p>
<p align="center">
  <a href="https://github.com/carlosJCVC/EduCertify/stargazers"><img src="https://img.shields.io/github/stars/carlosJCVC/Educertify" alt="GitHub stars"></a>
  <a href="https://github.com/carlosJCVC/EduCertify/network"><img src="https://img.shields.io/github/forks/carlosJCVC/Educertify" alt="GitHub forks"></a>
  <a href="https://github.com/carlosJCVC/EduCertify/issues"><img src="https://img.shields.io/github/issues/carlosJCVC/Educertify" alt="GitHub issues"></a>
  <a href="https://github.com/carlosJCVC/EduCertify/blob/master/LICENSE"><img src="https://img.shields.io/github/license/carlosJCVC/Educertify" alt="License"></a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20Educertify!%20https://github.com/carlosJCVC/EduCertify"><img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FcarlosJCVC%2FEducertify" alt="Tweet"></a>
</p>

---

# 🎓 Educertify

**Educertify** is a web application that allows for the creation and customization of certificates in an easy and intuitive way. You can customize fonts, colors, add signatures, and also upload signed certificates or digitally sign them.

## 🌟 Key Features

Educertify isn't just another certificate maker. It's a comprehensive platform designed to streamline the entire process of creating, managing, and distributing certificates.

- **🎨 Full Customization**: Tailor every aspect of your certificates:
   - Choose from a variety of fonts
   - Select custom colors
   - Adjust text styles and positioning
- **📚 Digital Signatures**: Allows adding digital signatures or uploading already signed certificates.
   - Add digital signatures directly in the app
   - Upload pre-signed certificates
- **🔄 Bulk Generation**: Create thousands of certificates in seconds
- **📄 PDF Download**: Generate and download certificates in PDF format.
- **📧 Email Integration**: Send certificates directly to participants
- **📱 Mobile Responsive**: Design and view certificates on any device

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/usuario/educertify.git

# Navigate to the project directory
cd educertify

# Install dependencies
composer install && npm install

# Set up environment variables
cp .env.example .env
php artisan key:generate

# Run migrations and seed the database
php artisan migrate --seed

# Compile assets
npm run dev

# Start the development server
php artisan serve
```

Visit `http://localhost:8000` and start revolutionizing your certificate process!

## 🛠️ Technologies Used

<p align="center">
  <img src="https://www.php.net//images/logos/new-php-logo.svg" alt="PHP" width="70">
  <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel" width="40">
  <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="MySQL" width="60">
  <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'%20?%3e%3csvg%20width='256px'%20height='361px'%20viewBox='0%200%20256%20361'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M127.843868,360.087912%20L23.6617143,331.166242%20L0.445186813,70.7657143%20L255.554813,70.7657143%20L232.31367,331.125451%20L127.843868,360.087912%20L127.843868,360.087912%20Z'%20fill='%23264DE4'%3e%3c/path%3e%3cpath%20d='M212.416703,314.546637%20L232.277802,92.0573187%20L128,92.0573187%20L128,337.950242%20L212.416703,314.546637%20L212.416703,314.546637%20Z'%20fill='%232965F1'%3e%3c/path%3e%3cpath%20d='M53.6685714,188.636132%20L56.530989,220.572835%20L128,220.572835%20L128,188.636132%20L53.6685714,188.636132%20L53.6685714,188.636132%20Z'%20fill='%23EBEBEB'%3e%3c/path%3e%3cpath%20d='M47.917011,123.994725%20L50.8202198,155.932132%20L128,155.932132%20L128,123.994725%20L47.917011,123.994725%20L47.917011,123.994725%20Z'%20fill='%23EBEBEB'%3e%3c/path%3e%3cpath%20d='M128,271.580132%20L127.860044,271.617407%20L92.2915165,262.013187%20L90.0177582,236.54189%20L57.957978,236.54189%20L62.4323516,286.687648%20L127.853011,304.848879%20L128,304.808088%20L128,271.580132%20L128,271.580132%20Z'%20fill='%23EBEBEB'%3e%3c/path%3e%3cpath%20d='M60.4835165,0%20L99.1648352,0%20L99.1648352,16.1758242%20L76.6593407,16.1758242%20L76.6593407,32.3516484%20L99.1648352,32.3516484%20L99.1648352,48.5274725%20L60.4835165,48.5274725%20L60.4835165,0%20L60.4835165,0%20Z'%20fill='%23000000'%3e%3c/path%3e%3cpath%20d='M106.901099,0%20L145.582418,0%20L145.582418,14.0659341%20L123.076923,14.0659341%20L123.076923,16.8791209%20L145.582418,16.8791209%20L145.582418,49.2307692%20L106.901099,49.2307692%20L106.901099,34.4615385%20L129.406593,34.4615385%20L129.406593,31.6483516%20L106.901099,31.6483516%20L106.901099,0%20L106.901099,0%20Z'%20fill='%23000000'%3e%3c/path%3e%3cpath%20d='M153.318681,0%20L192,0%20L192,14.0659341%20L169.494505,14.0659341%20L169.494505,16.8791209%20L192,16.8791209%20L192,49.2307692%20L153.318681,49.2307692%20L153.318681,34.4615385%20L175.824176,34.4615385%20L175.824176,31.6483516%20L153.318681,31.6483516%20L153.318681,0%20L153.318681,0%20Z'%20fill='%23000000'%3e%3c/path%3e%3cpath%20d='M202.126769,188.636132%20L207.892396,123.994725%20L127.889582,123.994725%20L127.889582,155.932132%20L172.892132,155.932132%20L169.98611,188.636132%20L127.889582,188.636132%20L127.889582,220.572835%20L167.216527,220.572835%20L163.509451,261.992791%20L127.889582,271.606857%20L127.889582,304.833407%20L193.362286,286.687648%20L193.842637,281.291956%20L201.347516,197.212132%20L202.126769,188.636132%20L202.126769,188.636132%20Z'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e" alt="CSS" width="30">
  <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'%20?%3e%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M0,0%20L256,0%20L256,256%20L0,256%20L0,0%20Z'%20fill='%23F7DF1E'%3e%3c/path%3e%3cpath%20d='M67.311746,213.932292%20L86.902654,202.076241%20C90.6821079,208.777346%2094.1202286,214.447137%20102.367086,214.447137%20C110.272203,214.447137%20115.256076,211.354819%20115.256076,199.326883%20L115.256076,117.528787%20L139.313575,117.528787%20L139.313575,199.666997%20C139.313575,224.58433%20124.707759,235.925943%20103.3984,235.925943%20C84.1532952,235.925943%2072.9819429,225.958603%2067.3113397,213.93026'%20fill='%23000000'%3e%3c/path%3e%3cpath%20d='M152.380952,211.354413%20L171.969422,200.0128%20C177.125994,208.433981%20183.827911,214.619835%20195.684368,214.619835%20C205.652521,214.619835%20212.009041,209.635962%20212.009041,202.762159%20C212.009041,194.513676%20205.479416,191.592025%20194.481168,186.78207%20L188.468419,184.202565%20C171.111213,176.81473%20159.597308,167.53534%20159.597308,147.944838%20C159.597308,129.901308%20173.344508,116.153295%20194.825752,116.153295%20C210.119924,116.153295%20221.117765,121.48094%20229.021663,135.400432%20L210.29059,147.428775%20C206.166146,140.040127%20201.699556,137.119289%20194.826159,137.119289%20C187.78047,137.119289%20183.312254,141.587098%20183.312254,147.428775%20C183.312254,154.646349%20187.78047,157.568406%20198.089956,162.036622%20L204.103924,164.614095%20C224.553448,173.378641%20236.067352,182.313448%20236.067352,202.418387%20C236.067352,224.071924%20219.055137,235.927975%20196.200432,235.927975%20C173.860978,235.927975%20159.425829,225.274311%20152.381359,211.354413'%20fill='%23000000'%3e%3c/path%3e%3c/g%3e%3c/svg%3e" alt="JavaScript" width="40">
</p>

- **Backend**: Laravel (PHP)
- **Frontend**: Bootstrap, Tabler, CSS, jQuery, JavaScript, Blade, SweetAlert, Toastr
- **Database**: MySQL, PostgreSQL

## 🖥️ Usage

1. **Register/Login**: Create an account or log in to access the dashboard.
2. **Select Template**: Choose from pre-designed templates or start from scratch.
3. **Customize**: Use the real-time editor to personalize your certificate.
4. **Add Signatures**: Digitally sign or upload signatures as needed.
5. **Preview**: Review your certificate before finalizing.
6. **Download/Send**: Generate a PDF or email the certificate directly to recipients.

## 📸 Screenshots

Here are some screenshots of the application in action:

1. **Dashboard**
   ![Dashboard Screenshot](screenshots/1.png)

2. **Certificate Customization**
   ![Certificate Customization Screenshot](screenshots/15.png)

3. **PDF Download**
   ![PDF Download Screenshot](screenshots/17.png)

4. **Send Certificates to the Participants**
   ![Send Certificate Email](screenshots/24.png)

## 🤝 Contributions

We welcome contributions to Educertify! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

If you have any questions or suggestions, you can contact me at [carlosveizaga.jcvc@gmail.com](mailto:carlosveizaga.jcvc@gmail.com).
Carlos Veizaga - [@YourTwitter](https://twitter.com/YourTwitter) - carlosveizaga.jcvc@gmail.com
Project Link: [https://github.com/usuario/educertify](https://github.com/usuario/educertify)

## 🙏 Acknowledgements

- [Laravel](https://laravel.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Tabler](https://tabler.io/)
- [SweetAlert](https://sweetalert2.github.io/)
- [Toastr](https://github.com/CodeSeven/toastr)

<p align="center">
  Made with ❤️ by the Carlos Veizaga Developer
</p>

---
