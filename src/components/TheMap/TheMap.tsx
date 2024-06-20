'use client';
import React, { LegacyRef, useRef, useState } from 'react';
import Central from './Central';
import Southern from './Southern';
import Northwestern from './Northwestern';
import FarEastern from './FarEastern';
import Siberian from './Siberian';
import Urals from './Urals';
import { Volga } from './Volga';
import style from './regions.module.css';

export default function TheMap() {
  const mapRef = useRef<SVGSVGElement>(null);
  const [isBlur, setIsBlur] = useState(false);

  return (
    <div className={style.mapContainer}>
      <h2>Сервис</h2>
      <p>
        По вопросам сервисного сопровождения, оказания практической
        помощи в диагностике колёсных пар, расследовании
        <br /> причин отцепок вагонов, оборудованных кассетными
        подшипниками производства ООО "ЕПК-Бренко Подшипниковая
        <br />
        компания", Вы можете обратиться в сервисную службу:
      </p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.0'
        viewBox='0 0 1650 1000'
      >
        <g
          fill='#c5c5c5'
          className={
            isBlur
              ? [style.regions, style.blur].join(' ')
              : style.regions
          }
          id='regions'
          ref={mapRef}
        >
          <Central />
          <Southern />
          <Northwestern />
          <FarEastern setIsBlur={setIsBlur} />
          <Siberian setIsBlur={setIsBlur} />
          <Urals setIsBlur={setIsBlur} />
          <Volga setIsBlur={setIsBlur} />
        </g>
      </svg>
    </div>
  );
}
