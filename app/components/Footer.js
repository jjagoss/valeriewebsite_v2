import styles from '../page.module.css'
import Image from 'next/image'
export default function Footer() {
    return (
    <div style={{
        backgroundColor: '#0e3f48',
        color: 'white'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '2px',
        margin: '0px'
      }}>
        <h3>Valerie Goss, LMFT</h3>
        <p>License Number: MFC38086</p>
      </div>
        <div>
        </div>
      </div>
    )
  }