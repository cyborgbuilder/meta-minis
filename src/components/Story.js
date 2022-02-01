
import React from 'react'
import './story.css'
import ReactPlayer from 'react-player'

function Story() {
  return (
    <div className="containerStory">
        <div className='wrapStory'>
            <div className='leftStory'>
                <h1>The MMYC story</h1>
                <p>If we are to survive, then we have to invest in our future. Past decisions have been disastrously impactful and the World is on course for ultimate disaster, but we must still maintain hope. For without hope there is truly nothing left.

In youth there remains this real hope. Every new life brings with it the possibility to make a real difference for humanity. Where our past has failed us, they are our future, they are a fresh start, and a much needed new beginning. They can learn from those that have failed before them, they can adapt, change and make the World great again.

Their differences mark each as unique. Their traits, characteristics and personalities make each adorable in their own right. Never the same, always different, but wonderful every time, they are the future that we can look forward to with smiling eyes. Simply mentioning them is already making the metaverse a better place in which to exist. Now it is time to invest in this future. This is your chance to become a part of the evolution of a lifetime. A fantastic future awaits for all, you just have to commit to it.

The Kobi Tots mark a new dawn, and a fresh start. Arriving from Kobi’s Kingdom, each and every one is adorable. Now they are now adoptable too! Here is the chance for you to join the Kobi Klub and adopt your very own Kobi Tot. Some mischievious, some adventurous, some daring, some smart, but all amazing in many ways.

Forget about the trials and tribulations of days that are done. Do not ruminate on mistakes you may have made. Instead, you can embrace the glorious day that is tomorrow, and do so with the confidence that things are only ever going to be wonderful.</p>
            </div>
            <div className='rightStory'>

                <div className='player'>
                <ReactPlayer url='/images/new2.mp4' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' width='100%' height='85%' />
                </div>

            </div>
        </div>
    </div>
  );
}

export default Story;
