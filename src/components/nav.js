import * as React from 'react'

import routes from '../routes'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <nav className="h-max py-2 wrapper-x z-10">
      <div className="flex items-center justify-between">
        <Link to={routes.home}>
          <div className="flex h-12 items-center w-32">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="187"
              height="40"
              viewBox="0 0 187 40"
              preserveAspectRatio="xMidYMid meet"
              colorInterpolationFilters="sRGB"
            >
              <defs>
                <linearGradient id="92" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fa71cd" />{' '}
                  <stop offset="100%" stopColor="#9b59b6" />
                </linearGradient>
                <linearGradient id="93" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f9d423" />{' '}
                  <stop offset="100%" stopColor="#f83600" />
                </linearGradient>
                <linearGradient id="94" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0064d2" />{' '}
                  <stop offset="100%" stopColor="#1cb0f6" />
                </linearGradient>
                <linearGradient id="95" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f00978" />{' '}
                  <stop offset="100%" stopColor="#3f51b1" />
                </linearGradient>
                <linearGradient id="96" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7873f5" />{' '}
                  <stop offset="100%" stopColor="#ec77ab" />
                </linearGradient>
                <linearGradient id="97" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f9d423" />{' '}
                  <stop offset="100%" stopColor="#e14fad" />
                </linearGradient>
                <linearGradient id="98" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#009efd" />{' '}
                  <stop offset="100%" stopColor="#2af598" />
                </linearGradient>
                <linearGradient id="99" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffcc00" />{' '}
                  <stop offset="100%" stopColor="#00b140" />
                </linearGradient>
                <linearGradient id="100" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d51007" />{' '}
                  <stop offset="100%" stopColor="#ff8177" />
                </linearGradient>
                <linearGradient id="102" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a2b6df" />{' '}
                  <stop offset="100%" stopColor="#0c3483" />
                </linearGradient>
                <linearGradient id="103" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7ac5d8" />{' '}
                  <stop offset="100%" stopColor="#eea2a2" />
                </linearGradient>
                <linearGradient id="104" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ecbc" />{' '}
                  <stop offset="100%" stopColor="#007adf" />
                </linearGradient>
                <linearGradient id="105" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#b88746" />{' '}
                  <stop offset="100%" stopColor="#fdf5a6" />
                </linearGradient>
              </defs>{' '}
              <g className="iconlinesvg-g iconlinesvg">
                <g className="tp-name">
                  <g transform="translate(0, 0)">
                    <g>
                      <g className="imagesvg">
                        <g>
                          <rect
                            fill="#213065"
                            fillOpacity="0"
                            strokeWidth="2"
                            x="0"
                            y="0"
                            width="27.05002929553237"
                            height="39.383878536948544"
                            className="image-rect"
                          />{' '}
                          <svg
                            x="0"
                            y="0"
                            width="27.05002929553237"
                            height="39.383878536948544"
                            filtersec="colorsb7199168680"
                            className="image-svg-svg primary"
                            style={{ overflow: 'visible' }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -0.0034530102275311947 39.52468490600586 57.54684066772461"
                            >
                              <path
                                fill="#213065"
                                d="M21.86 34.304l9.15-9.15 1.088 1.089-9.15 9.15zM18.444 33.359l9.56-9.56 1.09 1.088-9.56 9.56zM15.164 32.269l9.694-9.695 1.089 1.09-9.694 9.694zM11.876 31.17l9.702-9.701 1.096 1.096-9.702 9.701zM8.9 29.774l9.426-9.426 1.097 1.096-9.426 9.426zM5.266 53.454l8.21-8.21 1.096 1.096-8.21 8.21zM2.403 51.956L10.6 43.76l1.089 1.09-8.196 8.195zM0 49.986l7.934-7.934L9.03 43.15l-7.933 7.933zM30.881 13.163l6.972-6.972 1.09 1.089-6.973 6.972zM28.15 11.516l7.92-7.92 1.096 1.096-7.92 7.92zM15.52 18.89a3.91 3.91 0 0 1-1.08-2.82 5.31 5.31 0 0 1 1.8-4.23c1.19-1 3-1.56 5.46-1.56a11.67 11.67 0 0 1 3.79.56L26 11l8.15-8.15a26.9 26.9 0 0 0-2.91-1.25A27.05 27.05 0 0 0 26.59.41a31 31 0 0 0-5-.41 22.43 22.43 0 0 0-8.23 1.41 18.39 18.39 0 0 0-6.1 3.77 15.92 15.92 0 0 0-3.75 5.37 15.69 15.69 0 0 0-1.28 6.18 17.81 17.81 0 0 0 1.08 6.62 13.65 13.65 0 0 0 2.84 4.48 15.13 15.13 0 0 0 1.6 1.4L16.94 20a7.83 7.83 0 0 1-1.42-1.11z"
                              />
                              <path
                                d="M35.63 28.62a15.33 15.33 0 0 0-2.26-1.83l-9.09 9.09a7.74 7.74 0 0 1 1.9 1.55 4.73 4.73 0 0 1 1.09 3.21q0 3.4-2 5a8.67 8.67 0 0 1-5.53 1.57 12.82 12.82 0 0 1-4.56-.74c-.36-.14-.71-.28-1.05-.43L6 54.2a29.59 29.59 0 0 0 2.81 1.25A31.55 31.55 0 0 0 14 57a27.53 27.53 0 0 0 5.36.54 23.58 23.58 0 0 0 8.55-1.45 18.17 18.17 0 0 0 6.34-4 17 17 0 0 0 3.92-5.93 19.57 19.57 0 0 0 1.35-7.3 15.12 15.12 0 0 0-1.08-6 13.38 13.38 0 0 0-2.81-4.24z"
                                fill="#FFD966"
                              />
                            </svg>
                          </svg>{' '}
                        </g>
                      </g>
                    </g>
                  </g>
                  <g transform="translate(31, 3.044330388212231)">
                    <g fill="#213065" transform="scale(1)">
                      <path
                        d="M34.84-16.30L34.84-16.30Q34.84-12.77 33.62-9.73Q32.40-6.69 30.19-4.44Q27.97-2.19 24.85-0.92Q21.73 0.36 17.93 0.36L17.93 0.36Q14.13 0.36 11.00-0.92Q7.87-2.19 5.65-4.44Q3.42-6.69 2.20-9.73Q0.98-12.77 0.98-16.30L0.98-16.30Q0.98-19.83 2.20-22.88Q3.42-25.92 5.65-28.15Q7.87-30.39 11.00-31.66Q14.13-32.94 17.93-32.94L17.93-32.94Q21.73-32.94 24.85-31.65Q27.97-30.37 30.19-28.13Q32.40-25.89 33.62-22.85Q34.84-19.81 34.84-16.30ZM27.10-16.30L27.10-16.30Q27.10-18.72 26.48-20.65Q25.85-22.58 24.68-23.93Q23.50-25.27 21.80-25.98Q20.10-26.70 17.93-26.70L17.93-26.70Q15.74-26.70 14.03-25.98Q12.32-25.27 11.15-23.93Q9.97-22.58 9.35-20.65Q8.72-18.72 8.72-16.30L8.72-16.30Q8.72-13.86 9.35-11.93Q9.97-10.00 11.15-8.65Q12.32-7.31 14.03-6.61Q15.74-5.90 17.93-5.90L17.93-5.90Q20.10-5.90 21.80-6.61Q23.50-7.31 24.68-8.65Q25.85-10.00 26.48-11.93Q27.10-13.86 27.10-16.30Z"
                        transform="translate(-0.9838748028630353, 32.937445104937524)"
                      />
                    </g>
                  </g>
                  <g transform="translate(68, 3.044330388212231)">
                    <g fill="#213065" transform="scale(1)">
                      <path
                        d="M16.23-5.97L16.23-5.97Q17.75-5.97 18.95-6.47Q20.15-6.98 20.97-7.92Q21.80-8.85 22.24-10.21Q22.67-11.56 22.67-13.28L22.67-13.28L22.67-32.58L30.23-32.58L30.23-13.28Q30.23-10.29 29.26-7.78Q28.29-5.28 26.48-3.47Q24.66-1.65 22.07-0.65Q19.48 0.36 16.23 0.36L16.23 0.36Q12.97 0.36 10.38-0.65Q7.78-1.65 5.97-3.47Q4.16-5.28 3.20-7.78Q2.24-10.29 2.24-13.28L2.24-13.28L2.24-32.58L9.79-32.58L9.79-13.30Q9.79-11.58 10.23-10.23Q10.67-8.88 11.49-7.93Q12.32-6.98 13.52-6.47Q14.71-5.97 16.23-5.97Z"
                        transform="translate(-2.236079097415989, 32.937445104937524)"
                      />
                    </g>
                  </g>
                  <g transform="translate(99, 3.044330388212231)">
                    <g fill="#213065" transform="scale(1)">
                      <path
                        d="M22.72-29.47L20.84-25.96Q20.50-25.42 20.14-25.16Q19.77-24.89 19.19-24.89L19.19-24.89Q18.67-24.89 18.08-25.21Q17.49-25.54 16.74-25.94Q15.99-26.34 15.03-26.67Q14.06-26.99 12.84-26.99L12.84-26.99Q10.71-26.99 9.67-26.08Q8.63-25.18 8.63-23.64L8.63-23.64Q8.63-22.65 9.26-22.00Q9.88-21.35 10.90-20.88Q11.92-20.42 13.23-20.02Q14.53-19.63 15.90-19.15Q17.26-18.67 18.57-18.02Q19.88-17.37 20.90-16.37Q21.91-15.36 22.54-13.92Q23.17-12.48 23.17-10.44L23.17-10.44Q23.17-8.18 22.38-6.22Q21.60-4.25 20.11-2.78Q18.63-1.32 16.45-0.48Q14.27 0.36 11.49 0.36L11.49 0.36Q9.97 0.36 8.40 0.04Q6.82-0.27 5.34-0.84Q3.87-1.41 2.57-2.19Q1.27-2.97 0.31-3.94L0.31-3.94L2.55-7.47Q2.80-7.87 3.24-8.12Q3.69-8.36 4.20-8.36L4.20-8.36Q4.87-8.36 5.56-7.94Q6.24-7.51 7.10-7.00Q7.96-6.48 9.08-6.06Q10.20-5.63 11.72-5.63L11.72-5.63Q13.77-5.63 14.91-6.54Q16.06-7.45 16.06-9.41L16.06-9.41Q16.06-10.55 15.43-11.27Q14.80-11.99 13.79-12.45Q12.77-12.92 11.47-13.28Q10.17-13.64 8.81-14.08Q7.45-14.51 6.15-15.15Q4.85-15.79 3.83-16.83Q2.82-17.87 2.19-19.42Q1.57-20.97 1.57-23.26L1.57-23.26Q1.57-25.09 2.30-26.83Q3.04-28.58 4.47-29.94Q5.90-31.31 7.98-32.12Q10.06-32.94 12.75-32.94L12.75-32.94Q14.24-32.94 15.66-32.70Q17.08-32.47 18.36-32.01Q19.63-31.55 20.74-30.91Q21.85-30.28 22.72-29.47L22.72-29.47Z"
                        transform="translate(-0.3130510736382385, 32.937445104937524)"
                      />
                    </g>
                  </g>
                  <g transform="translate(125, 3.044330388212231)">
                    <g fill="#213065" transform="scale(1)">
                      <path
                        d="M0.45-32.58L26.34-32.58L26.34-26.59L17.17-26.59L17.17 0L9.62 0L9.62-26.59L0.45-26.59L0.45-32.58Z"
                        transform="translate(-0.44721581948319794, 32.937445104937524)"
                      />
                    </g>
                  </g>
                  <g transform="translate(154, 3.044330388212231)">
                    <g fill="#213065" transform="scale(1)">
                      <path
                        d="M20.39-32.58L33.00 0L27.15 0Q26.16 0 25.52-0.46Q24.89-0.92 24.64-1.63L24.64-1.63L22.72-7.31L10.33-7.31L8.41-1.63Q8.18-1.01 7.54-0.50Q6.89 0 5.95 0L5.95 0L0.04 0L12.66-32.58L20.39-32.58ZM15.07-21.33L12.07-12.45L20.97-12.45L17.98-21.38Q17.69-22.23 17.30-23.38Q16.90-24.53 16.52-25.87L16.52-25.87Q16.17-24.51 15.79-23.34Q15.41-22.18 15.07-21.33L15.07-21.33Z"
                        transform="translate(-0.04472158194831979, 32.937445104937524)"
                      />
                    </g>
                  </g>
                </g>{' '}
              </g>
              <defs v-gra="od" />
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
