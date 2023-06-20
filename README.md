# Coffee-Brings API

<!-- NAVIGATION -->
<ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->

## About The Project

coffee brings adalah aplikasi FnB berbasis online yang bertujuan untuk mempermudah siapa saja dalam pemesanan makanan atau minuman. Dari sisi Backend, aplikasi ini dibangun dengan menggunakan nodejs dan mysql sebagai database nya, dan framewoek nextjs menjadi komponen pembangun di sisi frontend. pada aplikasi ini user dapat memesan beberapa makanan dalam satu pesanan dengan fitur add to cart dengan menggabungkan seluruh total harga menjadi satu kali transaksi pembayaran.

### Built With

some technology used in this project.

- [Express](https://expressjs.com)
- [JWT](https://jwt.io)
- [MySQL](https://mysql.com)
- [Redis](https://redis.io)
- [Nodemailer](https://nodemailer.com)

<!-- GETTING STARTED -->

## Getting Started

Get started with this project, intructions on setting up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

Before installing, you must be install [nodejs and npm.](https://nodejs.org)

### Installation

1. Clone this repo

```sh
git clone https://github.com/AhmadZaky19/backend-coffebrings.git
```

2. Install NPM package

```sh
cd backend-coffebrings
npm install
```

3. Setting `.env`

<!-- - create `.env` file

  ```sh
  touch .env
  ``` -->

- Add configuration in `.env` file

```
PORT=yourport

DB_HOST=yourdbhostname
DB_USER=yourdbusername
DB_PASSWORD=yourdbpassword
DB_DATABASE=yourdbdatabasename

REDIS_HOST=yourredishost
REDIS_PORT=tourredisport
REDIS_PASSWORD=yourredispassword

EMAIL_USER=youremailuser
EMAIL_PASSWORD=youremailpassword

SECRET_KEY=yoursecretkey

```

<!-- MIDTRANS_IS_PRODUCTION=yourmidtransisproduction
MIDTRANS_SERVER_KEY=yourmidtransserverkey
MIDTRANS_CLIENT_KEY=yourmidtransclientkey -->

4. Start the project

```sh
npm run dev
```

<!-- Contributors -->

## Contributors

- (Fullstack) Walid Nurudin [https://github.com/Walidnurudin](https://github.com/Walidnurudin)
- (Frontend) Fajri Putra [https://github.com/fajriputra](https://github.com/fajriputra)
- (Frontend) Fikri Nadzif [https://github.com/LepakBoy](https://github.com/LepakBoy)
- (Backend) Fachri Maulana [https://github.com/mrfachri19](https://github.com/mrfachri19)
- (Backend) Ahmad Zaky [https://github.com/AhmadZaky19](https://github.com/AhmadZaky19)
- (Backend) Noviana [https://github.com/Novianaa](https://github.com/Novianaa)

Project Link: [https://github.com/AhmadZaky19/backend-coffebrings](https://github.com/AhmadZaky19/backend-coffebrings)
