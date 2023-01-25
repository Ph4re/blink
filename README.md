<a name="readme-top"></a>

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Blink</h3>

  <p align="center">
    An easy and customizable tool for pop-up, tooltip, dropdown and more
    <br />
    <a href="https://github.com/ph4re/blink"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ph4re/blink">View Demo</a>
    ·
    <a href="https://github.com/ph4re/blink/issues">Report Bug</a>
    ·
    <a href="https://github.com/ph4re/blink/issues">Request Feature</a>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Blink is a tool for quickly add tooltip, pop-up and more in your project within few lines of code.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You just need `npm` installed to get Blink.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Install NPM package

```sh
npm install @ph4re/blink
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

All you need to create a pop-up or else is two element at least:

- A trigger, like a button or any element you wish
- A popper, the element you want to appear based on the event you choose (hover or click)

Then, in your js file, you can import the Blink class and use the create method to create your pop-up, tooltip or whatever element you want to make appearance.

### Here is a exemple:

#### In html file

```html
<!DOCTYPE html>
<title>Popper example</title>

<button id="button" >I'm a button</button>
<div id="tooltip">I'm a tooltip</div>
```

#### In Js file

```js
import Blink from '@ph4re/blink'

const button = document.getElementById('button')
const tooltip = document.getElementById('tooltip')

Blink.create(button, tooltip)

```

### Customization

#### placement

The Blink `create` method will place your pop-up automatically based on the place available in the viewport.

By default, it will try at top of the trigger, then bottom, right and finally left. But you can choose by adding an option object as 3rd argument to `create` method.

##### Example

```js
const options = {
  placement: 'top'
}

Blink.create(trigger, tooltip, options)
```

> You may choose the placement among these values: `top`, `bottom`, `right`, `left`, `auto`.
>
> `auto` is the default option

#### Event

In addition to the `placement` option, you can choose what kind of event will trigger the pop-up with the `event` option

##### Example

```js
const options = {
  event: 'click'
}

Blink.create(trigger, tooltip, options)
```

> You may choose the `event` among these values: `click`, `hover`.
>
> `hover` is the default option

#### Arrow

Finally, you can add an arrow to the pop-up for UI/UX appreciation with the `arrow` option

##### Example

```js
const options = {
  arrow: true
}

Blink.create(trigger, tooltip, options)
```

> You may choose the `arrow` option among these values: `true`, `false`.
>
> `false` is the default option

<!--_For more examples, please refer to the [Documentation](https://example.com)_-->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Mthdht - [@mthdht](https://twitter.com/mthdht) - mthdht@gmail.com

Project Link: [https://github.com/ph4re/blink](https://github.com/ph4re/blink)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
