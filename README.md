<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/near-everything/app">
    <img src="public/icons/everything.png" alt="Logo" width="80" height="80">
  </a>

<h2 align="center">everything</h3>

  <p align="center">
    An all-in-one tool interacting with the inventory of everything.
    <br />
    <!-- <a href="https://documentation.everything.dev"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <br />
    <a href="https://everything.dev">Use App</a>
    ·
    <a href="https://github.com/near-everything/app/issues">Report Bug</a>
    ·
    <a href="https://github.com/near-everything/app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

everything is one of several applications to aid in the creation of the [inventory of everything](https://everything.dev): a centralized database of real, tangible assets that can then be used as the foundation for decentralized marketplaces, services, tools-- in the effort to create a circular economy that makes sense for everyone.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/near-everything/app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

**Make sure you have the [everything-api](https://github.com/near-everything/api) running locally!**

1. Run the app in development mode:

```sh
 npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

   The page will reload if you make edits.<br />
   You will also see any lint errors in the console.

3. When prompted (/login), login with any phone number, real or fake. This will be saved locally to the firebase emulator and will not be available for anyone else to see. Once you enter in your phone number and submit, check the docker logs for container "firebase-emulator:firebase-emulator" and there should be a message "To verify the phone number \_**\_, use the code \_\_\_**". Enter in this code on the login page.

![Logging in tutorial][logging-in-tutorial]

<!--
<br/>
Launch the test runner in the interactive watch mode:

```sh
  npm run test
  ```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


_For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] TBD...

See the [open issues](https://github.com/near-everything/app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Elliot Braem - elliot@everything.dev

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- README adapted from [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/near-everything/app.svg?style=for-the-badge
[contributors-url]: https://github.com/near-everything/app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/near-everything/app.svg?style=for-the-badge
[forks-url]: https://github.com/near-everything/app/network/members
[stars-shield]: https://img.shields.io/github/stars/near-everything/app.svg?style=for-the-badge
[stars-url]: https://github.com/near-everything/app/stargazers
[issues-shield]: https://img.shields.io/github/issues/near-everything/app.svg?style=for-the-badge
[issues-url]: https://github.com/near-everything/app/issues
[license-shield]: https://img.shields.io/github/license/near-everything/app.svg?style=for-the-badge
[license-url]: https://github.com/near-everything/app/blob/main/LICENSE.txt
[logging-in-tutorial]: docs/logging-in.gif
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
