import React from 'react'
import Tokenicon1 from '../../assets/icon-bitcoin.png'
import Tokenicon2 from '../../assets/icon-etherium.png'
import Tokenicon3 from '../../assets/icon-atc.png'
import ChartImage1 from '../../assets/chart-img-1.png'
import ChartImage2 from '../../assets/chart-img-2.png'

export default function CurrencyRecentlyUsed() {
    return (
        <div className='currency__container'>
            <h2 className='currency__title title'>Currency Recently Used</h2>
            <div className='currency__row'>
                <div className="content">
                    <div className="currencies currency-1">
                        <div className="token-image">
                            <img src={Tokenicon1} alt="Botcoin Icon" />
                        </div>
                        <div className="info">
                            <h6 className="token-title">BTC/USDT<span className='currency-token-1'>+0.79%</span></h6>
                            <h4 className="token-price"><span className='token-1-price'>36,641.20</span></h4>
                            <h6 className="token-value"><span className='token-1-value'>36,641.20</span></h6>
                        </div>
                        <div className="chart-image">
                            <img src={ChartImage1} alt="Chart Image" />
                        </div>
                    </div>
                    <div className="currencies currency-2">
                        <div className="token-image">
                            <img src={Tokenicon2} alt="Etherium Icon" />
                        </div>
                        <div className="info">
                            <h6 className="token-title">ETH/USDT<span className='currency-token-2'>+2.64%</span></h6>
                            <h4 className="token-price"><span className='token-1-price'>3,641.20</span></h4>
                            <h6 className="token-value"><span className='token-1-value'>3,641.20</span></h6>
                        </div>
                        <div className="chart-image">
                            <img src={ChartImage1} alt="Chart Image" />
                        </div>
                    </div>
                    <div className="currencies currency-3">
                        <div className="token-image">
                            <img src={Tokenicon3} alt="ATC Icon" />
                        </div>
                        <div className="info">
                            <h6 className="token-title">ATC/USDT<span className='currency-token-3'>-0.81%</span></h6>
                            <h4 className="token-price"><span className='token-1-price'>41.20</span></h4>
                            <h6 className="token-value"><span className='token-1-value'>41.20</span></h6>
                        </div>
                        <div className="chart-image">
                            <img src={ChartImage2} alt="Chart Image" />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="buttons-group">
                        <a href="#" className='cryptocurrensies active'>Cryptocurrensies</a>
                        <a href="#" className='defi'>DeFi</a>
                        <a href="#" className='innovations'>Innovations</a>
                        <a href="#" className='pos'>POS</a>
                        <a href="#" className='nft'>NFT</a>
                        <a href="#" className='pow'>POW</a>
                    </div>
                    <a href="#" className='wallet'>Wallet</a>
                </div>
            </div>
        </div>
    )
}
