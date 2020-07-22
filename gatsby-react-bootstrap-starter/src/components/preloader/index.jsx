import React from 'react'

export default function Preloader({style}) {
    return (
        <div className="preloader-container" style={style}> 
           
                    <h3 className="ml-5 text-primary">Загрузка...</h3>
                    <img src="img/preloader.svg" alt=""  className="preloader"/>
                
        </div>
    )
}
