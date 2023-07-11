import Image from 'next/image'
import styles from '../page.module.css'

export default function About() {
  return (
    <div
    style={{
      display: "grid",
      gridAutoColumns: "1fr",
      gridAutoRows: "1fr",
      gridTemplateColumns: "1fr 1fr",
      gap: "0px 0px"
    }}>
    <div>
    <p
    style={{
      fontFamily: 'omnes-cycyrillic',
      fontWeight: '400',
      fontSize: '20px',
      letterSpacing: '0em',
      lineHeight: '1.6em',
      color: '#0e1a1b',
      margin: '10%'
    }}>
        In my practice I help individuals and couples navigate through the labyrinth of human relationships and life’s transitions, 
        be it marriage concerns, parenting, work/life balance, or stress management. The world is a very complex arena and many of us need a 
        neutral figure to guide us through the hurdles. <br/><br/>

        
        It is important to me that the therapeutic process proves to be useful rather than simply supportive and comforting. 
        In that way it is critical to me that every session provides my clients with concrete tools and solutions they can then apply immediately.

        <ul>
        <li>
        M.A. Clinical Psychology, John F. Kennedy University
        </li>
        <li>
        B.A. Women’s Studies, University of California, Berkeley
        </li>
    </ul>
    </p>
    </div>
    <div>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/TWqYdg100h8`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    </div>
    </div>
  )
}
