import React from 'react'
import TableImg1 from '../../assets/icon-bitcoin.png'
import TableImg2 from '../../assets/icon-etherium.png'
import TableImg3 from '../../assets/icon-bch.png'
import TableImg4 from '../../assets/icon-ripple.png'
import TableImg5 from '../../assets/icon-chainlink.png'
import TableChartImg1 from '../../assets/chart-img-1.png'
import TableChartImg2 from '../../assets/chart-img-2.png'

export default function Transaction() {
    return (
        <div className='transaction__container'>
            <div className="row">
                <h2 className='transaction__title title'>The Latest Transaction</h2>
                <a href="#" className='btn transaction-btn'>view more</a>
            </div>
            <div className='transaction-btn-group'>
                <a href="#" className='all active'>All</a>
                <a href="#" className='defi'>DeFi</a>
                <a href="#" className='innovation'>Innovation</a>
                <a href="#" className='pos'>POS</a>
                <a href="#" className='nft'>NFT</a>
                <a href="#" className='pow'>POW</a>
                <a href="#" className='storage'>Storage</a>
            </div>
            <div className="transaction__table">
                    <div className='table-row'>
                        <p className='s-1'>#</p>
                        <p className='s-2'>Name</p>
                        <p className='s-3'>Price</p>
                        <p className='s-4'>24h Change</p>
                        <p className='s-5'>Chart</p>
                        <p className='s-6'>Trade</p>
                    </div>
                    <hr />
                    <div className='table-row'>
                        <p className='s-1'>1</p>
                        <div className='s-2'><img src={TableImg1} alt="Bitcoin Icon" /><p>Bitcoin <span>BTC</span></p></div>
                        <p className='s-3'>$36,201.34</p>
                        <p className='s-4'>+1.71%</p>
                        <div className='s-5'><img src={TableChartImg1} alt="" /></div>
                        <div className='s-6'><a href="#" className='transaction-btn'>Trade</a></div>
                    </div>
                    <div className='table-row'>
                        <p className='s-1'>2</p>
                        <div className='s-2'><img src={TableImg2} alt="Etherium Icon" /><p>Etherium <span>ETH</span></p></div>
                        <p className='s-3'>$2,605.95</p>
                        <p className='s-4'>+2.04%</p>
                        <div className='s-5'><img src={TableChartImg1} alt="" /></div>
                        <div className='s-6'><a href="#" className='transaction-btn'>Trade</a></div>
                    </div>
                    <div className='table-row'>
                        <p className='s-1'>3</p>
                        <div className='s-2'><img src={TableImg3} alt="Bitcoin Coin Icon" /><p>Bitcoin Coin <span>BCH</span></p></div>
                        <p className='s-3'>$939.20</p>
                        <p className='s-4'>-0.74%</p>
                        <div className='s-5'><img src={TableChartImg1} alt="" /></div>
                        <div className='s-6'><a href="#" className='transaction-btn'>Trade</a></div>
                    </div>
                    <div className='table-row'>
                        <p className='s-1'>4</p>
                        <div className='s-2'><img src={TableImg4} alt="Ripple" /><p>Ripple <span>XRP</span></p></div>
                        <p className='s-3'>$1.02</p>
                        <p className='s-4'>+1.20%</p>
                        <div className='s-5'><img src={TableChartImg2} alt="" /></div>
                        <div className='s-6'><a href="#" className='transaction-btn'>Trade</a></div>
                    </div>
                    <div className='table-row'>
                        <p className='s-1'>5</p>
                        <div className='s-2'><img src={TableImg5} alt="Chainlink Icon" /><p>Chainlink <span>LINK</span></p></div>
                        <p className='s-3'>$30.56</p>
                        <p className='s-4'>-3.84%</p>
                        <div className='s-5'><img src={TableChartImg1} alt="" /></div>
                        <div className='s-6'><a href="#" className='transaction-btn'>Trade</a></div>
                    </div>
            </div>
        </div>
    )
}
