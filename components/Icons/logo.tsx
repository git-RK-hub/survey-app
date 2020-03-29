import React from 'react';

type LogoProps = {
    width?: string;
    height?: string;
}

export default ({ width = '50px', height = '50px' }: LogoProps) => (
    <svg width={width} height={height} viewBox="0 0 50 50" version="1.1">
        <title>Logo</title>
        <desc>Created with Sketch.</desc>
        <g id="Ideation" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Age" transform="translate(-306.000000, -30.000000)">
                <rect fill="#FFFFFF" x="0" y="0" width="1920" height="1217"/>
                <g id="Group" transform="translate(306.000000, 30.000000)">
                    <g id="LogoSmallSolid-Copy">
                        <rect id="Rectangle" fill="#1968FC" x="0" y="0" width="50" height="50"/>
                        <g id="icons8-laurel_wreath" strokeWidth="1" transform="translate(3.000000, 6.000000)"
                           fill="#FFFFFF">
                            <path
                                d="M20.1575604,35.4828913 C13.3193786,33.9197318 8.52191078,27.9157785 8.52191078,20.9526138 C8.52191078,16.4407672 10.5984267,12.1420788 14.1070226,9.33549706 C14.1070226,9.33549706 14.7156566,8.8736545 14.9304686,8.6604964 C16.0403305,7.73681128 16.6847665,6.3512836 16.7563705,4.85917686 C16.8279745,3.04733297 16.0045285,1.30654178 14.5008446,0.205224904 C14.1428246,-0.0434595521 13.6773986,-0.0789859029 13.3193786,0.169698553 C11.7440907,1.12891003 10.7774367,2.79864851 10.6700307,4.61049241 C10.5984267,5.99602009 11.0638527,7.31049507 11.9231007,8.34075924 C11.1354567,9.05128626 10.4194167,9.83286598 9.81078273,10.649972 C9.27375275,9.05128626 8.02068279,7.77233763 6.37379085,7.20391602 C5.94416686,7.06181061 5.51454287,7.16838966 5.22812688,7.52365317 C4.01085892,8.90918085 3.58123494,10.7920774 4.04666092,12.5328686 C4.47628491,14.0960281 5.58614687,15.4105031 7.05402882,16.0855037 C6.80341483,16.9381361 6.62440484,17.7907686 6.48119684,18.6789273 C6.30218685,18.5012956 6.08737485,18.3236638 5.83676086,18.1815584 C4.33307691,17.1157679 2.39976897,16.9026098 0.681273031,17.5420841 C0.287451044,17.6841895 0.00103505309,18.0749794 0.00103505309,18.5012956 C-0.0347669457,20.3131395 0.860283025,22.0539307 2.36396698,23.0841948 C3.29481895,23.7236691 4.40468091,24.0789327 5.55034487,24.0789327 C5.90836486,24.0789327 6.26638485,24.0434063 6.62440484,23.9723536 C6.76761283,24.7894597 6.98242483,25.5710394 7.23303882,26.3170928 C6.91082083,26.2105137 6.55280084,26.139461 6.19478085,26.139461 C4.36887891,25.9618292 2.57877897,26.743409 1.43311501,28.164463 C1.14669902,28.5197265 1.11089702,28.9815691 1.32570901,29.3368326 C2.22075898,30.9355184 3.83184893,32.0013089 5.69355287,32.1434143 C5.87256286,32.1434143 6.01577086,32.1789406 6.19478085,32.1789406 C7.48365281,32.1789406 8.70092077,31.7526244 9.66757474,30.9355184 C10.2046047,31.6460454 10.7774367,32.321046 11.3860707,32.9605204 C11.3502687,32.9605204 11.3144667,32.9960467 11.2786647,32.9960467 C9.48856474,33.4578893 8.09228679,34.7723643 7.48365281,36.5131554 C7.34044481,36.9394717 7.44785081,37.3657879 7.8058708,37.6499987 C8.80832677,38.5381574 10.0971987,39 11.4218727,39 C11.8872987,39 12.3885266,38.9289473 12.8539526,38.8223682 C14.2502306,38.4315784 15.4316965,37.5434196 16.1835385,36.2999973 C17.2934005,36.8328926 18.4748665,37.2236825 19.6921344,37.5078933 C19.7637384,37.5434196 19.8711444,37.5434196 19.9427484,37.5434196 C20.4439764,37.5434196 20.8736004,37.2236825 20.9810064,36.7263135 C21.0884124,36.1934183 20.7303924,35.6249967 20.1575604,35.4828913 Z M13.8564086,2.47891136 C14.3934386,3.11838567 14.6798546,3.93549174 14.6440526,4.78812416 C14.6082506,5.64075658 14.2502306,6.4223363 13.6773986,7.02628426 C13.6773986,7.02628426 13.6773986,7.02628426 13.6773986,7.02628426 C13.1403686,6.38680995 12.8539526,5.56970388 12.8897546,4.71707146 C12.8897546,3.86443904 13.2477746,3.08285932 13.8564086,2.47891136 Z M3.65283893,21.37893 C2.93679896,20.8815611 2.47137297,20.1710341 2.29236298,19.353928 C3.11580895,19.2473489 3.97505692,19.4249807 4.6910969,19.9223496 C5.40713688,20.4197185 5.87256286,21.1302455 6.05157286,21.9473516 C5.19232488,22.089457 4.36887891,21.8762989 3.65283893,21.37893 Z M6.15897885,11.9999734 C5.94416686,11.147341 6.01577086,10.2947085 6.40959284,9.58418152 C7.12563282,10.0104977 7.6268608,10.7210247 7.8774748,11.5381308 C8.09228679,12.3907632 8.02068279,13.2433957 7.6268608,13.9539227 C6.91082083,13.5276065 6.40959284,12.8526058 6.15897885,11.9999734 Z M5.87256286,30.0828859 C5.01331489,30.0118332 4.22567092,29.6210434 3.65283893,29.0170954 C4.29727491,28.5197265 5.15652288,28.2710421 6.01577086,28.3420948 C6.87501883,28.4131475 7.6626628,28.8039373 8.23549478,29.4078853 C7.59105881,29.9052542 6.73181083,30.1539386 5.87256286,30.0828859 Z M12.2811207,36.7973662 C11.4218727,37.0105244 10.5626247,36.9394717 9.84658473,36.5486818 C10.2762087,35.8381548 10.9922487,35.3407859 11.8156947,35.0921014 C12.6749426,34.8789433 13.5341906,34.949996 14.2502306,35.3407859 C13.8206066,36.0513129 13.1045666,36.5842081 12.2811207,36.7973662 Z"
                                id="Shape" fillRule="nonzero"/>
                            <path
                                d="M39.4435119,24.0516517 C40.5546023,24.0516517 41.6656927,23.7320908 42.6334165,23.0574622 C44.1387648,21.9922593 45.0348054,20.2879345 44.9989638,18.4770895 C44.9989638,18.0510083 44.7122308,17.6604339 44.3179729,17.5184068 C42.5975749,16.879285 40.6621272,17.0923256 39.1567789,18.1575286 C38.9417292,18.2995556 38.7266794,18.4770895 38.5116297,18.6546233 C38.4041048,17.7669542 38.189055,16.9147918 37.9381637,16.0626294 C39.4076703,15.3880009 40.5187607,14.1097573 40.9488602,12.5119528 C41.4148013,10.7366146 40.9847018,8.89026275 39.7660865,7.50549889 C39.4793535,7.185938 39.0134124,7.04391094 38.6191545,7.185938 C36.9704398,7.75404625 35.7159829,9.03228982 35.1783585,10.6300943 C34.5332093,9.81343866 33.8522184,9.03228982 33.0637027,8.3221545 C33.9239017,7.2924583 34.3898428,5.97870797 34.3181595,4.59394411 C34.2464763,2.78309907 33.2429108,1.11428108 31.6658793,0.155598411 C31.307463,-0.0574421826 30.8056803,-0.0574421826 30.4831057,0.191105177 C29.013599,1.29181491 28.1534,2.99613966 28.2250833,4.84249147 C28.2967665,6.29826886 28.9419158,7.68303272 30.0530062,8.64171539 C30.3038975,8.85475599 30.8773635,9.31634394 30.8773635,9.31634394 C34.3898428,12.1213784 36.468657,16.4176971 36.468657,20.9270563 C36.468657,27.8863824 31.7017209,33.8870258 24.8201289,35.4493234 C24.2466629,35.5913505 23.8882467,36.1594588 24.0316132,36.727567 C24.139138,37.2246617 24.6050792,37.5442226 25.0710203,37.5442226 C25.1427035,37.5442226 25.2502284,37.5442226 25.3219117,37.5087158 C26.5763685,37.2246617 27.7233005,36.7985805 28.8343909,36.3014858 C29.5512234,37.5087158 30.733997,38.4318918 32.167662,38.8224662 C32.6336032,38.9644932 33.1353859,39 33.601327,39 C34.9274672,39 36.2177657,38.538412 37.2213312,37.6507429 C37.5439058,37.3666888 37.6872723,36.9051008 37.5439058,36.5145264 C36.9345982,34.7746949 35.5367748,33.4609446 33.7446935,32.9993566 C33.7088519,32.9993566 33.6730103,32.9638498 33.6371687,32.9638498 C34.2823179,32.3247281 34.8557839,31.6856063 35.3575667,30.9399642 C36.3252905,31.721113 37.5439058,32.182701 38.8342043,32.182701 C38.9775708,32.182701 39.1567789,32.182701 39.335987,32.1471942 C41.1639099,32.0051672 42.8126247,30.9399642 43.7086653,29.3421598 C43.9237151,28.9515853 43.8878734,28.4899974 43.6011404,28.1704365 C42.4542084,26.7501659 40.6621272,26.0045238 38.8342043,26.1465508 C38.475788,26.1820576 38.1173718,26.2530711 37.7947972,26.3240847 C38.0456885,25.5429358 38.2607383,24.761787 38.4041048,23.9806381 C38.7266794,24.0161449 39.0850957,24.0516517 39.4435119,24.0516517 Z M40.3395525,19.8973601 C41.056385,19.4002654 41.8807424,19.1872248 42.7409414,19.3292518 C42.5617333,20.1459075 42.0957922,20.8560428 41.3789597,21.3531375 C40.6621272,21.8502322 39.8377698,22.0632728 38.9775708,21.9212457 C39.1567789,21.1045901 39.62272,20.3944548 40.3395525,19.8973601 Z M31.3791463,6.97289741 C31.3791463,6.97289741 31.3791463,6.97289741 31.3791463,6.97289741 C30.7698387,6.36928239 30.4114224,5.62364032 30.3755808,4.73597118 C30.3397392,3.8838088 30.6264722,3.06715319 31.1640965,2.42803141 C31.7734042,2.99613966 32.1318204,3.7772885 32.167662,4.66495764 C32.2035037,5.51712002 31.9167707,6.33377563 31.3791463,6.97289741 Z M35.1783585,36.4790196 C34.4256844,36.8695941 33.5654854,36.9761144 32.741128,36.727567 C31.880929,36.5145264 31.1999382,35.9819249 30.7698387,35.2717896 C31.5225128,34.8812152 32.3827118,34.7746949 33.2070692,35.0232423 C34.0314265,35.2362828 34.748259,35.7688843 35.1783585,36.4790196 Z M38.9775708,28.24145 C39.8377698,28.1704365 40.6621272,28.4189838 41.343118,28.9160786 C40.769652,29.5196936 40.0169779,29.910268 39.1209373,29.9812815 C38.2607383,30.0522951 37.4363809,29.8037477 36.75539,29.306653 C37.328856,28.703038 38.1173718,28.3124635 38.9775708,28.24145 Z M37.4005393,13.9322235 C37.0062814,13.1865814 36.8987565,12.334419 37.1496479,11.5177634 C37.3646977,10.665601 37.902322,9.99097249 38.6191545,9.5648913 C39.0134124,10.3105334 39.1209373,11.1626958 38.8700459,11.9793514 C38.6191545,12.796007 38.1173718,13.4706355 37.4005393,13.9322235 Z"
                                id="Shape" fillRule="nonzero"/>
                        </g>
                        <g id="icons8-globe" strokeWidth="1" transform="translate(15.000000, 16.000000)"
                           fill="#FFFFFF">
                            <path
                                d="M10.5,0 C7.0781214,0 4.04112387,1.65625687 2.12255862,4.2 L2.1,4.2 L2.1,4.22871099 C0.787450335,5.98152776 0,8.14840446 0,10.5 C0,16.2865531 4.71344695,21 10.5,21 C16.2865531,21 21,16.2865531 21,10.5 C21,4.71344695 16.2865531,0 10.5,0 Z M13.65,2.71318362 C16.7318529,3.95572758 18.9,6.96427914 18.9,10.5 C18.9,12.6922226 18.0606163,14.6772339 16.6933599,16.1704105 C16.4247121,15.3202213 15.6392953,14.7 14.7,14.7 L13.65,14.7 L13.65,11.55 C13.65,10.9704 13.1796,10.5 12.6,10.5 L7.35,10.5 L7.35,8.4 L8.4,8.4 C8.9796,8.4 9.45,7.9296 9.45,7.35 L9.45,5.25 L11.55,5.25 C12.71025,5.25 13.65,4.31025 13.65,3.15 L13.65,2.71318362 Z M2.31738276,8.61738255 L4.2,10.5 L7.35,13.65 L7.35,14.7 C7.35,15.86025 8.28975,16.8 9.45,16.8 L9.45,18.828223 C5.2980605,18.3132117 2.1,14.7951867 2.1,10.5 C2.1,9.8512974 2.17930073,9.22323465 2.31738276,8.61738255 Z"
                                id="Shape" fillRule="nonzero"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
)
