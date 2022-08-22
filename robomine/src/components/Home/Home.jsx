import React from 'react'
import Slider from './Slider'
import Aboutus from './Aboutus'
import Howitwork from './Howitwork'
import CurrencyRecentlyUsed from './CurrencyRecentlyUsed'
import OurPackages from './OurPackages'
import Transaction from './Transaction'
import UserComments from './UserComments'
import Events from './Events'

export default function Home() {
  return (
    <section id='home__section'>
      <Slider />
      <Aboutus />
      <Howitwork />
      <CurrencyRecentlyUsed />
      <OurPackages />
      <Transaction />
      <UserComments />
      <Events />
    </section>
  )
}
