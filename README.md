# Vite React TS Starter

React Typescript Starter with [vite](https://vitejs.dev), [eslint](https://eslint.org), [prettier](https://prettier.io), [husky](https://typicode.github.io/husky) and [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Quick start
Copy repo and run development server
```
npx degit sanpyaelin/vite-react-ts my-project
cd my-project

yarn
yarn dev
```

## Building the App
You may run ```yarn build``` command to build the app.
```
yarn build
```
By default, the build output will be placed at ```dist```. You may deploy this ```dist``` folder to any of your preferred platforms.

## Testing the App Locally
Once you've built the app, you may test it locally by running ```yarn preview``` command.
```
yarn preview
```
The vite preview command will boot up local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

You may configure the port of the server by passing ```--port``` flag as an argument.
```
{
  "scripts": {
    "preview": "vite preview --port 8080"
  }
}
```
Now the ```preview``` command will launch the server at http://localhost:8080.

## Husky git hooks
Run ```yarn prepare``` to enable git hook. [docs](https://typicode.github.io/husky/)