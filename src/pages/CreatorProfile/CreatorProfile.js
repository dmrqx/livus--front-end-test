import React from 'react'

import {
  ClassesCatalog,
  MainFooter,
  MainHeader,
  ProfileHero,
  ProfileNav,
  SubscribersList
} from '../../components'
import { Layout } from '../../components/ui'
import { CreatorProvider } from '../../contexts/CreatorContext'

function CreatorProfile () {
  return (
    <Layout footer={<MainFooter />} header={<MainHeader />}>
      <CreatorProvider>
        <ProfileHero />
        <ProfileNav />

        <ClassesCatalog />

        <SubscribersList />
      </CreatorProvider>
    </Layout>
  )
}

export default CreatorProfile
