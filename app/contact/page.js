"use client";

import Image from 'next/image'
import styles from '../page.module.css'
import { useState } from 'react'

export default function Contact() {
    return (
        <div style={{
            margin: '0px'
        }}>
            <h1>Let's Connect</h1>
            <p><b>Phone:</b> 650 279-7717</p>
            <p><b>Email:</b> vagocatherapist@gmail.com</p>
            <p><b>Business Address:</b> 329 S San Antonio Rd #3, Los Altos, CA 94022</p>
        </div>
    )
}
