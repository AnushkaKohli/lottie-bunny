# Lottie Animations in React

You might have always wanted to add some cool animations to your websites and it might be tiresome to write complicated motion design codes.

Well, Lottie can make things much easy for you.
All you need to do is select your desired lottie animation on [LottieFiles]("https://lottiefiles.com/") and download the JSON code for it.

Also add `npm i lottie-react`. It gives developers full control over Lottie instance with minimal implementation by wrapping lottie-web in a Component or Hook that can be easily used in React applications.

## Usage

### Using the component

```jsx
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const App = () => <Lottie animationData={groovyWalkAnimation} loop={true} />;

export default App;
```

### Using the Hook

```jsx
import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const App = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;
```
