import Lottie, { LottieRefCurrentProps } from "lottie-react";
import bunnyAnimation from "./assets/bunny-love-animation.json"
import yayAnimation from "./assets/yay-animation.json"
import { useRef, useState } from "react";
import './App.css'

function App() {
  const bunnyRef = useRef<LottieRefCurrentProps>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [saidYes, setSaidYes] = useState(false)
  
  const handleMouseOver = () => {
    const container = containerRef.current;
  const button = buttonRef.current;

  if (!container || !button) {
    return;
  }

  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const buttonHeight = button.getBoundingClientRect().height;
  const buttonWidth = button.getBoundingClientRect().width;
  const buttonTop = button.getBoundingClientRect().top;
  const buttonLeft = button.getBoundingClientRect().left;

  let newTop = buttonTop;
  let newLeft = buttonLeft;

  while (Math.abs(newTop - buttonTop) < containerHeight /  3) {
    newTop = Math.floor(Math.random() * (containerHeight - buttonHeight));
  }

  while (Math.abs(newLeft - buttonLeft) < containerWidth /  3) {
    newLeft = Math.floor(Math.random() * (containerWidth - buttonWidth));
  }

  button.style.top = `${newTop}px`;
  button.style.left = `${newLeft}px`;
  button.style.position = 'absolute';
  }
  return (
    <div className='min-h-screen flex items-center justify-center lg:mx-48 text-white font-poppins relative'>
      <div className='text-center space-y-4'>
        <div ref={containerRef} className="space-y-4">
        {
          saidYes? (
            <h1 className='text-2xl font-bold'>
              I'm so happy you said yes! I love you! ❤️
            </h1>
          ) : (
            <h1 className='text-2xl font-bold'>
              Will you go out with me? 🥺
            </h1>
          )
        }
        {
          !saidYes && (
            <div className='flex gap-2 justify-center'>
              <button onClick={() => {
                setSaidYes(true)
              }}>Yes</button>
              <button ref={buttonRef} onMouseOver={handleMouseOver} onClick={handleMouseOver}>No</button>
            </div>
          )
        }
        </div>
        {
          saidYes ? (
            <Lottie animationData={yayAnimation} loop={true} />
          ) : (
            <Lottie animationData={bunnyAnimation} loop={true} />
          )
        }
        {/* <Lottie onComplete={() => {
          // bunnyRef.current?.setDirection(-1)
          // bunnyRef.current?.play()
        }} lottieRef={bunnyRef} animationData={bunnyAnimation} loop={true} /> */}
      </div>
    </div>
  )
}

export default App
