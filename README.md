## aframe-speech-controls-component

A Speech Controls component for [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| positionStep | Set a step which object changes the position | 1 |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.3.2/aframe.min.js"></script>
  <script src="https://rawgit.com/Utopiah/aframe-speech-controls-component/master/dist/aframe-speech-controls-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity speech-controls="positionStep: 1;"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-speech-controls-component
```

Then register and use.

```js
require('aframe');
require('aframe-speech-controls-component');
```

### Contibuting

- Fork the repository
- Clone the project
- Install dev dependencies 
```sh
npm install
```
- Start development environment which fires up browser and listens changes on files you edit.
```sh
npm start
```
