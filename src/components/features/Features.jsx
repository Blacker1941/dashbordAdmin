import React from 'react'
import '../../css/components/features.css'
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

export default function Features() {
  return (
    <div className="features">
        <div className="featureItem">
            <span className="featureTitle">
                Revanue
            </span>
            <div className="featureConteiner">
                <span className="featureMoney">
                    $2,451
                </span>
                <span className="featureRate">
                    -11.4 <FaArrowDown className='featureIcon negative' />
                </span>
            </div>
            <span className="featureSub">
                Campared to last month
            </span>
        </div>
        <div className="featureItem">
            <span className="featureTitle">
                Sales
            </span>
            <div className="featureConteiner">
                <span className="featureMoney">
                    $4,415
                </span>
                <span className="featureRate">
                    -1.4 <FaArrowDown className='featureIcon negative' />
                </span>
            </div>
            <span className="featureSub">
                Campared to last month
            </span>
        </div>
        <div className="featureItem">
            <span className="featureTitle">
                Cost
            </span>
            <div className="featureConteiner">
                <span className="featureMoney">
                    $2,225
                </span>
                <span className="featureRate">
                    +2.4 <FaArrowUp className='featureIcon' />
                </span>
            </div>
            <span className="featureSub">
                Campared to last month
            </span>
        </div>
    </div>
  )
}
