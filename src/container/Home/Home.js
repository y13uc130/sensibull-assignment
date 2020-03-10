import React, { Component } from 'react';
import './style.scss';
import classnames from 'classnames';

class Home extends Component {
  render() {
    const data = {
      heading : 'pricing',
      sections: [
        {
          title: 'pro',
          price: '20$/day',
          options: ['1 month', '3 months'],
          extraFeatures: ['Lite Features', 'Starter Features'],
          bulletFeatures: ['Virtual Trading', 'Strategy Builder', 'Option Screener'],
          popular: true
        },
        {
          title: 'lite',
          price: '20$/day',
          options: ['1 month', '3 months'],
          extraFeatures: ['Lite Features', 'Starter Features'],
          bulletFeatures: ['Virtual Trading', 'Strategy Builder', 'Option Screener'],
        },
        {
          title: 'starter',
          price: '20$/day',
          options: ['1 month', '3 months'],
          extraFeatures: ['Lite Features', 'Starter Features'],
          bulletFeatures: ['Virtual Trading', 'Strategy Builder', 'Option Screener'],
        }
      ],
      secondSection: [
        {
          img: '',
          title: 'Find great trades with professional tools',
          desc: 'Find great trades with professional tools'
        },
        {
          img: '',
          title: 'Find great trades with professional tools',
          desc: 'Find great trades with professional tools'
        },
        {
          img: '',
          title: 'Find great trades with professional tools',
          desc: 'Find great trades with professional tools'
        }
      ]
    }
    return (
      <div className="MainPricingWrapper">
        <div className="PricingBanner layout justify-center align-center" >
          <span className="h2 text-uppercase pernia-white-color">
            {data.heading}
          </span>
          <div className="AllSections ">
            <div className="pricingSections layout justify-space-between prel">
              {
                data.sections && data.sections.length && data.sections.map((section, index)=>{
                  return (
                    <div className={classnames("eachPricingSection prel", index===0 && 'active')} >
                      <div className="headerprice layout justify-space-between prel">
                        {section.popular && <div className="popularTag layout justify-center"><span>Popular</span></div>}
                        <div className="h5 bold">
                          {section.title}
                        </div>
                        <div className="h5 font-normal price">{section.price}</div>
                      </div>
                      <div className="pricingBody h6 font-normal prel layout column align-center">
                        <div className="optionSection layout justify-center prel">
                          {
                            section.options.map((option, i)=>{
                              return (
                                <div className={classnames("eachOption", i===0 && 'active')} >
                                  {option}
                                </div>
                              )
                            })
                          }
                        </div>
                        <div className="actualPricing">1300</div>
                        <div className="specialPricing"><span>800</span> / month</div>
                        <div className="notePricing">You save 460 / month</div>
                      </div>
                      <div className="extraDescWrapper">
                        <div className="h6 m-t-25 p-l-20 bold" >You will get,</div>
                        <div className="layout p-l-20 m-t-5">
                        {
                          section.extraFeatures.map((feature)=>{
                            return (
                              <div className="extraFeature m-r-10">{feature}</div>
                            )
                          })
                        }
                        </div>
                        <ul className="bulletPointsWrapper m-t-5">
                          {
                            section.bulletFeatures.map((bullet)=>{
                              return (
                                <li className="extraBullet">{bullet}</li>
                              )
                            })
                          }
                        </ul>
                        <div className="h6 m-t-20 p-l-20 bold">Analytic Tools</div>
                        <ul className="bulletPointsWrapper m-t-5">
                          {
                            section.bulletFeatures.map((bullet)=>{
                              return (
                                <li className="extraBullet">{bullet}</li>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className="chooseBtn cursor-pointer m-t-25">CHOOSE {section.title}</div>
                    </div>
                  )
                })
                }
            </div>
            <div className="secondSection layout justify-center">
              {
                data.secondSection.map((section)=>{
                  return (
                    <div className="sectionWrap text-center">
                      <div className="layout justify-center">
                        <div className="imgWrap"></div>
                      </div>
                      <div>{section.title}</div>
                      <div className="desc">{section.desc}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;