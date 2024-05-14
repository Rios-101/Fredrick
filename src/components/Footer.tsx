import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    "Copyright © 2024 Fredrick Cyrus assistant.io All Rights Reserved"
    return (
        <footer className=" bg-cover bg-center py-8 bg-[#2F2120]" >
            <div className="w-[90%] flex justify-center items-center gap-5 mx-auto">

                <h1 className=" text-primary-300 text-center play text-xs font-medium">
                    Copyright © {currentYear}  Fredrick Cyrus assistant.io All Rights Reserved
                </h1>

            </div>

        </footer>
    )
}

export default Footer