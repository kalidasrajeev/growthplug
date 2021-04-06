import React from 'react'

export default function Navbar() {
    return (
        <div className='navContain'>
            <div className='navItem'>
                <div class="dropdown">
                    <div class="dropbtn">HOME</div>
                </div>
            </div>
            <div className='navItem'>
                <div class="dropdown">
                    <div class="dropbtn">OUR TEAM</div>
                    <div class="dropdown-content" style={{ minWidth: '160px' }}>
                        <div>MEET DR. HU</div>
                        <div>MEET DR. LI</div>
                        <div>MEET OUR TEAM</div>
                    </div>
                </div>
            </div>
            <div className='navItem'>
                <div class="dropdown">
                    <div class="dropbtn">PATIENT INFORMATION</div>
                    <div class="dropdown-content" style={{ minWidth: '250px' }}>
                        <div>NEW PATIENT WELCOME FORMS</div>
                        <div>NEW PATIENT FORMS</div>
                        <div>INSURANCE</div>
                    </div>
                </div>
            </div>
            <div className='navItem'>
                <div class="dropdown">
                    <div class="dropbtn">BLOG</div>
                </div>
            </div>
            <div className='navItem'>
                <div class="dropdown">
                    <div class="dropbtn">OUR SERVICES</div>
                    <div class="dropdown-content" style={{ minWidth: '250px', height: '450px' }}>
                        <div>COSMETIC DENTISTRY</div>
                        <div>CROWNS AND BRIDGES</div>
                        <div>CHILDREN'S DENTISTRY</div>
                        <div>DENTAL ANXIETY</div>
                        <div>DENTAL CLEANINGS</div>
                        <div>DENTAL EMERGENCIES</div>
                        <div>DENTAL FILLINGS</div>
                        <div>DENTURES</div>
                        <div>EXTRACTIONS</div>
                        <div>FAST BRACES</div>
                        <div>GENTLE DENTISTRY</div>
                        <div>GUM DISEASE</div>
                        <div>IMPLANTS</div>
                        <div>INVISALING</div>
                        <div>NIGHT GUARDS</div>
                        <div>PREVENTIVE DENTISTRY</div>
                        <div>SJOGRN'S SYNDROME</div>
                        <div>TEMPSURE ENVI</div>
                        <div>TMJ DISORDER</div>
                        <div>WISDOM TOOTH EXTRACTIONS</div>
                    </div>
                </div>
            </div>
            <div className='navItem'>
                <div class="dropdown">
                    <div class="dropbtn">REVIEWS</div>
                </div>
            </div>
            <div className='navItem'>
                <div class="dropdown">
                    <div class="dropbtn">CONTACT</div>
                </div>
            </div>
        </div>
    )
}
