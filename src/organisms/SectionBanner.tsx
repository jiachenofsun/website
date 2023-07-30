import { TranslucentBanner } from "../theme"
import {Controller, Scene} from 'react-scrollmagic'
import {Timeline, Tween} from 'react-gsap'
import {gsap} from "gsap"
import {RoughEase} from "gsap/EasePack"
import {TextPlugin} from "gsap/TextPlugin"
import {BannerButton} from '../molecules/BannerButton'

gsap.registerPlugin(TextPlugin, RoughEase)
type SectionBannerProps = {
    bgUrl: string
    path: string
    text: string
  }
  
export const SectionBanner = ({bgUrl, path, text}: SectionBannerProps): JSX.Element => {
    return (
      <TranslucentBanner
        bgUrl={bgUrl}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Controller>
          <Scene
            duration={600}
            triggerHook="onEnter"
          >
            <Timeline target={<BannerButton path={path}/>}>
              <Tween to={{text}} target="typo"/>
            </Timeline>
          </Scene>
        </Controller>
      </TranslucentBanner>
    )
  }
  