import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ContentMob() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div>
            <div className='imageContainer'>
                <img src="https://images.unsplash.com/photo-1588069362198-8b64638b9a6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" style={{ width: '100%', objectFit: 'cover' }} />
                <div className="text">
                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center' }}>
                            <div style={{ fontFamily: 'dancing script', fontSize: '60px', color: '#007259' }}>
                                Fay Hu<span style={{ fontSize: '10px', fontFamily: 'poppins', position: 'relative', bottom: '25px', left: '10px', fontWeight: '500' }}>DMD</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '12px', marginTop: '10px', color: '#007259', fontFamily: 'poppins', fontWeight: '500', backgroundColor: '#F8F4EF', padding: '6px' }}>
                                FAMILY DENTISTRY
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '300px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>
                    <div style={{ alignSelf: 'center', fontFamily: 'poppins' }}>
                        <div style={{ textAlign: 'Center', fontSize: '18px', fontWeight: '500' }}>NEW PATIENCE WELCOME</div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ marginTop: '4px', alignSelf: 'center', height: '4px', backgroundColor: '#007259', width: "120px" }}></div></div>
                        <div style={{ fontSize: '14px', padding: '30px', fontWeight: '500', color: 'gray', textAlign: 'center' }}>We want you to be our patient!</div>
                        <div style={{ width: '100%' }}>
                            <input className='introbtnMob' type='submit' value='Introduction' />
                            <div style={{ height: '10px' }}></div>
                            <input className='introbtnMob' type='submit' value='Testimonials' />
                            <div style={{ height: '10px' }}></div>
                            <input className='bookbtnMob' type='submit' value='Book an Appointment' />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f8f4ef', paddingBottom: '80px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ alignSelf: 'center', marginTop: '60px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ fontSize: '24px', fontWeight: '500', fontFamily: 'poppins' }}>ABOUT DR. HU</div></div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ marginTop: '8px', alignSelf: 'center', height: '4px', backgroundColor: '#007259', width: "120px" }}></div></div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: "center" }}>
                    <div style={{ alignSelf: 'center', width: '80%', marginTop: '50px' }}>
                        <div style={{ width: '100%' }}>
                            <img src='https://gp-assets-1.growthplug.com/website_files/2020/11/20/2034032.png' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ lineHeight: '28px', fontSize: '13px', fontFamily: 'poppins', width: '80%' }}>
                        When the families of Winter Park, Florida look for a family dentist who provides comprehensive dental care, they turn to Dr. Hu. At Fay Hu DMD, patients receive preventive care, such as teeth cleanings and sealants, as well as restorative and cosmetic dental procedures, including oral surgery, dental crowns, and treatments for periodontal disease. She also provides orthodontic treatment through Invisalign and Fast Braces, a new innovative technique.<br /><br />

                        Dr. Hu and her professional team work with patients to meet their dental needs while making them feel comfortable in the office. With excellent customer service and exceptional care, her dental office treats most oral health issues, including temporomandibular joint disorder (TMJ) and Sjögren's syndrome.<br /><br />

                        In private practice since 1998, her office is diverse and multi-lingual. She is one of the only Chinese dentists in the central Florida/Winter Park area, as well as being one of the top female dentists. Her office also has Spanish speaking staff members.<br /><br />

                        Born and raised in Liuzhou, China, Dr. Hu attended Sun Yat-Sen University of Medical Sciences, where she earned her first dental degree. She then received her Master's degree in Oral Biology at the University of Florida before attending the University of Pennsylvania School of Dental Medicine, where she graduated with her doctorate.<br /><br />

                        She has been voted one of Greater Orlando’s Top Dentists yearly by her peers since 2007 and served as a dental examiner for the Florida Dental License Board and as a supporting doctor for the National Sjögren's Syndrome Foundation. She also sits on the admission interview committee for the University of Pennsylvania, her alma mater.<br /><br />

                        Dr. Hu is a member of multiple medical organizations, including the American Dental Association, Florida Dental Association, and Greater Orlando Dental Association. Dr. Hu is also involved in a local chapter of Franks Spear Study Club.
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <input className='learnbtn' type='submit' value='Learn More' style={{ alignSelf: 'center' }} />
                </div>


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ alignSelf: 'center', marginTop: '60px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ fontSize: '24px', fontWeight: '500', fontFamily: 'poppins' }}>ABOUT DR. LI</div></div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ marginTop: '8px', alignSelf: 'center', height: '4px', backgroundColor: '#007259', width: "120px" }}></div></div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: "center" }}>
                    <div style={{ alignSelf: 'center', width: '80%', marginTop: '50px' }}>
                        <div style={{ width: '100%' }}>
                            <img src='https://gp-assets-1.growthplug.com/website_files/2020/12/18/Dr._Ling_Li.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ lineHeight: '28px', fontSize: '13px', fontFamily: 'poppins', width: '80%' }}>
                        Dr. Li earned her Doctor of Dental Medicine (DMD) from the University of Florida’s College of Dentistry. She was also a graduate of Peking University’s School of Stomatology. Dr. Li has had more than 20 years of practicing clinical dentistry plus 5 years of scientific research experience on bone and hormone studies. She has performed many hard and soft tissue surgical procedures, including tooth and wisdom tooth extractions, bone grafting, periodontal surgeries, tissue regenerating, biopsy, as well as dental implants.<br /><br />

                            In her downtime, Dr. Li enjoys travelling around the world
                    </div>
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ alignSelf: 'center', marginTop: '60px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ fontSize: '24px', fontWeight: '500', fontFamily: 'poppins' }}>SERVICES</div></div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ marginTop: '8px', alignSelf: 'center', height: '4px', backgroundColor: '#007259', width: "120px" }}></div></div>
                    </div>
                </div>
                <div style={{ marginTop: '60px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '2%' }}></div>
                        <div style={{ width: '96%', display: 'flex' }}>
                            <div style={{ width: '49%' }}>
                                <div style={{ marginTop: '4px', width: '100%' }}>
                                    <input className='serivceleftbtn' type='submit' value='COSMETIC DENTISTRY' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>

                                <div style={{ marginTop: '4px', width: '100%' }}>
                                    <input className='serivceleftbtn' type='submit' value="CHILDREN'S DENTISTRY" style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivceleftbtn' type='submit' value="SJOGREN'S SYNDROME" style={{ alignSelf: 'center', fontSize: '10px', textTransform: 'capitalize' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivceleftbtn' type='submit' value='DENTAL CLEANINGS' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivceleftbtn' type='submit' value='GENTLE DENTISTRY' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivceleftbtn' type='submit' value='IMPLANTS' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivceleftbtn' type='submit' value='TMJ DISORDER' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivceleftbtn' type='submit' value='EXTRACTION' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivceleftbtn' type='submit' value='TEMPSURE ENVI' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>

                            </div>
                            <div style={{ width: '2%' }}></div>
                            <div style={{ width: '49%' }}>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='CROWN AND BRIDGES' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='DENTURES' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='DENTAL FILLINGS' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='DENTAL EMERGENICES' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='FAST BRACES' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='GUM DISEASE' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='INVISALIGN' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='PREVENTIVE DENTISTRY' style={{ alignSelf: 'center', fontSize: '10px' }} />
                                </div>
                                <div style={{ width: '100%', marginTop: '4px', }}>
                                    <input className='serivcerightbtn' type='submit' value='WISDOM TEETH EXTRACTIONS' style={{ alignSelf: 'center', fontSize: '9px' }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '2%' }}></div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f8f4ef', marginTop: '80px', fontFamily: 'poppins', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ alignSelf: 'center', marginTop: '40px' }}>
                        <div style={{ fontSize: '24px', fontWeight: '500', textAlign: 'center', padding: '10px', paddingBottom: '0px' }}>WE ARE HERE TO HELP YOU</div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ marginTop: '8px', alignSelf: 'center', height: '4px', backgroundColor: '#007259', width: "120px" }}></div></div>
                    </div>
                </div>
                <div style={{ alignContent: 'center', marginTop: '40px' }}>
                    <div>
                        <div className='staffDivMob'>
                            <div style={{ alignSelf: 'center', width: '60%' }}>
                                <img className='staffImgMob' src='https://gp-assets-1.growthplug.com/cache/eb/fe/ebfeb5acd1c1033ffbd4c3afd2e80240.jpg' />
                            </div>

                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                        <div style={{ alignSelf: 'center', color: '#007259', fontWeight: '600', fontSize: '18px' }}>Volanta Peng</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: 'gray', fontWeight: '600', fontSize: '10px', marginTop: '4px' }}>Office Manager</div>
                    </div>
                </div>

                <div style={{ alignContent: 'center', marginTop: '20px' }}>
                    <div>
                        <div className='staffDivMob'>
                            <div style={{ alignSelf: 'center', width: '60%' }}>
                                <img className='staffImgMob' src='https://gp-assets-1.growthplug.com/website_files/2021/01/05/ashley-new.png' />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: '#007259', fontWeight: '600', fontSize: '18px' }}>Ashley Hall</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: 'gray', fontWeight: '600', fontSize: '10px', marginTop: '4px' }}>Dental Hygienist</div>
                    </div>
                </div>

                <div style={{ alignContent: 'center', marginTop: '20px' }}>
                    <div>
                        <div className='staffDivMob'>
                            <div style={{ alignSelf: 'center', width: '60%' }}>
                                <img className='staffImgMob' src='https://gp-assets-1.growthplug.com/cache/ac/3f/ac3fba6a3f08a831d4adec1b1b430c69.jpg' />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: '#007259', fontWeight: '600', fontSize: '18px' }}>Densie Alveshire</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: 'gray', fontWeight: '600', fontSize: '10px', marginTop: '4px' }}>Dental Hygienist</div>
                    </div>
                </div>

                <div style={{ alignContent: 'center', marginTop: '20px' }}>
                    <div>
                        <div className='staffDivMob'>
                            <div style={{ alignSelf: 'center', width: '60%' }}>
                                <img src='https://gp-assets-1.growthplug.com/cache/a7/ec/a7ecdb0ef6c60c087d64148c03b76871.jpg' className='staffImgMob' />
                            </div>
                        </div>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: '#007259', fontWeight: '600', fontSize: '18px' }}>Julia Adams</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: 'gray', fontWeight: '600', fontSize: '10px', marginTop: '4px' }}>Finance Coordinator</div>
                    </div>
                </div>

                <div style={{ alignContent: 'center', marginTop: '20px' }}>
                    <div>
                        <div className='staffDivMob'>
                            <div style={{ alignSelf: 'center', width: '60%' }}>
                                <img src='https://gp-assets-1.growthplug.com/cache/f2/b1/f2b13f43c6da9e1f403d7e82bfa91ef0.jpg' className='staffImgMob' />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: '#007259', fontWeight: '600', fontSize: '18px' }}>Iris Lopez</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: 'gray', fontWeight: '600', fontSize: '10px', marginTop: '4px' }}>Dental Assistant</div>
                    </div>
                </div>

                <div style={{ alignContent: 'center', marginTop: '20px' }}>
                    <div >
                        <div className='staffDivMob'>
                            <div style={{ alignSelf: 'center', width: '60%' }}>
                                <img src='https://gp-assets-1.growthplug.com/cache/3f/e5/3fe595e846d078fdc22557246126f98d.jpg' className='staffImgMob' />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: '#007259', fontWeight: '600', fontSize: '18px' }}>Anna Scotchie</div>
                    </div>

                    <div style={{ textAlign: 'center', color: 'gray', fontWeight: '600', fontSize: '10px', marginTop: '4px', marginLeft: '4px', marginRight: '4px' }}>Receptionist and Junior Insurance Coordinator</div>

                </div>

                <div style={{ alignContent: 'center', marginTop: '20px' }}>
                    <div >
                        <div className='staffDivMob'>
                            <div style={{ alignSelf: 'center', width: '60%' }}>
                                <img src='https://gp-assets-1.growthplug.com/website_files/2021/01/11/Lihong_new_cropped.jpg' className='staffImgMob' />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: '#007259', fontWeight: '600', fontSize: '18px' }}>Lihong</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ alignSelf: 'center', color: 'gray', fontWeight: '600', fontSize: '10px', marginTop: '4px' }}>Receptionist</div>
                    </div>
                </div>
            </div>

            <div class="parallaxMob" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1572343747798-b0f306c1ed49?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUwfHxicmljayUyMGJ1aWxkaW5nc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=60)` }}>
                <div style={{ alignSelf: 'center', width: '80%', color: 'white' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ alignSelf: 'center', fontSize: '26px' }}>Our Philosophy</div></div>
                    <div style={{ textAlign: 'center', fontSize: '14px', border: '2px solid white', marginTop: '10px' }} className='philo'><div style={{ margin: '20px' }}>We are dedicated to providing the highest quality of dental care to our patients. Through excellence in dentistry and quality in relationships, we can have a positive influence on our patient's oral health, aesthetics, and self-esteem.</div></div>
                </div>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ alignSelf: 'center', marginTop: '60px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '500', textAlign: 'center', padding: '10px', paddingBottom: '0px' }}>INSURANCE DETAILS</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ marginTop: '8px', alignSelf: 'center', height: '4px', backgroundColor: '#007259', width: "120px" }}></div></div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}><div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', padding: '10px' }}>Please contact our office for a complimentary insurance verification if you do not see your provider listed or would like a more detailed breakdown!</div></div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/1771751.png' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/1858337.jpg' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/2272134.png' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/1771699.png' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/1772502.png' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/1771816.png' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/1771704.png' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/1771716.png' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                        <img className='box-shadow' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/1771818.png' style={{ width: '110px', height: '70px', margin: '10px', padding: '10px' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <input className='learnbtn' type='submit' value='Learn More' style={{ alignSelf: 'center' }} />
                    </div>
                </div>
            </div>

            <div className='reviews'>
                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className='reviewCard' style={{ width: '80%', height: '80%', alignSelf: 'center' }}>
                        <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', margin: '15px' }}>WHAT OUR PATIENTS ARE SAYING.</div>
                        <Slider {...settings}>
                            <div>
                                <div style={{ height: '300px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ alignSelf: 'center' }}>
                                        <div style={{ width: '100%', textAlign: 'center', fontSize: '11px' }}>"Great place for all your dental needs. Dentist is very knowledgeable and kind to little kids who come, and the office staff are really nice!"</div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '60px', height: '4px', backgroundColor: 'white', marginTop: '30px' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ marginTop: '30px' }}>Laura B | 2021</div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ marginTop: '30px' }}>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ height: '300px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ alignSelf: 'center' }}>
                                        <div style={{ width: '100%', textAlign: 'center', fontSize: '11px' }}>"I'm 63 years old and been going to Dentist all my short life since kindergarten. And I never had such a greatest time there ! The appointment was for not me but my two son's. The treatment they received was over the top! Thank you Iris,valanta,Dr Hu. Can't wait to go back Mr Marin."</div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '60px', height: '4px', backgroundColor: 'white', marginTop: '30px' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ marginTop: '30px' }}>Diane W | 2020</div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ marginTop: '30px' }}>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ height: '300px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ alignSelf: 'center' }}>
                                        <div style={{ width: '100%', textAlign: 'center', fontSize: '11px' }}>
                                            "Dr. Fay Hu has always done an excellent job for many years with all of my dental treatments as needed. I have no complaints. For those of us that don't like needles, she is able to give a shot that can't be felt and I've never experienced any pain receiving a filling, root canal, or a cap. She's..."</div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '60px', height: '4px', backgroundColor: 'white', marginTop: '30px' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ marginTop: '30px' }}>Mark S | 2021</div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ marginTop: '30px' }}>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                                <span class="material-icons">star</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', marginTop: '40px' }}>
                <div style={{ fontFamily: 'poppins', color: '#007259', fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>LOCATION</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ fontFamily: 'poppins', color: 'black', fontWeight: '500', width: '60%', textAlign: 'center' }}><div style={{ padding: '10px', lineHeight: '30px', fontSize: '14px' }}>Fay Hu General Dentistry
                800 West Morse Blvd
                Suite 3B Winter Park, FL 32789
                            </div>
                </div></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><input className='phonebtn' type='submit' value='Phone: 407-647-3223' style={{ alignSelf: 'center' }} /></div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}><input className='phonebtn' type='submit' value='Fax: 407-459-3223' style={{ alignSelf: 'center' }} /></div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}><span style={{ padding: '10px' }}><i aria-hidden="true" class="fa fa-google" style={{ fontSize: '30px', color: '#007259' }}></i></span><span style={{ padding: '10px' }}><i class="fa fa-facebook" style={{ fontSize: '30px', color: '#007259' }}></i></span><span style={{ padding: '10px' }}><i class="fa fa-yelp" style={{ fontSize: '30px', color: '#007259' }}></i></span></div>
            </div>

            <div style={{ width: '100%', marginTop: '40px' }}>
                <div style={{ fontFamily: 'poppins', color: '#007259', fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>OFFICE HOURS</div>
                <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'center', marginTop: '10px' }}><div style={{ borderBottom: '1px solid #007259', fontFamily: 'poppins', color: 'black', fontWeight: '500', width: '80%' }}><div style={{ padding: '10px' }}>MONDAY<span style={{ float: 'right' }}>7:00 am - 2:00 pm</span></div></div></div>
                <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'center' }}><div style={{ borderBottom: '1px solid #007259', fontFamily: 'poppins', color: 'black', fontWeight: '500', width: '80%' }}><div style={{ padding: '10px' }}>TUESDAY<span style={{ float: 'right' }}>7:00 am - 2:00 pm</span></div></div></div>
                <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'center' }}><div style={{ borderBottom: '1px solid #007259', fontFamily: 'poppins', color: 'black', fontWeight: '500', width: '80%' }}><div style={{ padding: '10px' }}>WEDNESDAY<span style={{ float: 'right' }}>7:00 am - 2:00 pm</span></div></div></div>
                <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'center' }}><div style={{ borderBottom: '1px solid #007259', fontFamily: 'poppins', color: 'black', fontWeight: '500', width: '80%' }}><div style={{ padding: '10px' }}>THURSDAY<span style={{ float: 'right' }}>7:00 am - 2:00 pm</span></div></div></div>
                <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'center' }}><div style={{ borderBottom: '1px solid #007259', fontFamily: 'poppins', color: 'black', fontWeight: '500', width: '80%' }}><div style={{ padding: '10px' }}>FRIDAY<span style={{ float: 'right' }}>7:00 am - 2:00 pm</span></div></div></div>
                <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'center' }}><div style={{ borderBottom: '1px solid #007259', fontFamily: 'poppins', color: 'black', fontWeight: '500', width: '80%' }}><div style={{ padding: '10px' }}>SATURDAY<span style={{ float: 'right' }}>Closed</span></div></div></div>
                <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'center' }}><div style={{ borderBottom: '1px solid #007259', fontFamily: 'poppins', color: 'black', fontWeight: '500', width: '80%' }}><div style={{ padding: '10px' }}>SUNDAY<span style={{ float: 'right' }}>Closed</span></div></div></div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0752687620525!2d-81.36145368559364!3d28.59751869241704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e770128ac71b81%3A0xf66658aba4550eff!2sFay%20Hu%20General%20Dentistry%3A%20Fay%20Hu%2C%20DMD!5e0!3m2!1sen!2sin!4v1617688095717!5m2!1sen!2sin"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '300px', marginTop: '60px' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />

            <div style={{ marginTop: '10px', fontFamily: 'poppins' }}>
                <div style={{ color: '#007259', fontWeight: '500' }}>
                    <div style={{ fontSize: '12px',width:'100%',textAlign:'center' }}>
                        <div style={{margin:'10px'}}>Privacy Policy</div>
                   </div>
                    <div style={{ fontSize: '12px',width:'100%',textAlign:'center'  }}>
                        <div style={{margin:'10px'}}>Terms & Conditions</div>
                   </div>
                    <div style={{ fontSize: '12px',width:'100%',textAlign:'center'  }}>
                        <div style={{margin:'10px'}}>Accessibility Statement</div>
                   </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#007259', fontFamily: 'poppins' }}>
                <div style={{ display: 'flex', justifyContent: 'center', color: 'white', fontWeight: '500' }}>
                    <div style={{ alignSelf: 'center', margin: '10px', fontSize: '10px' }}>
                        © Copyright 2021 GrowthPlug, Inc
                   </div>
                </div>
            </div>

        </div>
    )
}
