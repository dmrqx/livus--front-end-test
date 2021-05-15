import React from 'react'

import { useCreator } from '../../contexts/CreatorContext'

import './ProfileHero.styles.css'

function ProfileHero () {
  const {
    creator: profile
  } = useCreator()

  return (
    <>
      {!!profile?.id && (
        <header
          className='profile-hero'
          style={{ '--background-url': `url(${profile.background_url})` }}
        >
          <div className='container container--center container--full-height'>
            <div className='profile-header profile-header--horizontal'>
              <div className='profile-header__avatar-container'>
                <img
                  src={profile.photo_url}
                  alt=''
                  className='profile-header__avatar profile-header__avatar--rounded'
                />
              </div>

              <div className='profile-header__info'>
                <h1 className='profile-header__name'>{profile.name}</h1>
                <p className='profile-header__tagline'>{profile.headline}</p>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  )
}

export default ProfileHero
