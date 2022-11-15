import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import './memegen.css'

const Memegen = () => {
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [imgmeme,setImgmeme] = useState(1);
    const [textSize,setTextSize] = useState(20);
    const [textColor, setTextColor] = useState('#FFF');
    const [textFont,setTextFont] = useState('Arial');

    const topTextSelect=(e) => {setTopText(e.target.value)}
    const bottomTextSelect=(e) => {setBottomText(e.target.value)}
    const imgSelect = (e) =>{setImgmeme(e.target.value)}
    const textSizeSelect = (e) =>{setTextSize(e.target.value)}
    const textColorSelect = (e) =>{setTextColor(e.target.value)}
    const textFontSelect = (e) =>{setTextFont(e.target.value)}

    const exportar = (e) =>{
        html2canvas(document.querySelector('#exportarImg')).then(function(canvas) {
            {/*document.body.appendChild(canvas);*/}
            let img = canvas.toDataURL('img/jpg'); 
            let link = document.createElement('a');
            link.download = 'memepropio.jpg'; {/* descarga va a ser memepropio.jpg */};
            link.href = img;
            link.click();
        });
    }    

    return (
        <>
            <div className='container memecontainer pt-1 mt-1'>
            <h5 className='text-white'> Meme Generator </h5>
                <div className="row text-white textclass m-1">
                    <div class="col-3 mt-1">
                        <label>Texto Superior</label>
                    </div>
                    <input onChange={topTextSelect} className='form-control w-50 d-block mt-1 text-white' type="text" id="fname" name="fname" arial-label='default input example'></input>
                </div>
                <div className="row text-white textclass m-1">
                    <div class="col-3 mt-1">
                        <label>Texto Inferior</label>
                    </div>
                    <input onChange={bottomTextSelect} className='form-control w-50 d-block mt-1 text-white' type="text" id="fname" name="fname" arial-label='default input example'></input>
                </div>
                <div class="row text-white textclass m-1">
                    <div class="col-3 mt-1">
                        <label>Fuente</label>
                    </div>
                    <select onChange={textFontSelect} className='form-select form-select-sm w-50' arial-label='.form select-lg example' name='fontselect'>
                        <option value={'Arial'}> Arial </option>
                        <option value={'Courier New'}> Courier New </option>
                        <option value={'Lucida Console'}> Lucida</option>
                        <option value={'Times'}> Times</option>
                        <option value={'Verdana'}> Verdana</option>
                    </select>
                </div>
                <div className="row text-white textclass m-1">
                    <div className="col-3 mt-1">
                        <label>Tamaño</label>
                    </div>
                    <input className='w-50 d-block' type="range" min="0" max="70" value={textSize} onChange={textSizeSelect}></input>
                </div>
                <div class="row text-white textclass m-1">
                    <div class="col-3 mt-1">
                        <label>Color</label>
                    </div>
                    <input className='w-50 d-block' type="color" onChange={textColorSelect}></input>
                </div>
                <div class="row text-white textclass m-1">
                    <div class="col-3 mt-1">
                        <label>Imagen</label>
                    </div>
                    <select onChange={imgSelect} className='form-select form-select-sm w-50' arial-label='.form select-lg example' name='imgselect'>
                        <option value={1}> Bart </option>
                        <option value={2}> Lisa </option>
                        <option value={3}> Marge </option>
                        <option value={4}> Homero </option>
                        <option value={5}> Krosty </option>
                        <option value={6}> Maggie </option>
                        <option value={7}> Bob </option>
                        <option value={8}> Mr Burns </option>
                    </select>
                </div>
                <div className='row m-1' id='imgcontainer'>
                    <figure className='text-center' id='exportarImg'>
                        <figcaption style={{fontSize: `${textSize}px`, color: `${textColor}`, fontFamily: `${textFont}`}}>
						    {topText}
                        </figcaption>
                        <img className="img-fluid mt-1" src={`${process.env.PUBLIC_URL}/img/${imgmeme}.png`} />
                        <figcaption style={{fontSize: `${textSize}px`, color: `${textColor}`, fontFamily: `${textFont}`}}>
						    {bottomText}
                        </figcaption>
                    </figure>
                </div>
                <button onClick={exportar} type='button' className='btn btn-success btn-sm'> Generar meme </button>
            </div>

        </>
    )
}

export default Memegen;