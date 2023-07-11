import Image from 'next/image'

export default function Info() {
    return (
            <div
            style={{
                display: 'flex',
                fontFamily: 'Arial,Helvetica,sans-serif',
                gap: '0px',
            }}>
                <div>
                <div
                style={{
                    textAlign: 'left'
                }}>
                <h3>Specialties</h3>
                    <p><b>Adolescent mental health</b> - Working with adolescents, teenagers, and parents on social, academic, and/or emotional challenges throughout teenage years; addressing anxiety, family conflicts, peer relationships, school stress, transition to college, social media pressures, self-esteem, hopelessness about the future, emotional disregulation
                    </p>
                    <p><b>Anxiety</b> - Coping with excessive worry, nervousness, or stress; intense discomfort in social settings (social anxiety); sudden and intense feelings of panic (panic disorder)</p>
                    <p><b>Depression</b> - Providing support and promoting healing of hopelessness, low motivation and energy, sadness, irritability, sleep disturbance, and loss of interest and pleasure in life</p>
                    <p><b>Existential crisis & challenges</b> - Supportive exploration of meaning and purpose in one’s life; finding one’s path in the face of existential anxiety, dread, and feelings of meaninglessness</p>
                    <p><b>Life transitions</b> - Coping with difficult or impactful life changes, such as moving to a new area, relationship transitions, child rearing, or career changes; learning self-care to better manage resulting stress</p>
                    <p><b>Relationship issues</b> - Understanding one’s wants and needs in relationships; exploring patterns of interaction, addressing concerns, and strengthening satisfaction in relationships and dating</p>
                </div>
                </div>
                <div
                style={{
                    textAlign: 'right'
                }}>
                    <h3>Accepted Insurance</h3>
                    <ul>
                        <li>Aetna</li>
                    </ul>
                    <h3>Out of Pocket Fees</h3>
                    <ul>
                        <li>Individual Sessions: $250 (55min)</li>
                        <li>Sliding scale: $200 - $250</li>
                    </ul>
                </div>
            </div>
    )
}