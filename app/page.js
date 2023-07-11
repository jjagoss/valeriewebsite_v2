import Image from 'next/image'
import styles from './page.module.css'
import about from '../public/about.jpg'
import info from '../public/info.jpg'
import resources from '../public/resources.jpg'
import contact from '../public/contact.jpg'
import Link from 'next/link';


export default function Home() {
  return (
    <div
      style={{
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(600px, auto))'
      }}>
      <div 
        style={{
          position: 'relative', height: '500px'
        }}>
        <Link href="/about">
        <Image src={about}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover'
        }}
        className={styles.gridImage}/>
        </Link>
      </div>
      <div 
        style={{
          position: 'relative', height: '500px'
        }}>
        <Link href="/info">
        <Image src={info}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover'
        }}
        className={styles.gridImage}/>
        </Link>
      </div>
      <div 
        style={{
          position: 'relative', height: '500px'
        }}>
        <Link href="/contact">
        <Image src={contact}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover'
        }}
        className={styles.gridImage}/>
        </Link>
      </div>
      <div 
        style={{
          position: 'relative', height: '500px'
        }}
        className={styles.gridImage}>
        <Link href="https://zencare.co/provider/therapist/valerie-goss">
        <Image src={resources}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover'
        }}/>
        </Link>
      </div>
    </div>
  )
}
