
import {AnimationFrameScheduler} from 'rxjs/scheduler/AnimationFrameScheduler'
import 'rxjs/add/operator/subscribeOn'
import parallaxing from '../../lib/parallaxing'


export default () => {
 

    // const parallax$ = parallaxing({ 
    //   target: $(document),
    //   maxOffsett: 5
    // })
    // .subscribeOn(AnimationFrameScheduler)
    // .share()

    // parallax$
    //   .subscribe(frame => {
    //     translate($('#cover .background-image'), frame)
    // })

    // parallax$
    //   .map(({top, left}) => ({ top: top / 100 * 20, left: left / 100 * 15 }))
    //   .subscribe(frame => {
    //     translate($('.photo'), frame)
    // })

    // parallax$
    //   .map(({top, left}) => ({ top: top / 100 * 40, left: left / 100 * 60 }))
    //   .subscribe(frame => {
    //     translate($('.link'), frame)
    // })

    // parallax$
    //   .map(({top, left}) => ({ top: (top / 100 * 35) * -1, left: (left / 100 * 35 * -1) }))
    //   .subscribe(frame => {
    //     translate($('.text-block'), frame)
    // })


}

const translate = (target, frame) => {
  const transform = `translate(${frame.left}px, ${frame.top}px)`
  target.css({
    '-ms-transform': transform,
    '-moz-transform': transform,
    '-webkit-transform': transform,
    'transform': transform
  })
}


