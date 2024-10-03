import React from 'react'
import Card from './card/Card'

const Cards = () => {
    const data=[
        {
            "lang": "Python",
            "url": "https://cdn.svgporn.com/logos/python.svg",
            "fcolor": "#00c3ff",
            "scolor": "#ffff1c"
          },
          {
            "lang": "Javascript",
            "url": "https://cdn.svgporn.com/logos/javascript.svg",
            "fcolor": "#D31027",
            "scolor": "#EA384D"
          },
          {
            "lang": "React",
            "url": "https://cdn.svgporn.com/logos/react.svg",
            "fcolor": "#000428",
            "scolor": "#004e92"
          },
          {
            "lang": "Vue",
            "url": "https://cdn.svgporn.com/logos/vue.svg",
            "fcolor": "#cc2b5e",
            "scolor": "#753a88"
          } 
    ]
  return (
    <>
    {
        data.map(({lang,url,scolor,fcolor})=>{
            return <Card key={lang} lang={lang}img={url} fcolor={fcolor} scolor={scolor}/>;

        })
    }
      
    </>
     
  )
}

export default Cards