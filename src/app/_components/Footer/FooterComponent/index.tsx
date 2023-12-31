'use client'

import React from 'react'
import Image from 'next/image'

import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'

const FooterComponent = () => {
  const pathname = usePathname()


  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>

<Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

    </footer>
  )
}

export default FooterComponent