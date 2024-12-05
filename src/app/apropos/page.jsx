import React from 'react'
import Text from '@/components/Text'
import TextOrange from '@/components/TextOrange'

const Apropos = () => {
  return (
    <div className="text-white flex flex-col gap-6">
    <Text text={"À propos de "} className={"text-[34px] sm:text-[24px] md:text-[28px] md:text-center sm:text-center lg:text-center"}>
      <TextOrange name={"moi"} />
    </Text>
    <div>
      <Text text={"Je suis quelqu'un qui trouve une profonde joie dans l'art du design et du "} 
      className={"text-[40px] sm:text-[29px] md:text-[32px] font-[700] mb-0 pb-0 md:text-center sm:text-center lg:text-center"}>
        <TextOrange name={"codage."} />
      </Text>
    </div>
    <div className="">
      <Text
        text={
          "Portée par une passion inébranlable pour créer des solutions à la fois belles et simples, je m'engage pleinement dans chaque projet que je réalise. Mon objectif est d'allier esthétique et fonctionnalité, en plaçant toujours l'utilisateur au cœur de mes créations. Chaque ligne de code et chaque pixel reflètent mon souci du détail et mon amour pour mon métier. Bienvenue dans un univers où la simplicité élégante guide chaque conception."
        }
        className={"text-[#7D7373] text-[15px] md:text-center sm:text-center lg:text-center"}
      />
    </div>
  </div>
  )
}

export default Apropos
