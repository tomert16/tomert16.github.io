import AnimatedCursor from "react-animated-cursor"

export const AnimCursor = () => {
  return (
    <AnimatedCursor 
    innerSize={12}
      outerSize={12}
      color='255,0,0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}
